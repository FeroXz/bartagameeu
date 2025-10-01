export default function Timeline({ entries }) {
  return (
    <div className="glass-card p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="section-title mb-1">Aktivitätsfeed</h3>
          <p className="text-sm text-slate-400">Was zuletzt im Team passiert ist.</p>
        </div>
        <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-brand-500/20 transition">
          Verlauf exportieren
        </button>
      </div>
      <div className="relative pl-4">
        <span className="absolute left-1 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-500/60 to-transparent" aria-hidden />
        <div className="space-y-6">
          {entries.map((entry) => (
            <div key={entry.title} className="relative pl-6">
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand-400 shadow-glass" />
              <p className="font-semibold text-white">{entry.title}</p>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">{entry.detail}</p>
              <span className="text-xs text-slate-500">{entry.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
