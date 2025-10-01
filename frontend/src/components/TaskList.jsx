export default function TaskList({ tasks }) {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="section-title mb-1">Teamaufgaben</h3>
          <p className="text-sm text-slate-400">Sorge für abgestimmte Pflege- und Contentprozesse.</p>
        </div>
        <button className="rounded-full border border-brand-400/30 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-brand-500/20 transition">
          Task anlegen
        </button>
      </div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.title} className="flex items-start justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
            <div>
              <p className="font-semibold text-white">{task.title}</p>
              <p className="text-xs text-brand-100/80 mt-1">{task.type}</p>
            </div>
            <span className="text-xs text-slate-300">{task.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
