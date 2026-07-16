const services = [
  { title: 'Brand identity', description: 'Logo systems, style guides, and visual language for digital and print.' },
  { title: 'UI/UX design', description: 'Responsive screens, user flows, and clickable prototypes.' },
  { title: 'Video editing', description: 'Promotional edits, reels, and campaign motion content.' },
  { title: 'Social design', description: 'Post sets, story templates, and campaign assets.' },
  { title: 'Motion graphics', description: 'Animated intros, transitions, and brand moments.' },
  { title: 'AI automation', description: 'Process automation, prompt systems, and workflow design.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-slate-200/70 bg-white py-24 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-indigo-600">Services</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950">Creative services built for fast launch and premium polish.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft transition hover:-translate-y-1 hover:border-[#2563EB]/30">
              <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
