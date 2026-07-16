export default function AboutSection() {
  const stats = [
    { label: 'Years of growth', value: '2+' },
    { label: 'Projects delivered', value: '50+' },
    { label: 'Design tools', value: '10+' },
    { label: 'AI workflows', value: 'Built' },
  ];

  return (
    <section id="about" className="border-t border-slate-200/70 bg-slate-50 py-24 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-indigo-600">About</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950">Design focused on clarity, brand impact, and intelligent execution.</h2>
        </div>
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-lg leading-8 text-slate-700">
                I help brands communicate clearly through clean visual systems, polished UI experiences, and smart creative automation. My work is built for fast decision-making, consistent brand delivery, and confident digital presence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-soft">
                  <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Specialty</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">Brand, interface, motion, and automation that feel premium.</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                My design process begins with structure. I create identity systems, user journeys, and motion narratives that translate into polished digital experiences and efficient production handoffs.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#eff6ff] via-white to-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-[#2563EB]">Current focus</p>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li>Brand identity systems for digital and print.</li>
                <li>UI/UX flows, responsive landing pages, product screens.</li>
                <li>Video and motion content for social storytelling.</li>
                <li>AI-assisted automation for creative operations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
