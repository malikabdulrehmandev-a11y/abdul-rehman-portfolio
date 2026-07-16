const experience = [
  {
    role: 'Freelance Graphic Designer',
    company: 'Independent clients',
    period: 'Jan 2024 – Present',
    summary: 'Delivered branding, print systems, and campaign visuals with consistent polish and fast turnaround.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Product and digital concepts',
    period: 'Jan 2025 – Present',
    summary: 'Designed landing pages, responsive flows, and prototypes for modern digital experiences.',
  },
  {
    role: 'Motion & Video Designer',
    company: 'Campaign production',
    period: 'Oct 2024 – Present',
    summary: 'Produced motion edits and reels that elevate storytelling across social channels.',
  },
  {
    role: 'AI & Automation Enthusiast',
    company: 'Creative workflow systems',
    period: '2025 – Present',
    summary: 'Built prompt templates, automation concepts, and simple toolchains for smarter work.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-slate-200/70 bg-slate-50 py-16 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-indigo-600">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">A compact professional timeline.</h2>
          <p className="mt-3 text-sm text-slate-600">Roles that show design, motion, and AI-driven workflow experience.</p>
        </div>

        <div className="relative ml-4 pl-5 before:absolute before:top-3 before:left-2 before:h-full before:w-px before:bg-slate-300">
          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.role} className="relative rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                <span className="absolute -left-3 top-5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[0.65rem] font-semibold text-white ring-4 ring-white">
                  •
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold text-slate-950">{item.role}</p>
                  <span className="text-xs uppercase tracking-[0.32em] text-slate-500">{item.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{item.company}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
