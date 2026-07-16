'use client';

import { animate, motion, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type GaugeSkillProps = {
  label: string;
  value: number;
};

const radius = 38;
const circumference = 2 * Math.PI * radius;

export default function GaugeSkill({ label, value }: GaugeSkillProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.45, once: true });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [motionValue]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 1.2,
      ease: 'easeOut',
    });
    return controls.stop;
  }, [inView, motionValue, value]);

  return (
    <motion.div ref={ref} whileHover={{ scale: 1.04 }} className="flex flex-col items-center gap-2 text-center">
      <svg className="h-20 w-20" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id={`gaugeGradient-${label.replace(/\s+/g, '-').toLowerCase()}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="6" opacity="0.9" />

        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={`url(#gaugeGradient-${label.replace(/\s+/g, '-').toLowerCase()}`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? circumference - (value / 100) * circumference : circumference }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ rotate: -90, transformOrigin: '50% 50%' }}
        />
      </svg>

      <div className="space-y-0">
        <span className="block text-lg font-semibold text-slate-900 font-mono">{displayValue}%</span>
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{label}</p>
      </div>
    </motion.div>
  );
}
