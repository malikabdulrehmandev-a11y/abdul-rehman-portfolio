"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <div className="text-2xl font-black tracking-wider bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
          ABDUL REHMAN
        </div>

        {/* Desktop Links (Badi screens par dikhenge) */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 relative group py-1">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 relative group py-1">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40">
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Button (Mobile par menu kholne ke liye) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden block text-slate-300 hover:text-white focus:outline-none transition-colors"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 flex flex-col gap-4 font-semibold animate-fade-in">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-blue-400 py-2 border-b border-slate-800/50">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-blue-400 py-2 border-b border-slate-800/50">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl shadow-md">Contact Me</a>
        </div>
      )}
    </nav>
  );
}