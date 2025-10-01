export default function AdoptionRequests({ requests }) {
  return (
    <div className="glass-card p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="section-title mb-1">Neueste Adoptionen</h3>
          <p className="text-sm text-slate-400">Kontaktiere Interessent*innen und dokumentiere Notizen.</p>
        </div>
        <button className="rounded-full border border-brand-400/30 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-brand-500/20 transition">
          Workflow öffnen
        </button>
      </div>
      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.name} className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-white">{request.name}</p>
              <span className="text-xs text-slate-400">{request.submitted}</span>
            </div>
            <p className="text-sm text-brand-100/80 mt-1">{request.animal}</p>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">{request.message}</p>
            <div className="mt-3 flex gap-2 text-xs">
              <button className="rounded-full border border-brand-400/40 px-3 py-1 text-brand-100 hover:bg-brand-500/20 transition">Antworten</button>
              <button className="rounded-full border border-white/10 px-3 py-1 text-slate-200 hover:bg-white/10 transition">Notiz</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
