"use client";

import React from "react";

export default function ContactForm() {
  return (
    <form 
      action="https://formsubmit.co/malikabdulrehman.dev@gmail.com" 
      method="POST"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://abdul-rehman-portfolio-umber.vercel.app" />

      <div>
        <label className="block text-sm font-semibold mb-1 text-slate-300">Your Name</label>
        <input 
          type="text" 
          name="name" 
          required 
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          placeholder="Abdul Rehman"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1 text-slate-300">Your Email</label>
        <input 
          type="email" 
          name="email" 
          required 
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          placeholder="example@gmail.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1 text-slate-300">Your Message</label>
        <textarea 
          name="message" 
          rows={4} 
          required 
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
          placeholder="How can I help you?"
        />
      </div>

      <button 
        type="submit" 
        className="w-full p-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-750 text-white font-bold rounded-xl shadow-lg transition-all"
      >
        Send Message
      </button>
    </form>
  );
}