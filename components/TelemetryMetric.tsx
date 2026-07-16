'use client';

import { motion } from 'framer-motion';

type TelemetryMetricProps = {
  label: string;
  value: string;
  detail: string;
  progress: number;
  accent: string;
  glow: string;
};

export function TelemetryMetric({ label, value, detail, progress, accent, glow }: TelemetryMetricProps) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{value}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-2">
          <svg viewBox="0 0 140 140" className="h-16 w-16 -rotate-90">
            <circle cx="70" cy="70" r={radius} stroke="#1f2937" strokeWidth="10" fill="none" />
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke={accent}
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ filter: `drop-shadow(0 0 14px ${glow})` }}
            />
          </svg>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
        <span>{detail}</span>
        <span className="font-mono text-slate-300">{progress}%</span>
      </div>
    </motion.article>
  );
}
