import DashboardShell from '../../components/DashboardShell';

export default function PaperGeneratorPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">PTB engine</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Question configuration studio</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Fine-tune prompts, content modes, and difficulty curves with a polished multi-step interface.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Question type</span>
                <select className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-200 outline-none transition focus:border-cyan-500">
                  <option>Analytical</option>
                  <option>Design</option>
                  <option>Logic</option>
                </select>
              </label>
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Difficulty</span>
                <select className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-200 outline-none transition focus:border-cyan-500">
                  <option>Advanced</option>
                  <option>Intermediate</option>
                  <option>Beginner</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-300">
              <span className="mb-2 block">Prompt template</span>
              <textarea className="min-h-32 w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-cyan-500" defaultValue="Design a premium evaluation prompt with layered context and actionable scoring criteria." />
            </label>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Generation queue</p>
            <div className="mt-6 space-y-3">
              {['Template locked', 'Style profile loaded', 'Scoring rubric ready'].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
            <button className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-90">
              Generate Paper Set
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
