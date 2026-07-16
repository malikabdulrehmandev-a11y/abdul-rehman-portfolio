'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, FileText, Settings2, Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { href: '/license-activation', label: 'License', icon: ShieldCheck },
  { href: '/paper-generator', label: 'Paper', icon: FileText },
  { href: '/admin', label: 'Admin', icon: Settings2 },
];

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_26%),#020617] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:flex-row lg:px-8 lg:py-6">
        <aside className="sticky top-4 mb-4 w-full shrink-0 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-3 backdrop-blur-xl lg:mb-0 lg:mr-6 lg:h-[calc(100vh-2rem)] lg:w-72 lg:p-4">
          <div className="flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-950/70 px-3 py-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400">PTB Core</p>
              <h2 className="text-lg font-semibold text-white">Command Deck</h2>
            </div>
            <button
              className="rounded-xl border border-slate-800 bg-slate-900 p-2 text-slate-300 lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <nav className={`mt-4 space-y-2 ${mobileOpen ? 'block' : 'hidden lg:block'}`}>
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-2xl border px-3 py-3 text-sm transition-all duration-200 ${
                    active
                      ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 shadow-[0_0_0_1px_rgba(6,182,212,0.15)]'
                      : 'border-transparent bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={16} />
                    {label}
                  </span>
                  {active && <Sparkles size={14} className="text-cyan-400" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">
            <p className="font-semibold">Live signal</p>
            <p className="mt-1 text-emerald-100/80">System health nominal · 24/7 orchestration online.</p>
          </div>
        </aside>

        <motion.main
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex-1 rounded-[30px] border border-slate-800/80 bg-slate-900/60 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl sm:p-6 lg:p-8"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
