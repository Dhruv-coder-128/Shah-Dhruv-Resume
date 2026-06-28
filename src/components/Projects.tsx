import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Folder,
  Github,
  Layers3,
  X,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'frontend' | 'fullstack' | 'ai' | 'desktop';
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  shortDesc: string;
  longDesc: string;
  architecture: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 'f1-grid-2026',
    title: 'F1 Grid 2026',
    subtitle: 'Interactive Formula 1 Experience',
    category: 'frontend',
    image: '/projects/f1-grid-2026.png',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'JavaScript', 'Supabase'],
    metrics: [
      { label: 'Stack', value: 'Frontend' },
      { label: 'Data', value: 'Supabase' },
      { label: 'Status', value: 'Completed' },
    ],
    shortDesc:
      'A modern Formula 1 experience for fans featuring teams, drivers, race schedules, standings, and season insights.',
    longDesc:
      'F1 Grid 2026 is a visually rich Formula 1 platform inspired by the upcoming 2026 season. The interface focuses on fast navigation, responsive layouts, and a polished fan experience with clear data presentation and smooth interactions.',
    architecture: [
      'React components structure the racing sections and reusable UI blocks.',
      'TypeScript keeps the data flow predictable and maintainable.',
      'Tailwind CSS handles the responsive styling and visual consistency.',
      'Supabase powers the backend data layer for structured content.',
    ],
    github: 'https://github.com/Dhruv-coder-128/f1-2026-grid',
    live: 'https://f1-2026-grid-mcs1.vercel.app/',
  },
  {
    id: 'simba-intel',
    title: 'Simba Intel',
    subtitle: 'Virtual AI Assistant',
    category: 'ai',
    image: '/projects/simba-intel.png',
    tags: ['Python', 'Django', 'Bootstrap', 'JavaScript', 'SQLite', 'CSS'],
    metrics: [
      { label: 'Stack', value: 'Django' },
      { label: 'Models', value: 'Multiple' },
      { label: 'Status', value: 'Completed' },
    ],
    shortDesc:
      'A virtual AI assistant platform with multiple model support for flexible conversations and productivity workflows.',
    longDesc:
      'Simba Intel is designed as an AI assistant platform with support for multiple models in one interface. The project focuses on a clean user experience, flexible model usage, and a practical backend structure.',
    architecture: [
      'Python and Django provide the backend foundation.',
      'SQLite stores lightweight structured application data.',
      'Bootstrap creates a responsive UI layout.',
      'JavaScript handles interface interactions and model switching.',
    ],
    github: 'https://github.com/Dhruv-coder-128/Simba_Intel',
    live: 'https://simba-intel.onrender.com/',
  },
  {
    id: 'cars24x7',
    title: 'Cars24x7',
    subtitle: 'Car Rental Management Platform',
    category: 'fullstack',
    image: '/projects/cars24x7.png',
    tags: ['JSP', 'JDBC', 'MySQL', 'Bootstrap', 'JavaScript', 'CSS'],
    metrics: [
      { label: 'Stack', value: 'JSP' },
      { label: 'Database', value: 'MySQL' },
      { label: 'Status', value: 'Completed' },
    ],
    shortDesc:
      'A car rental platform designed to manage vehicles, bookings, and customer operations with a database-driven workflow.',
    longDesc:
      'Cars24x7 is a web application built for vehicle rental management. It includes the core booking and listing flow, along with the database integration needed for customer and vehicle records, making the system practical and easy to understand.',
    architecture: [
      'JSP pages provide the main user-facing structure.',
      'JDBC connects the application to MySQL.',
      'Bootstrap gives the interface a clean responsive layout.',
      'JavaScript adds interaction and form behavior.',
    ],
    github: 'YOUR_GITHUB_LINK',
    live: 'YOUR_LIVE_LINK',
  },
  {
    id: 'vendorbridge',
    title: 'VendorBridge',
    subtitle: 'Travel Planning Platform',
    category: 'fullstack',
    image: '/projects/vendorbridge.png',
    tags: ['React', 'Tailwind CSS', 'SQL Workbench', 'JavaScript'],
    metrics: [
      { label: 'Stack', value: 'React' },
      { label: 'UI', value: 'Interactive' },
      { label: 'Status', value: 'Completed' },
    ],
    shortDesc:
      'A travel planning platform with an interactive user interface that helps organize trips and related details.',
    longDesc:
      'VendorBridge is a travel planning experience focused on clarity, usability, and smooth information flow. The project presents trip-related data in a way that feels modern and easy to explore.',
    architecture: [
      'React powers the component-based interface.',
      'Tailwind CSS keeps the UI fast to style and consistent.',
      'SQL Workbench is used to manage and inspect the database layer.',
      'JavaScript handles interactivity and client-side behavior.',
    ],
    github: 'YOUR_GITHUB_LINK',
    live: 'YOUR_LIVE_LINK',
  },
  {
    id: 'python-browser',
    title: 'Python Browser',
    subtitle: 'Custom Desktop Browser',
    category: 'desktop',
    image: '/projects/python-browser.png',
    tags: ['Python'],
    metrics: [
      { label: 'Stack', value: 'Python' },
      { label: 'Type', value: 'Desktop App' },
      { label: 'Status', value: 'Completed' },
    ],
    shortDesc:
      'A lightweight browser created in Python to explore desktop application development and GUI programming.',
    longDesc:
      'Python Browser is a desktop application built in Python as a learning project around browser behavior, application structure, and GUI-based software development.',
    architecture: [
      'Python powers the desktop application logic.',
      'The browser UI is built around a simple GUI layout.',
      'Navigation and browsing features are implemented in a lightweight way.',
      'The project focuses on learning desktop application fundamentals.',
    ],
    github: 'YOUR_GITHUB_LINK',
    live: 'YOUR_LIVE_LINK',
  },
  {
    id: 'wandercraft',
    title: 'WanderCraft',
    subtitle: 'Smart Travel Planning Platform',
    category: 'fullstack',
    image: '/projects/wandercraft.png',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'SQL'],
    metrics: [
      { label: 'Platform', value: 'Travel Planner' },
      { label: 'UI', value: 'Interactive' },
      { label: 'Status', value: 'Completed' },
    ],
    shortDesc:
      'A modern travel planning platform designed to help users organize trips, explore destinations, and manage itineraries through an intuitive interface.',
    longDesc:
      'WanderCraft is a travel planning application focused on simplifying trip organization. Users can explore destinations, create travel plans, manage itineraries, and enjoy a clean and responsive user experience built with modern web technologies.',
    architecture: [
      'React powers the frontend user experience.',
      'Tailwind CSS provides a modern and responsive design system.',
      'Destination and trip data are managed through a database layer.',
      'Component-based architecture ensures scalability and maintainability.',
    ],
    github: 'YOUR_GITHUB_LINK',
    live: 'YOUR_LIVE_LINK',
  },
  {
    id: 'billing-pro',
    title: 'Billing Pro',
    subtitle: 'Invoice & Billing Management System',
    category: 'fullstack',
    image: '/projects/billing-pro.png',
    tags: ['Java', 'JSP', 'MySQL', 'Bootstrap', 'JavaScript'],
    metrics: [
      { label: 'Invoices', value: 'PDF Export' },
      { label: 'Reports', value: 'Generated' },
      { label: 'Status', value: 'Completed' },
    ],
    shortDesc:
      'A billing and invoice management system capable of generating invoices, exporting PDFs, and managing customer transactions.',
    longDesc:
      'Billing Pro is a complete billing management solution built to streamline invoice generation and business record keeping. The system supports customer management, invoice creation, PDF bill generation, transaction tracking, and reporting features through a user-friendly interface.',
    architecture: [
      'JSP and Java handle application logic and workflows.',
      'MySQL stores customer, billing, and transaction records.',
      'PDF generation enables downloadable and printable invoices.',
      'Bootstrap ensures a responsive and professional user interface.',
    ],
    github: 'YOUR_GITHUB_LINK',
    live: 'YOUR_LIVE_LINK',
  },
];

const categoryLabels: Record<'all' | Project['category'], string> = {
  all: 'All Projects',
  frontend: 'Frontend',
  fullstack: 'Full Stack',
  ai: 'AI',
  desktop: 'Desktop',
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | Project['category']>('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative overflow-hidden py-24 bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Folder size={12} />
            Selected Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Things I've <span className="text-blue-600">Built</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-base text-slate-600"
          >
            A collection of personal and academic projects that reflect my learning journey, technical growth, and attention to detail.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['all', 'frontend', 'fullstack', 'ai', 'desktop'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${activeCategory === category
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/15'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-slate-900'
                }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="group rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col"
              >
                <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                        <div className="flex flex-col items-center gap-2">
                          <Layers3 size={30} />
                          <span className="text-xs font-mono uppercase tracking-widest">Screenshot</span>
                        </div>
                      </div>
                    )}
                  </div>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">{project.subtitle}</p>
                  </div>

                  <span className="shrink-0 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-blue-600">
                    {categoryLabels[project.category]}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 mb-5">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-mono text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-5 grid grid-cols-3 gap-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{metric.label}</p>
                      <p className="mt-1 text-sm font-bold text-slate-900">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-200 pt-5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Deep Technical Overview
                    <ArrowRight size={12} />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && project.github !== 'YOUR_GITHUB_LINK' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-600"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github size={15} />
                      </a>
                    )}

                    {project.live && project.live !== 'YOUR_LIVE_LINK' && (
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-lg shadow-red-500/30"
    aria-label={`${project.title} Live Demo`}
  >
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
    </span>

    LIVE
  </a>
)}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Code2 size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {selectedProject.title}
                    </p>
                    <p className="truncate text-xs font-mono text-slate-500">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-red-200 hover:text-red-500"
                  aria-label="Close project details"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-6 md:p-6">
                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="space-y-6">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                      {selectedProject.image ? (
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full aspect-video object-contain"
                        />
                      ) : (
                        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                          <Layers3 size={34} />
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-2">
                        Technical Overview
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-700">
                        {selectedProject.longDesc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-2">
                        System Flow
                      </h4>
                      <div className="space-y-3 border-l border-blue-200 pl-4">
                        {selectedProject.architecture.map((step, index) => (
                          <div key={step} className="relative pl-4">
                            <span className="absolute left-[-11px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600" />
                            <p className="text-xs font-mono text-slate-500 mb-0.5">
                              0{index + 1}
                            </p>
                            <p className="text-sm text-slate-700">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center gap-2 text-slate-900 mb-4">
                        <CheckCircle2 size={18} className="text-blue-600" />
                        <h4 className="text-sm font-bold uppercase tracking-wider">
                          Project Snapshot
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {selectedProject.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-3">
                            <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                              {metric.label}
                            </p>
                            <p className="mt-1 text-sm font-bold text-slate-900">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-mono text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">
                        Links
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {selectedProject.github && selectedProject.github !== 'YOUR_GITHUB_LINK' && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
                          >
                            <Github size={14} />
                            GitHub
                          </a>
                        )}

                        {selectedProject.live && selectedProject.live !== 'YOUR_LIVE_LINK' && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-blue-200 bg-blue-50 p-5">
                      <p className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-2">
                        Project Note
                      </p>
                      <p className="text-sm leading-relaxed text-slate-700">
                        This project is presented with a clean recruiter-friendly layout so the screenshot, stack, and technical overview can be reviewed quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
