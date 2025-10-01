#!/usr/bin/env bash
set -euo pipefail

if [[ "${FEROXZ_DEBUG:-0}" == "1" ]]; then
  set -x
fi

log() {
  printf '\033[1;32m[feroxz]\033[0m %s\n' "$1"
}

die() {
  printf '\033[1;31m[feroxz]\033[0m %s\n' "$1" >&2
  exit 1
}

if [[ $# -gt 1 ]]; then
  die "Usage: $0 [install-directory]"
fi

REPO_URL=${FEROXZ_REPO_URL:-"https://github.com/bartagameeu/bartagameeu.git"}
INSTALL_DIR=${1:-${FEROXZ_INSTALL_DIR:-"/opt/feroxz"}}
PORT=${FEROXZ_HTTP_PORT:-8080}
RUN_USER=${FEROXZ_USER:-$(id -un)}
RUN_GROUP=${FEROXZ_GROUP:-$(id -gn)}
PHP_BIN=${FEROXZ_PHP_BIN:-}

if [[ "$INSTALL_DIR" == "/" ]]; then
  die "Installation directory cannot be '/'"
fi

SUDO=""
if [[ "$EUID" -ne 0 ]]; then
  if command -v sudo >/dev/null 2>&1; then
    SUDO="sudo"
  else
    die "This installer requires root privileges (sudo)."
  fi
fi

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    die "Required command '$1' not found."
  fi
}

sync_tree() {
  local src="${1%/}"
  local dest="${2%/}"
  if command -v rsync >/dev/null 2>&1; then
    $SUDO rsync -a "$src/" "$dest/"
  else
    log "rsync not available – falling back to tar copy"
    $SUDO mkdir -p "$dest"
    (cd "$src" && tar -cf - .) | $SUDO tar -C "$dest" -xf -
  fi
}

# Basic tooling required before package installation
for cmd in curl tar mktemp; do
  require_cmd "$cmd"
done

install_packages() {
  if command -v apt-get >/dev/null 2>&1; then
    log "Installing required packages via apt-get"
    $SUDO apt-get update -y
    $SUDO apt-get install -y git php php-cli php-sqlite3 php-mbstring php-xml sqlite3 unzip npm rsync
  elif command -v dnf >/dev/null 2>&1; then
    log "Installing required packages via dnf"
    $SUDO dnf install -y git php-cli php-sqlite3 php-mbstring php-xml sqlite sqlite-devel npm rsync
  elif command -v pacman >/dev/null 2>&1; then
    log "Installing required packages via pacman"
    $SUDO pacman -Sy --noconfirm git php php-sqlite npm rsync
  else
    log "Skipping package installation – unsupported package manager"
  fi
}

install_packages

require_cmd git

if [[ -z "$PHP_BIN" ]]; then
  PHP_BIN=$(command -v php || true)
fi

if [[ -z "$PHP_BIN" ]]; then
  die "php binary not found in PATH"
fi

require_cmd "$PHP_BIN"
require_cmd sqlite3

TMP_ROOT=$(mktemp -d)
BACKUP_DIR=$(mktemp -d)
trap 'rm -rf "$TMP_ROOT" "$BACKUP_DIR"' EXIT

log "Cloning repository $REPO_URL"
if ! git clone --depth 1 "$REPO_URL" "$TMP_ROOT/repo"; then
  die "Failed to clone repository from $REPO_URL"
fi

if $SUDO test -d "$INSTALL_DIR"; then
  log "Backing up existing storage and uploads"
  if $SUDO test -d "$INSTALL_DIR/uploads"; then
    $SUDO cp -a "$INSTALL_DIR/uploads" "$BACKUP_DIR/uploads"
  fi
  if $SUDO test -d "$INSTALL_DIR/storage"; then
    $SUDO cp -a "$INSTALL_DIR/storage" "$BACKUP_DIR/storage"
  fi
fi

log "Deploying application to $INSTALL_DIR"
$SUDO rm -rf "$INSTALL_DIR"
$SUDO mkdir -p "$INSTALL_DIR"
sync_tree "$TMP_ROOT/repo" "$INSTALL_DIR"
$SUDO chown -R "$RUN_USER:$RUN_GROUP" "$INSTALL_DIR"

if [[ -d "$BACKUP_DIR/uploads" ]]; then
  log "Restoring previous uploads"
  sync_tree "$BACKUP_DIR/uploads" "$INSTALL_DIR/uploads"
fi

if [[ -d "$BACKUP_DIR/storage" ]]; then
  log "Restoring previous storage"
  sync_tree "$BACKUP_DIR/storage" "$INSTALL_DIR/storage"
fi

$SUDO mkdir -p "$INSTALL_DIR/storage" "$INSTALL_DIR/uploads"
$SUDO chmod -R 775 "$INSTALL_DIR/storage" "$INSTALL_DIR/uploads"

if command -v npm >/dev/null 2>&1; then
  log "Installing frontend dependencies"
  if ! (cd "$INSTALL_DIR/frontend" && npm install --legacy-peer-deps && npm run build); then
    log "Frontend build failed; continuing"
  fi
else
  log "npm not found – skipping frontend build"
fi

if command -v systemctl >/dev/null 2>&1; then
  SERVICE_FILE="/etc/systemd/system/feroxz.service"
  log "Configuring systemd service (port $PORT)"
  $SUDO tee "$SERVICE_FILE" >/dev/null <<SERVICE
[Unit]
Description=FeroxZ PHP Server
After=network.target

[Service]
Type=simple
WorkingDirectory=$INSTALL_DIR
ExecStart=$PHP_BIN -S 0.0.0.0:$PORT -t public
User=$RUN_USER
Group=$RUN_GROUP
Restart=on-failure
Environment=PHP_CLI_SERVER_WORKERS=4

[Install]
WantedBy=multi-user.target
SERVICE
  $SUDO systemctl daemon-reload
  $SUDO systemctl enable --now feroxz.service
  HOST_IP=$(hostname -I 2>/dev/null | awk '{print $1}')
  if [[ -n "${HOST_IP:-}" ]]; then
    log "Service started. Access FeroxZ at http://$HOST_IP:$PORT"
  else
    log "Service started. Access FeroxZ via http://<server-ip>:$PORT"
  fi
else
  log "systemd not available – start server manually using:"
  log "  $PHP_BIN -S 0.0.0.0:$PORT -t $INSTALL_DIR/public"
fi

log "Installation completed successfully"
