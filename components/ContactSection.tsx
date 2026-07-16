"use client";

import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-slate-400 mt-2">
            Have a project in mind? Feel free to reach out!
          </p>
        </div>
        
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 max-w-lg mx-auto">
          {/* Yahan humne upar banaya hua ContactForm render kar diya */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}