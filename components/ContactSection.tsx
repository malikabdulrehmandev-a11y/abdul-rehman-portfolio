"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ submitting: false, succeeded: false });

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-slate-900 rounded-2xl shadow-xl text-white">
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Get In Touch</h3>
      
      <form 
        action="https://formspree.io/f/APNI_FORMSPREE_ID_YAHAN_LIKHEIN" 
        method="POST"
        className="flex flex-col gap-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your Message</label>
          <textarea 
            name="message" 
            rows={4} 
            required 
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="Write your message here..."
          />
        </div>

        <button 
          type="submit" 
          className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}