'use client';

import { useEffect, useState } from 'react';
import { Download, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 140;
      const sections = navItems.map((item) => document.querySelector(item.href));
      const current = sections
        .filter(Boolean)
        .map((section, index) => ({ section, index }))
        .filter((item) => item.section && item.section.getBoundingClientRect().top + window.scrollY <= offset)
        .pop();
      if (current) {
        setActive(navItems[current.index].label);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setOpen((current) => !current);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3 font-semibold tracking-wide text-slate-900 dark:text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-sm font-bold text-white shadow-glow">AR</span>
          <span>
            <div className="text-sm">Abdul Rehman</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Design & Automation</div>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${active === item.label ? 'bg-slate-900 text-white shadow-soft dark:bg-slate-200 dark:text-slate-950' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-300/30 transition hover:opacity-95"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="mailto:mailkabdulrehman.dev@gmail.com" className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:inline-flex">
            <Mail className="h-4 w-4" />
            Contact
          </a>
          <button type="button" onClick={toggleMenu} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-soft transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200/80 bg-white/95 px-6 py-5 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-base text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                {item.label}
              </a>
            ))}
            <a href="#resume" className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/30">
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
