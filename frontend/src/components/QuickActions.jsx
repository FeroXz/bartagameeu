const actions = [
  { label: 'Tier importieren', description: 'CSV aus alter Haltungsliste übernehmen.', icon: '⬆️' },
  { label: 'Adoptionsseite teilen', description: 'Link zur aktuellen Warteliste kopieren.', icon: '🔗' },
  { label: 'Pflegeprotokoll aktualisieren', description: 'Standardabläufe und Checklisten pflegen.', icon: '🧾' },
];

export default function QuickActions() {
  return (
    <div className="glass-card p-6">
      <h3 className="section-title">Schnellaktionen</h3>
      <div className="mt-4 space-y-3 text-sm">
        {actions.map((action) => (
          <button
            key={action.label}
            className="w-full text-left rounded-2xl border border-white/5 bg-white/5 px-4 py-3 transition hover:border-brand-400/40 hover:bg-brand-500/15"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{action.icon}</span>
              <div>
                <p className="font-semibold text-white">{action.label}</p>
                <p className="text-xs text-slate-400 mt-1">{action.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
