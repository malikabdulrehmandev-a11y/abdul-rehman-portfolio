'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['Graphic Designer', 'UI/UX Designer', 'AI Enthusiast'];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    if (charIndex <= role.length) {
      const timeout = window.setTimeout(() => {
        setDisplayText(role.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 90);
      return () => window.clearTimeout(timeout);
    }

    const pause = window.setTimeout(() => {
      setCharIndex(0);
      setCurrentRole((value) => (value + 1) % roles.length);
    }, 1400);

    return () => window.clearTimeout(pause);
  }, [charIndex, currentRole]);

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-10 md:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-600">Abdul Rehman</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl">
              Clean design systems for brands, products, and AI-driven workflows.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I deliver premium brand identity, polished UI experiences, and smart creative automation for modern businesses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/20 transition hover:bg-[#1d4ed8]">
                Hire Me
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-300">
                View Portfolio
              </a>
              <a href="#resume" className="inline-flex items-center justify-center rounded-full border border-transparent bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
                Download CV
              </a>
            </div>
            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Active role</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">{displayText}<span className="animate-pulse">_</span></p>
                </div>
                <div className="rounded-3xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white">3 focused roles</div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
                  Brand systems, logo suites, print and digital identity.
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
                  User flows, wireframes, responsive interfaces, and prototypes.
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
                  AI prompts, automation concepts, and workflow optimization.
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
            <div className="absolute -right-10 top-4 h-36 w-36 rounded-full bg-[#06B6D4]/10 blur-3xl" />
            <div className="absolute left-8 top-12 h-20 w-20 rounded-full bg-[#4F46E5]/10 blur-3xl" />
            <div className="relative rounded-[1.75rem] bg-white p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Portfolio preview</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">Designed for clarity</p>
                </div>
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#4F46E5] text-2xl font-semibold text-white">AR</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Focus</p>
                  <p className="mt-3 text-base font-semibold text-slate-950">Premium creative direction with structured systems.</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Approach</p>
                  <p className="mt-3 text-base font-semibold text-slate-950">Minimal UI, clear hierarchy, and fast delivery.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
