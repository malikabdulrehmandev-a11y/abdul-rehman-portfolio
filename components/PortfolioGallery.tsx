"use client";

import React, { useState } from "react";

// Portfolio Items ka Data yahan declare kar rahe hain
const portfolioItems = [
  {
    id: 1,
    title: "Premium Brand Identity",
    mainCategory: "Graphic Design",
    subCategory: "Logos",
    thumbnail: "https://drive.google.com/file/d/1SUayH3EdBxXDzbVZZKx1ZYJEviXQfZmt/view?usp=drive_link",
    mediaType: "image",
    mediaUrl: "https://picsum.photos/seed/logo1/1200/900",
    tools: ["Illustrator", "Photoshop"],
    role: "Visual Designer",
    year: "2026",
    problem: "The client needed a modern, trust-building visual system.",
    solution: "Designed a clean, scalable logo suite with premium typography."
  }
];

export default function PortfolioGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <div className="py-12 bg-slate-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">My Creative Works</h2>
        
        {/* Grid Layout (Mobile par 1 column, laptop par 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              {/* Thumbnail Image */}
              <div className="h-48 bg-slate-700 flex items-center justify-center relative">
                <span className="text-slate-400 text-sm">Project Preview</span>
              </div>
              <div className="p-4">
                <span className="text-xs text-blue-400 font-semibold uppercase">{item.mainCategory}</span>
                <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{item.problem}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Popup for Project Details */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 max-w-2xl w-full rounded-2xl overflow-hidden p-6 relative">
              <button 
                onClick={() => setSelectedItem(null)} 
                className="absolute top-4 right-4 text-white text-xl hover:text-red-500"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">{selectedItem.title}</h3>
              <p className="text-sm text-slate-300 mb-4"><strong>Role:</strong> {selectedItem.role} | <strong>Year:</strong> {selectedItem.year}</p>
              <div className="space-y-3">
                <p><strong>Problem:</strong> {selectedItem.problem}</p>
                <p><strong>Solution:</strong> {selectedItem.solution}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedItem.tools.map((tool, idx) => (
                    <span key={idx} className="bg-blue-600/30 text-blue-400 text-xs px-2.5 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}