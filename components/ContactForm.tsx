"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdaqajrq");

  if (state.succeeded) {
    return (
      <div className="w-full max-w-lg mx-auto p-8 bg-slate-900/90 border border-emerald-500/30 rounded-2xl text-center text-white my-12 shadow-2xl">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-emerald-400 mb-2">Thank You!</h3>
        <p className="text-slate-300">Your message has been sent successfully. I will get back to you soon!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl text-white my-12">
      <h3 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
        Get In Touch
      </h3>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-300">Your Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            required 
            className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            placeholder="Abdul Rehman"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-300">Your Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            required 
            className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            placeholder="example@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-300">Your Message</label>
          <textarea 
            name="message" 
            id="message"
            rows={4} 
            required 
            className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
            placeholder="How can I help you?"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting}
          className="w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}