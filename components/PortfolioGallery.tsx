"use client";

export default function PortfolioGallery() {
  return null;
}

/*
    title: "Premium Brand Identity",

    mainCategory: "Graphic Design",

    subCategory: "Logos",

    thumbnail: "https://drive.google.com/file/d/1SUayH3EdBxXDzbVZZKx1ZYJEviXQfZmt/view?usp=drive_link", // Yahan Drive ka link aaye ga

    mediaType: "image", // 'image' ya 'video'

    mediaUrl: "https://picsum.photos/seed/logo1/1200/900",

    tools: ["Illustrator", "Photoshop"],

    role: "Visual Designer",

    year: "2026",

    problem: "The client needed a modern, trust-building visual system.",

    solution: "Designed a clean, scalable logo suite with premium typography."

  },

  {

    id: 2,

    title: "Cinematic Promotional Video",

    mainCategory: "Video Editing",

    subCategory: "Motion Graphics",

    thumbnail: "https://picsum.photos/seed/video1/800/600",

    mediaType: "video", // Is project mein video hai

    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Yahan aapki drive video ka direct link aaye ga

    tools: ["Premiere Pro", "After Effects"],

    role: "Video Editor",

    year: "2026",

    problem: "High-paced promotional clip required for social media channels.",

    solution: "Edited sync-cuts with dynamic text animations to boost engagement."

  }

];



const mainCategories = ["All", "Graphic Design", "UI/UX", "Branding", "Logo", "Social Media", "Video", "Motion"];



/* export default function PortfolioSection() {

  const [activeTab, setActiveTab] = useState("All");

  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);



  // Filter logic

  const filteredProjects = activeTab === "All"

    ? projectsData

    : projectsData.filter(p => p.mainCategory === activeTab || p.subCategory === activeTab);



  return (

    <section className="py-12 bg-white text-slate-900 max-w-7xl mx-auto px-4">

      <div className="text-center mb-8">

        <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>

        <p className="text-slate-500 mt-2">A showcase of modern design solutions.</p>

      </div>



      {/* Modern Sleek Navigation Line */}

      <div className="flex flex-wrap justify-center gap-2 border-b border-slate-100 pb-4 mb-8">

        {mainCategories.map((cat) => (

          <button

            key={cat}

            onClick={() => setActiveTab(cat)}

            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${

              activeTab === cat

                ? 'bg-blue-600 text-white shadow-sm'

                : 'text-slate-600 hover:bg-slate-50'

            }`}

          >

            {cat}

          </button>

        ))}

      </div>



      {/* Portfolio Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredProjects.map((project) => (

          <motion.div

            key={project.id}

            layout

            whileHover={{ y: -4 }}

            onClick={() => setSelectedProject(project)}

            className="group cursor-pointer border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"

          >

            <div className="aspect-video w-full bg-slate-100 overflow-hidden relative">

              <img

                src={project.thumbnail}

                alt={project.title}

                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"

              />

              <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

                <span className="bg-white/90 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">View Project →</span>

              </div>

            </div>

            <div className="p-4">

              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">{project.subCategory}</span>

              <h3 className="font-semibold text-lg mt-1 text-slate-800">{project.title}</h3>

            </div>

          </motion.div>

        ))}

      </div>



      {/* Full-Screen Modern Overlay Modal */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"

            onClick={() => setSelectedProject(null)}

          >

            <motion.div

              initial={{ scale: 0.95, y: 20 }}

              animate={{ scale: 1, y: 0 }}

              exit={{ scale: 0.95, y: 20 }}

              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative text-left"

              onClick={(e) => e.stopPropagation()}

            >

              <button

                onClick={() => setSelectedProject(null)}

                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-700 transition-colors"

              >

                ✕

              </button>



              <h3 className="text-2xl font-bold text-slate-900 mb-1">{selectedProject.title}</h3>

              <p className="text-blue-600 text-sm font-medium mb-6">{selectedProject.mainCategory} • {selectedProject.subCategory}</p>



              {/* Media Container (Handles both Image and Video natively) */}

              <div className="w-full aspect-video bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-inner">

                {selectedProject.mediaType === "video" ? (

                  <video

                    src={selectedProject.mediaUrl}

                    controls

                    className="w-full h-full object-contain"

                    playsInline

                  />

                ) : (

                  <img

                    src={selectedProject.mediaUrl}

                    alt={selectedProject.title}

                    className="w-full h-full object-cover"

                  />

                )}

              </div>



              {/* Minimal Meta Grid & Content */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="md:col-span-2 space-y-4">

                  <div>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">The Problem</h4>

                    <p className="text-slate-600 mt-1 text-sm leading-relaxed">{selectedProject.problem}</p>

                  </div>

                  <div>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">The Solution</h4>

                    <p className="text-slate-600 mt-1 text-sm leading-relaxed">{selectedProject.solution}</p>

                  </div>

                </div>



                <div className="bg-slate-50 p-4 rounded-xl space-y-3 h-fit border border-slate-100">

                  <div>

                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tools Used</h4>

                    <div className="flex flex-wrap gap-1 mt-1">

                      {selectedProject.tools.map(t => <span key={t} className="bg-white border border-slate-200/60 text-slate-700 text-xs px-2 py-0.5 rounded-md font-medium">{t}</span>)}

                    </div>

                  </div>

                  <div>

                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Role</h4>

                    <p className="text-slate-700 text-xs font-medium mt-0.5">{selectedProject.role}</p>

                  </div>

                  <div>

                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Year</h4>

                    <p className="text-slate-700 text-xs font-medium mt-0.5">{selectedProject.year}</p>

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
*/