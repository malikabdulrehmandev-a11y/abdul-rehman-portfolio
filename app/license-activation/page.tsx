import DashboardShell from '../../components/DashboardShell';

export default function LicenseActivationPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">Instant validation</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Hardware fingerprint portal</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Capture a secure device signature and activate licensing in seconds with a premium control flow.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
            <label className="text-sm font-medium text-slate-300">Device fingerprint</label>
            <textarea
              className="mt-3 min-h-36 w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-cyan-500"
              defaultValue="CPU: 12-core | GPU: RTX 4090 | BIOS: 2.18 | TPM: Active"
            />
            <button className="mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-90">
              Validate Signature
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Status</p>
            <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-200">
              <p className="text-lg font-semibold">Activation ready</p>
              <p className="mt-1 text-sm text-emerald-100/80">License token is valid for 3 seats and 12 months.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
