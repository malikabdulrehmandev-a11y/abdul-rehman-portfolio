import DashboardShell from '../../components/DashboardShell';
import { TelemetryMetric } from '../../components/TelemetryMetric';

const metrics = [
  { label: 'Credits Left', value: '74', detail: 'Reserve headroom', progress: 74, accent: '#10B981', glow: 'rgba(16,185,129,0.65)' },
  { label: 'Sync Integrity', value: '98.6%', detail: 'Stable cluster', progress: 98, accent: '#06B6D4', glow: 'rgba(6,182,212,0.65)' },
  { label: 'Latency', value: '24ms', detail: 'Global response', progress: 82, accent: '#F59E0B', glow: 'rgba(245,158,11,0.5)' },
];

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Analytical overview</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Mission Control Dashboard</h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
                A premium telemetry view of activation health, token balance, and real-time orchestration readiness.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              <div className="flex items-center gap-2 font-medium">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                System online
              </div>
              <p className="mt-1 font-mono text-xs text-emerald-100/80">00:12:48 uptime</p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <TelemetryMetric key={metric.label} {...metric} />
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Operations stream</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Live execution pulse</h2>
              </div>
              <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">+18.2%</div>
            </div>
            <div className="mt-8 space-y-4">
              {[{ title: 'Activation requests', value: '1,284', hint: 'queued' }, { title: 'Paper generation', value: '842', hint: 'completed' }, { title: 'Manual overrides', value: '11', hint: 'pending' }].map((item) => (
                <div key={item.title} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="text-sm text-slate-400">{item.title}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                  <span className="font-mono text-sm text-slate-500">{item.hint}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Control center</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Automation posture</h2>
            <div className="mt-6 space-y-4">
              {[
                ['Core engine', 'Ready', 'text-emerald-300'],
                ['Fingerprinting', 'Verified', 'text-cyan-300'],
                ['Manual review', 'Standby', 'text-amber-300'],
              ].map(([label, state, color]) => (
                <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className={`text-sm font-medium ${color}`}>{state}</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
