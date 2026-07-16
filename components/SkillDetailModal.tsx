'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { SkillDetail } from '../data/skills';

type SkillDetailModalProps = {
  skill: string;
  detail: SkillDetail;
  onClose: () => void;
};

export default function SkillDetailModal({ skill, detail, onClose }: SkillDetailModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          onClick={(event) => event.stopPropagation()}
          initial={{ y: 16, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 16, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="w-full max-w-[92vw] max-h-[70vh] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="sticky top-0 z-10 border-b border-slate-200 bg-white px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-indigo-600">Skill detail</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">{skill}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Close
              </button>
            </div>
          </div>

          <div className="max-h-[calc(70vh-88px)] overflow-y-auto px-4 py-4">
            <div className="space-y-4">
              <p className="text-sm leading-7 text-slate-700">{detail.description}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500">Level</p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">{detail.level}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500">Tools</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {detail.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500">Related mini projects</p>
                <div className="mt-3 grid gap-2">
                  {detail.preview.map((item) => (
                    <div key={item} className="rounded-xl bg-white px-3 py-2 text-sm text-slate-800 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500">Examples</p>
                <div className="mt-3 grid gap-2">
                  {detail.examples.map((item) => (
                    <div key={item} className="rounded-xl bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Talk about a project
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
