export default function Header() {
  return (
    <header className="glass-card px-8 py-10 bg-gradient-to-br from-brand-500/20 via-slate-900/60 to-slate-900 border border-brand-500/30">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-brand-100/80">FeroxZ Operations Hub</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Willkommen zurück, Admin!</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
            Verwalte Tierbestände, Adoptionen und Content an einem Ort. Nutze die modulare Oberfläche, um Entscheidungen schneller zu treffen
            und Routineaufgaben zu automatisieren.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
            Nächster Health-Check: <span className="font-semibold text-white">Mittwoch, 19:00 Uhr</span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
            CMS-Version <span className="font-semibold text-brand-100">v1.0 – Tailwind + React</span>
          </div>
        </div>
      </div>
    </header>
  );
}
