export default function ContentEditor({ blocks }) {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="section-title mb-1">Content-Module</h3>
          <p className="text-sm text-slate-400">Pflege Landingpage, Blog und Footer mit einem Klick.</p>
        </div>
        <button className="rounded-full bg-brand-500/20 border border-brand-400/30 px-3 py-2 text-xs text-brand-100 hover:bg-brand-500/30 transition">
          Vorschau öffnen
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {blocks.map((block) => (
          <div key={block.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{block.title}</p>
                <p className="text-xs text-slate-400 mt-1">{block.description}</p>
              </div>
              <button className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200 hover:bg-white/10 transition">Bearbeiten</button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {block.fields.map((field) => (
                <div key={field.label} className="rounded-xl border border-white/5 bg-slate-950/60 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{field.label}</p>
                  <p className="text-slate-100 mt-1 leading-relaxed">{field.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
