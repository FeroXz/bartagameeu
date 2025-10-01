const navigation = [
  { label: 'Dashboard', icon: '📊' },
  { label: 'Tiere', icon: '🦎' },
  { label: 'Adoption', icon: '🤝' },
  { label: 'Zuchtplanung', icon: '🧬' },
  { label: 'Content', icon: '📰' },
  { label: 'Benutzer', icon: '👥' },
  { label: 'Einstellungen', icon: '⚙️' },
];

const secondary = [
  { label: 'Analytics', icon: '📈' },
  { label: 'Integrationen', icon: '🔌' },
  { label: 'Support', icon: '💬' },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950/80 border-r border-white/5 px-6 py-8 flex flex-col gap-8">
      <div className="flex items-center gap-3 text-white text-xl font-semibold tracking-tight">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg">FZ</span>
        FeroxZ CMS
      </div>

      <nav className="space-y-8 text-sm">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Bereiche</p>
          {navigation.map((item, index) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all duration-200 border border-transparent hover:border-brand-500/60 hover:bg-brand-500/10 hover:shadow-glass ${
                index === 0 ? 'bg-brand-500/15 border-brand-500/40 text-white shadow-glass' : 'text-slate-300'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">System</p>
          {secondary.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left text-slate-300 transition-all duration-200 border border-transparent hover:border-brand-500/60 hover:bg-brand-500/10"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="mt-auto glass-card px-5 py-5 text-sm text-slate-200">
        <p className="font-medium text-white">Team Status</p>
        <p className="text-slate-400 mt-1 leading-snug">
          4 Teammitglieder online. Wöchentlicher Standup morgen um 9:30 Uhr.
        </p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 transition hover:bg-brand-500/20 hover:border-brand-400/40">
          Status teilen
        </button>
      </div>
    </aside>
  );
}
