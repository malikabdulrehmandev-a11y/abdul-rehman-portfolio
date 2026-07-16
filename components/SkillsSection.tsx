'use client';

import GaugeSkill from './GaugeSkill';

const skills = [
  { label: 'Figma', value: 94 },
  { label: 'Photoshop', value: 88 },
  { label: 'After Effects', value: 82 },
  { label: 'Illustrator', value: 86 },
  { label: 'ChatGPT', value: 92 },
  { label: 'Premiere Pro', value: 80 },
  { label: 'Branding', value: 90 },
  { label: 'Motion Graphics', value: 78 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-indigo-600">Skills</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">Premium skill dashboard.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Animated circular gauges reveal capability levels in a compact, product-focused layout.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
          {skills.map((skill) => (
            <div key={skill.label} className="flex items-center justify-center p-2">
              <GaugeSkill label={skill.label} value={skill.value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
