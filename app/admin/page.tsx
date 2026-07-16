import DashboardShell from '../../components/DashboardShell';

export default function AdminPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Master control</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Administrative command center</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Monitor live operations, manage overrides, and keep the platform in a safe high-performance state.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Stream viewboard</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Queue depth', 'Active workers', 'Error rate', 'Manual approvals'].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm text-slate-400">{item}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{item === 'Queue depth' ? '214' : item === 'Active workers' ? '18' : item === 'Error rate' ? '0.2%' : '7'}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Override switches</p>
            <div className="mt-6 space-y-3">
              {['Auto-approval', 'Emergency lock', 'Live sync'].map((item) => (
                <label key={item} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                  <span>{item}</span>
                  <input type="checkbox" defaultChecked={item !== 'Emergency lock'} className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-cyan-500" />
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
