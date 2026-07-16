"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Glowing Logo */}
        <div className="text-xl font-black tracking-wider bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
          AR.DEV
        </div>

        {/* Laptop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider">
          <a href="#about" className="text-slate-400 hover:text-white transition-colors">ABOUT</a>
          <a href="#projects" className="text-slate-400 hover:text-white transition-colors">PROJECTS</a>
          <a href="#contact" className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 px-5 py-2.5 rounded-xl transition-all">
            CONTACT ME
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-400 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar/Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 px-6 py-6 flex flex-col gap-4 text-sm font-bold tracking-wider">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white py-2 border-b border-slate-900/50">ABOUT</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white py-2 border-b border-slate-900/50">PROJECTS</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white text-center py-3 rounded-xl">
            CONTACT ME
          </a>
        </div>
      )}
    </nav>
  );
}