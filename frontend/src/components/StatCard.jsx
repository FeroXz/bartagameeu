export default function StatCard({ icon, label, value, delta }) {
  return (
    <div className="glass-card p-6 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span className="text-xs uppercase tracking-[0.3em] text-brand-200/80">{label}</span>
      </div>
      <p className="text-4xl font-semibold text-white">{value}</p>
      <p className="text-sm text-brand-100/80">{delta}</p>
    </div>
  );
}
