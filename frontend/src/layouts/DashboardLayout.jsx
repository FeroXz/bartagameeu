import Sidebar from '../components/Sidebar.jsx';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1e1b4b,_#020617_70%)] text-slate-100">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-10 py-10 space-y-8 bg-slate-950/60">
          {children}
        </main>
      </div>
    </div>
  );
}
