export default function ResumeSection() {
  const resumeItems = [
    {
      title: 'Design Systems & Brand Identity',
      description: 'Scalable visual systems, logo suites, and brand applications for digital and print.',
    },
    {
      title: 'UI/UX Product Design',
      description: 'Landing pages, user flows, and prototypes focused on clarity and conversion.',
    },
    {
      title: 'Motion & Video Production',
      description: 'Short-format videos, reels, and motion graphics for campaigns and storytelling.',
    },
    {
      title: 'AI & Workflow Automation',
      description: 'Prompt frameworks, automation concepts, and workflows that improve efficiency.',
    },
  ];

  return (
    <section id="resume" className="border-t border-slate-200/70 bg-white py-16 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-indigo-600">Resume</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">Professional summary and core strengths.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Resume preview</p>
            <div className="mt-4 space-y-4">
              {resumeItems.map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Download</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-950">Get the full CV</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Clean, recruiter-ready resume with work highlights, skills, and design leadership strengths.</p>

            <div className="mt-6 space-y-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                View CV
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
