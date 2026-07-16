const education = [
  {
    degree: 'Graphic Design Diploma',
    institution: 'Creative Design Institute',
    period: '2023',
    highlight: 'Formal training in branding, typography, and visual communication.',
  },
  {
    degree: 'UI/UX Bootcamp',
    institution: 'Digital Product Academy',
    period: '2024',
    highlight: 'Intensive practice in wireframes, prototypes, and user-centered interface design.',
  },
  {
    degree: 'AI Workflow Lab',
    institution: 'Automation Studio',
    period: '2025',
    highlight: 'Applied AI prompt design, automation patterns, and tool integration for creative work.',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="border-t border-slate-200/70 bg-white py-24 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-indigo-600">Education</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950">Focused learning that complements practical design work.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {education.map((item) => (
            <div key={item.degree} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.period}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.degree}</h3>
              <p className="mt-2 text-sm font-medium text-slate-700">{item.institution}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
