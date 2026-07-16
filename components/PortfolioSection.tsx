"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Al Noor Builders Logo",
    mainCategory: "Graphic Design",
    subCategory: "Logo",
    thumbnail: "https://lh3.googleusercontent.com/d/1NQ5zKtTcYpdcqOQQTbZl1zYuxACDuphR",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1NQ5zKtTcYpdcqOQQTbZl1zYuxACDuphR",
    tools: ["Photoshop", "Illustrator"],
    role: "Brand Identity Designer",
    year: "2026",
    problem: "Needed a powerful corporate visual symbol reflecting structural growth.",
    solution: "Created a premium geometric tower emblem using clean gold gradients."
  },
  {
    id: 2,
    title: "Pak Heights Identity",
    mainCategory: "Graphic Design",
    subCategory: "Logo",
    thumbnail: "https://lh3.googleusercontent.com/d/1K3fhXmnje5aiI_msp3vCIalG4SxPk3Aw",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1K3fhXmnje5aiI_msp3vCIalG4SxPk3Aw",
    tools: ["Photoshop", "Illustrator"],
    role: "Graphic Designer",
    year: "2026",
    problem: "Real estate branding requiring modern, minimal architecture silhouettes.",
    solution: "Designed a clean structural monogram integrated with deep green aesthetics."
  },
  {
    id: 3,
    title: "Build Pak Construction Logo",
    mainCategory: "Graphic Design",
    subCategory: "Logo",
    thumbnail: "https://lh3.googleusercontent.com/d/1pM5ccfQsdACAGl3ODMGWg7Vcasnhci7h",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1pM5ccfQsdACAGl3ODMGWg7Vcasnhci7h",
    tools: ["Illustrator"],
    role: "Visual Artist",
    year: "2026",
    problem: "A bold identity layout for a high-end contracting organization.",
    solution: "Crafted an sharp structural block layout styled with crisp industrial colors."
  },
  {
    id: 4,
    title: "Karachi Bites Emblem",
    mainCategory: "Graphic Design",
    subCategory: "Logo",
    thumbnail: "https://lh3.googleusercontent.com/d/1buqpmN2aHslojIbRE2DCPc9htpN345G6",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1buqpmN2aHslojIbRE2DCPc9htpN345G6",
    tools: ["Photoshop", "Illustrator"],
    role: "Brand Expert",
    year: "2026",
    problem: "Food venture requiring energetic, instantly recognizable modern branding.",
    solution: "Crafted a brilliant bold dynamic circular badge emphasizing sharp cutlery paths."
  },
  {
    id: 5,
    title: "Burger Station Identity",
    mainCategory: "Graphic Design",
    subCategory: "Logo",
    thumbnail: "https://lh3.googleusercontent.com/d/1xp8rs8-1LtVTuauUZcaql5MIe2w-sUr6",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1xp8rs8-1LtVTuauUZcaql5MIe2w-sUr6",
    tools: ["Photoshop"],
    role: "Creative Director",
    year: "2026",
    problem: "A vintage-yet-clean approach for an premium retail culinary setup.",
    solution: "Balanced flat vector minimalism with custom tracking premium layout typography."
  },
  {
    id: 6,
    title: "Chai & Co. Cafe Concept",
    mainCategory: "Graphic Design",
    subCategory: "Logo",
    thumbnail: "https://lh3.googleusercontent.com/d/1FVGYeWM-XqZvqUqY-xvy5ZHJwlNHn_Ba",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1FVGYeWM-XqZvqUqY-xvy5ZHJwlNHn_Ba",
    tools: ["Illustrator"],
    role: "Identity Consultant",
    year: "2026",
    problem: "Artisan cafe seeking elegant corporate visual branding options.",
    solution: "Arranged minimal steaming cup art paths seamlessly with rich corporate tones."
  },
  {
    id: 7,
    title: "Sweet Crust Bakery Identity",
    mainCategory: "Graphic Design",
    subCategory: "Logo",
    thumbnail: "https://lh3.googleusercontent.com/d/1GU1d85Kcnt3W4J-bOU7sfpt-DbSFzTxR",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1GU1d85Kcnt3W4J-bOU7sfpt-DbSFzTxR",
    tools: ["Photoshop", "Illustrator"],
    role: "Lead Illustrator",
    year: "2026",
    problem: "Baking company looking for a trustworthy circular badge motif framework.",
    solution: "Produced an artistic emblem integrating clean organic line elements smoothly."
  },
  {
    id: 8,
    title: "Lahore Threads Monogram",
    mainCategory: "Graphic Design",
    subCategory: "Logo",
    thumbnail: "https://lh3.googleusercontent.com/d/1SBvPrlxpjMZc7wzhVhlZxpQGVgW7VaTF",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1SBvPrlxpjMZc7wzhVhlZxpQGVgW7VaTF",
    tools: ["Illustrator"],
    role: "Apparel Branding Specialist",
    year: "2026",
    problem: "Premium traditional textile house needing heritage-focused typography systems.",
    solution: "Merged classic high-fashion serif letterforms with delicate needle vector flourishes."
  },
  {
    id: 9,
    title: "Glow Studio Layout",
    mainCategory: "Graphic Design",
    subCategory: "Logo",
    thumbnail: "https://lh3.googleusercontent.com/d/1mvK4wARG88MwRgp4tjpGQW3wvLLGoqF0",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1mvK4wARG88MwRgp4tjpGQW3wvLLGoqF0",
    tools: ["Photoshop", "Illustrator"],
    role: "Brand Identity Mentor",
    year: "2026",
    problem: "High-end luxury salon aesthetics aiming for minimalist organic profile lines.",
    solution: "Integrated abstract feminine silhouettes seamlessly with sleek gold line structures."
  },
  {
    id: 10,
    title: "Premium Corporate Showcase Banner",
    mainCategory: "Graphic Design",
    subCategory: "Branding",
    thumbnail: "https://lh3.googleusercontent.com/d/1tMXn3KX8G0BdxVHN2ToO2b5jt9fAKDOg",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1tMXn3KX8G0BdxVHN2ToO2b5jt9fAKDOg",
    tools: ["Photoshop", "Illustrator"],
    role: "Lead Graphic Designer",
    year: "2026",
    problem: "A high-impact widescreen layout needed to exhibit diverse structural brand systems.",
    solution: "Structured clean structural portfolio grid panels with high contrast design balance."
  },
  {
    id: 11,
    title: "Pak Heights Commercial Board",
    mainCategory: "Graphic Design",
    subCategory: "Branding",
    thumbnail: "https://lh3.googleusercontent.com/d/1a_PYTV_JdSfDhFUrIL1BxMm-eRDiRDmc",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1a_PYTV_JdSfDhFUrIL1BxMm-eRDiRDmc",
    tools: ["Photoshop"],
    role: "Creative Lead",
    year: "2026",
    problem: "High-resolution corporate promotion media for modern property campaigns.",
    solution: "Assembled immersive real estate visualization cards with sharp premium typography layers."
  },
  {
    id: 12,
    title: "Build Pak Corporate Billboard",
    mainCategory: "Graphic Design",
    subCategory: "Branding",
    thumbnail: "https://lh3.googleusercontent.com/d/1iqPGRshkLkq3Peu8m4DCOEm_0JlaRVPQ",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1iqPGRshkLkq3Peu8m4DCOEm_0JlaRVPQ",
    tools: ["Photoshop", "Illustrator"],
    role: "Branding Consultant",
    year: "2026",
    problem: "Large scale high-impact visualization media for commercial site assets.",
    solution: "Rendered high-contrast layouts highlighting yellow industrial shapes over modern grids."
  },
  {
    id: 13,
    title: "Karachi Bites Social Promotion",
    mainCategory: "Graphic Design",
    subCategory: "Branding",
    thumbnail: "https://lh3.googleusercontent.com/d/1aayaHSHFhzFoxiDHlYVHkGfiNTNTCOqI",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1aayaHSHFhzFoxiDHlYVHkGfiNTNTCOqI",
    tools: ["Photoshop"],
    role: "Visual Lead",
    year: "2026",
    problem: "Digital broad-range asset required to launch modern brand identities online.",
    solution: "Designed a clean composition showcasing vibrant crimson brand layers over clean space."
  },
  {
    id: 14,
    title: "Burger Station Out-of-Home Banner",
    mainCategory: "Graphic Design",
    subCategory: "Branding",
    thumbnail: "https://lh3.googleusercontent.com/d/1QgJj9Ri2fJdUWDQ01NuBYmUmZP6p1JZR",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1QgJj9Ri2fJdUWDQ01NuBYmUmZP6p1JZR",
    tools: ["Photoshop"],
    role: "Branding Lead",
    year: "2026",
    problem: "Marketing presentation graphic emphasizing classic design concepts beautifully.",
    solution: "Formulated a balanced visual arrangement using clean tracking typography frameworks."
  },
  {
    id: 15,
    title: "Chai & Co. Cafe Launch System",
    mainCategory: "Graphic Design",
    subCategory: "Branding",
    thumbnail: "https://lh3.googleusercontent.com/d/1G6oW2V5mlk1N3apSJ22noau9Arz22_R6",
    mediaType: "image",
    mediaUrl: "https://lh3.googleusercontent.com/d/1G6oW2V5mlk1N3apSJ22noau9Arz22_R6",
    tools: ["Illustrator", "Photoshop"],
    role: "Senior Identity Consultant",
    year: "2026",
    problem: "Premium brand expansion asset set for outdoor retail visibility display blocks.",
    solution: "Composed sharp brand grid cells with modern earthy textures and high resolution values."
  }
];

// derive categories and subcategories from projectsData to keep source of truth

const buildCategoryMap = (projects: any[]) => {
  const map: Record<string, Set<string>> = { All: new Set(['All']) };
  projects.forEach((p: any) => {
    if (!map[p.mainCategory]) map[p.mainCategory] = new Set(['All']);
    map[p.mainCategory].add(p.subCategory || 'Other');
  });
  return map;
};

const categoryMap = buildCategoryMap(projectsData);
const navigationTabs = Object.keys(categoryMap);

export default function PortfolioSection() {
  const [activeMain, setActiveMain] = useState('All');
  const [activeSub, setActiveSub] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (activeMain === 'All') return true;
    if (activeSub === 'All') return p.mainCategory === activeMain;
    return p.subCategory === activeSub;
  });

  return (
    <section className="py-12 bg-white text-slate-900 max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
        <p className="text-slate-500 mt-2">A crisp collection of high-resolution digital architecture assets.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 border-b border-slate-100 pb-3 mb-6">
        {navigationTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveMain(tab);
              setActiveSub('All');
            }}
            className={`text-sm font-medium transition-colors px-2 py-1 ${
              activeMain === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* subcategories row */}
      {activeMain !== 'All' && (
        <div className="flex items-center justify-center gap-3 mb-6">
          {[...categoryMap[activeMain]].map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSub(sub)}
              className={`text-sm px-3 py-1 rounded-md transition ${activeSub === sub ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            whileHover={{ y: -6 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer border border-slate-100 rounded-lg overflow-hidden transition-transform bg-white"
          >
            <div className="w-full h-48 md:h-40 bg-slate-50 overflow-hidden relative border-b border-slate-100/60 flex items-center justify-center">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-xs font-semibold px-3 py-1.5 rounded-md text-slate-800">View Project →</span>
              </div>
            </div>
            <div className="px-3 py-3">
              <span className="text-[10px] font-semibold text-blue-600 tracking-wider uppercase px-2 py-0.5 rounded-md">{project.subCategory}</span>
              <h3 className="font-semibold text-sm mt-2 text-slate-800 tracking-tight">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 z-50 flex items-end md:items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="w-full md:max-w-4xl max-h-[90vh] bg-white rounded-t-xl md:rounded-2xl overflow-hidden md:grid md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-slate-50 flex items-center justify-center p-4 md:p-6">
                <img
                  src={selectedProject.mediaUrl}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-auto object-cover"
                />
              </div>

              <div className="p-4 md:p-6 overflow-y-auto">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{selectedProject.title}</h3>
                    <p className="text-blue-600 text-sm font-medium">{selectedProject.mainCategory} • {selectedProject.subCategory}</p>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="md:hidden text-slate-700">Close</button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">The Problem</h4>
                    <p className="text-slate-600 mt-1 text-sm">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">The Solution</h4>
                    <p className="text-slate-600 mt-1 text-sm">{selectedProject.solution}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedProject.tools.map((t) => (
                        <span key={t} className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded-md">{t}</span>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <h5 className="text-[10px] font-bold uppercase text-slate-400">Role</h5>
                        <p className="text-slate-700 mt-1">{selectedProject.role}</p>
                      </div>
                      <div>
                        <h5 className="text-[10px] font-bold uppercase text-slate-400">Year</h5>
                        <p className="text-slate-700 mt-1">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
