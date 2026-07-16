'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Abdul delivered a brand identity system with exceptional polish and intentional detail.',
    author: 'Sara Khan',
    role: 'Marketing Lead',
    rating: 5,
  },
  {
    quote: 'The UI concepts were modern, clean, and meaningful. The final work resonated with our audience.',
    author: 'Ali Raza',
    role: 'Product Manager',
    rating: 5,
  },
  {
    quote: 'The motion reel helped our campaign feel elevated and on-brand. Delivery was smooth and professional.',
    author: 'Nadia Ahmed',
    role: 'Creative Director',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const item = testimonials[index];

  return (
    <div className="mx-auto max-w-6xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-indigo-600">Testimonials</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">Client feedback, compact and polished.</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            ›
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
              {item.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">{item.author}</p>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500">{item.role}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-amber-500">
            {Array.from({ length: item.rating }).map((_, starIndex) => (
              <span key={starIndex}>★</span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">“{item.quote}”</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
