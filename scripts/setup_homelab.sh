#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMPOSE_DIR="$ROOT_DIR/infra"
COMPOSE_FILE="$COMPOSE_DIR/docker-compose.yml"
ENV_FILE="$COMPOSE_DIR/.env"

if ! command -v docker >/dev/null 2>&1; then
  echo "[!] Docker ist nicht installiert. Bitte installiere Docker Engine bevor du das Skript ausführst." >&2
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  if ! command -v docker-compose >/dev/null 2>&1; then
    echo "[!] Docker Compose ist nicht verfügbar. Installiere docker compose plugin oder docker-compose." >&2
    exit 1
  else
    COMPOSE_CMD="docker-compose"
  fi
else
  COMPOSE_CMD="docker compose"
fi

mkdir -p "$COMPOSE_DIR/data" "$COMPOSE_DIR/config"

if [ ! -f "$ENV_FILE" ]; then
  cp "$COMPOSE_DIR/.env.example" "$ENV_FILE"
  echo "[*] Beispiel-Umgebungsdatei nach .env kopiert. Bitte prüfe die Werte unter $ENV_FILE." >&2
fi

# Erzeuge Basisverzeichnisse für Services
while IFS= read -r line; do
  [ -z "$line" ] && continue
  mkdir -p "$COMPOSE_DIR/data/$line"
done <<'SERVICES'
pihole/etc-pihole
pihole/etc-dnsmasq.d
wireguard/config
openwebui
nextcloud
nextcloud-data
bookstack
filebrowser
flowise
fail2ban
crowdsec
wazuh/indexer-data
wazuh/dashboard
wazuh/manager
uptime-kuma
code-server
duplicati/config
duplicati/backups
duplicati/source
npm
npm/logs
ddns
SERVICES

$COMPOSE_CMD -f "$COMPOSE_FILE" --env-file "$ENV_FILE" pull
$COMPOSE_CMD -f "$COMPOSE_FILE" --env-file "$ENV_FILE" up -d

printf '\nHomelab-Stack wurde gestartet.\n'
