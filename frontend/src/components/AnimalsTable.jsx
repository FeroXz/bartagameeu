export default function AnimalsTable({ animals }) {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="section-title mb-1">Tierbestand</h3>
          <p className="text-sm text-slate-400">Schneller Überblick über Gesundheitsstatus & Verantwortliche.</p>
        </div>
        <button className="rounded-full bg-brand-500/20 border border-brand-400/30 px-4 py-2 text-sm text-brand-100 hover:bg-brand-500/30 transition">
          Neues Tier
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/5">
        <table className="min-w-full divide-y divide-white/5">
          <thead className="bg-white/5">
            <tr className="text-left text-xs uppercase tracking-[0.2em] text-slate-400">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Art & Morph</th>
              <th className="px-4 py-3">Alter</th>
              <th className="px-4 py-3">Gewicht</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Pflege</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {animals.map((animal) => (
              <tr key={animal.id} className="hover:bg-white/5 transition">
                <td className="px-4 py-4 font-mono text-xs text-slate-400">{animal.id}</td>
                <td className="px-4 py-4 font-semibold text-white">{animal.name}</td>
                <td className="px-4 py-4 text-slate-300">
                  <p>{animal.species}</p>
                  <p className="text-xs text-brand-100/80">{animal.morph}</p>
                </td>
                <td className="px-4 py-4 text-slate-300">{animal.age}</td>
                <td className="px-4 py-4 text-slate-300">{animal.weight}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/15 px-3 py-1 text-xs text-brand-100">
                    {animal.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-300">{animal.caretaker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
