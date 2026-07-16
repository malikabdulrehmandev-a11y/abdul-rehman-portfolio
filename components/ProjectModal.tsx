'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { PortfolioProject } from '../data/portfolio';

type ProjectModalProps = {
  project: PortfolioProject;
  onClose: () => void;
};

const swipeThreshold = 120;

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  const galleryImages = useMemo(() => project.images, [project.images]);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: direction === 'left' ? -260 : 260, behavior: 'smooth' });
  };

  const handleDragEnd = (_: any, info: { offset: { y: number }; velocity: { y: number } }) => {
    if (info.offset.y > swipeThreshold || info.velocity.y > 800) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/80 p-3 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          onClick={(event) => event.stopPropagation()}
          drag={isMobile ? 'y' : false}
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={isMobile ? handleDragEnd : undefined}
          initial={isMobile ? { y: '100%', opacity: 0 } : { scale: 0.96, opacity: 0 }}
          animate={isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 }}
          exit={isMobile ? { y: '100%', opacity: 0 } : { scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.26, ease: 'easeOut' }}
          className="w-full max-w-[85vw] max-h-[85vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl"
        >
          <div className="sticky top-0 z-20 border-b border-slate-200 bg-white px-4 py-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-[65%]">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-indigo-600">{project.category}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">{project.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{project.subcategory}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>

          <div className="max-h-[calc(85vh-88px)] overflow-y-auto px-4 pb-4 pt-4">
            <div className="grid gap-4 lg:grid-cols-[1.45fr_0.95fr]">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <img src={galleryImages[activeImage]} alt={project.title} className="h-[34vh] w-full object-cover" />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-sm">
                    Gallery
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveImage((current) => Math.max(0, current - 1));
                      }}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveImage((current) => Math.min(galleryImages.length - 1, current + 1));
                      }}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div ref={galleryRef} className="flex gap-3 overflow-x-auto pb-3 scrollbar-none">
                  {galleryImages.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`min-w-[8rem] flex-none overflow-hidden rounded-[1.5rem] border px-1 py-1 transition ${activeImage === index ? 'border-indigo-600 ring-1 ring-indigo-100' : 'border-slate-200 bg-slate-100'}`}
                    >
                      <img src={src} alt={`Thumbnail ${index + 1}`} className="h-20 w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Overview</p>
                  <div className="mt-3 space-y-3 text-sm text-slate-700">
                    <p>
                      <span className="font-semibold text-slate-950">Problem: </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">Solution: </span>
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-3xl bg-white p-3 shadow-sm">
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Tools</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white p-3 text-sm shadow-sm">
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Role</p>
                      <p className="mt-2 font-semibold text-slate-950">{project.role}</p>
                    </div>
                    <div className="rounded-3xl bg-white p-3 text-sm shadow-sm">
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Year</p>
                      <p className="mt-2 font-semibold text-slate-950">{project.year}</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Discuss a similar project
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
