import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Sparkles,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recruiterData?: {
    name: string;
    company: string;
    role: string;
  } | null;
}

type SkillGroup = {
  title: string;
  items: string[];
};

type Project = {
  title: string;
  subtitle: string;
  tech: string[];
  summary: string;
};

type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  highlights: string[];
};

type Certification = {
  title: string;
  provider: string;
  year: string;
  note: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Vite',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend',
    items: ['Python', 'Django', 'Java', 'JSP', 'Servlet', 'JDBC'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'SQLite', 'SQL', 'Supabase'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vercel', 'Figma'],
  },
  {
    title: 'AI Tools',
    items: ['ChatGPT', 'Claude', 'Gemini', 'Cursor AI', 'GitHub Copilot', 'Perplexity'],
  },
];

const projects: Project[] = [
  {
    title: 'F1 Grid 2026',
    subtitle: 'Interactive Formula 1 Experience',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'JavaScript', 'Supabase'],
    summary:
      'A modern Formula 1 experience for fans featuring teams, drivers, race schedules, standings, and immersive UI sections inspired by the future of racing.',
  },
  {
    title: 'WanderCraft',
    subtitle: 'Smart Travel Planning Platform',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'SQL'],
    summary:
      'A travel planning platform that helps users organize trips, explore destinations, and manage itineraries through a clean and interactive interface.',
  },
  {
    title: 'Billing Pro',
    subtitle: 'Invoice & Billing Management System',
    tech: ['Java', 'JSP', 'MySQL', 'Bootstrap', 'JavaScript', 'PDF Generation'],
    summary:
      'A billing system for generating professional invoices, managing customer records, tracking transactions, generating reports, and exporting bills as PDF files.',
  },
  {
    title: 'Simba Intel',
    subtitle: 'Virtual AI Assistant',
    tech: ['Python', 'Django', 'Bootstrap', 'JavaScript', 'SQLite', 'CSS'],
    summary:
      'A virtual AI assistant with multi-model support, designed for intelligent conversations and productivity-focused interactions.',
  },
  {
    title: 'Cars24x7',
    subtitle: 'Car Rental Management Platform',
    tech: ['JSP', 'JDBC', 'MySQL', 'Bootstrap', 'JavaScript', 'CSS'],
    summary:
      'A web-based car rental management platform built to handle bookings, customer records, and rental operations with a database-driven workflow.',
  },
  {
    title: 'VendorBridge',
    subtitle: 'Travel Planning Platform',
    tech: ['React', 'Tailwind CSS', 'SQL Workbench', 'JavaScript'],
    summary:
      'An interactive travel planning interface focused on trip organization, destination exploration, and smooth user experience.',
  },
  {
    title: 'Python Browser',
    subtitle: 'Custom Desktop Browser',
    tech: ['Python'],
    summary:
      'A lightweight browser created in Python to explore desktop application development and GUI programming.',
  },
];

const educationList: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Noble University',
    duration: '2024 - 2027',
    score: 'Current CGPA: 8.27 / 10',
    highlights: [
      'Semester 1 CGPA: 8.50',
      'Semester 2 CGPA: 7.92',
      'Semester 3 CGPA: 8.39',
      'Semester 4 CGPA: 8.28',
    ],
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'Eklavya Public School',
    duration: '2023 - 2024',
    score: 'Percentage: 86.17%',
    highlights: [
      'Completed higher secondary education with strong academic performance',
      'Built a foundation in mathematics, computer science, and analytical thinking',
    ],
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'Noble High School',
    duration: '2021 - 2022',
    score: 'Percentage: 83.48%',
    highlights: [
      'Completed secondary education with consistent performance',
      'Developed core problem-solving and study habits',
    ],
  },
];

const certifications: Certification[] = [
  {
    title: 'AI Fundamentals',
    provider: 'IBM SkillBuild',
    year: '2025',
    note: 'Completed certification covering the core concepts and applications of AI.',
  },
  {
    title: 'Basics of Web Development',
    provider: 'IBM SkillBuild',
    year: '2025',
    note: 'Completed certification covering HTML, CSS, JavaScript, and modern web development fundamentals.',
  },
];

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, recruiterData }) => {
  const handlePrint = () => window.print();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 print:hidden">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-slate-600 font-mono truncate">
                  dhruv_shah_resume
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 text-xs font-medium transition-all"
                >
                  <Printer size={14} />
                  Print / Save PDF
                </button> */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white border border-slate-300 hover:border-red-500 text-slate-600 hover:text-red-500 transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto bg-white text-slate-900 print:max-h-full print:p-0 print:overflow-visible font-sans">
              
        

              <div className="border-b-2 border-blue-600 pb-6 mb-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono uppercase tracking-[0.2em] mb-4">
                      <Sparkles size={12} />
                      BCA Student • Full Stack Developer
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-serif">
                      Dhruv Shah
                    </h1>
                    <p className="text-lg font-medium text-blue-600 tracking-wide mt-1">
                      Full Stack Developer
                    </p>
                    <p className="text-sm text-slate-600 mt-3 max-w-3xl leading-relaxed">
                      BCA student at Noble University building modern web applications with React,
                      TypeScript, Tailwind CSS, Python, Django, Java, JSP, and MySQL. Focused on
                      clean UI, practical functionality, and real-world development workflows.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Mail size={12} className="text-blue-600" />
                      dushah2007@gmail.com
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone size={12} className="text-blue-600" />
                      8866039007
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-blue-600" />
                      India
                    </span>
                    {/* <span className="flex items-center gap-1.5">
                      <Globe size={12} className="text-blue-600" />
                      portfolio-link.com
                    </span> */}
                    <span className="flex items-center gap-1.5">
                      <Github size={12} className="text-blue-600" />
                      <a href="https://github.com/Dhruv-coder-128" target="_blank" rel="noopener noreferrer">
                        {"https://github.com/Dhruv-coder-128"}
                      </a>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Linkedin size={12} className="text-blue-600" />
                      <a href="https://www.linkedin.com/in/shah-dhruv-38337736a/" target="_blank" rel="noopener noreferrer">
                        {"https://www.linkedin.com/in/shah-dhruv-38337736a/"}
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <section className="mb-6">
                <h2 className="text-sm font-bold tracking-wider text-blue-800 uppercase mb-2 font-serif border-b border-slate-200 pb-1">
                  Professional Summary
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Motivated BCA student and full stack developer with practical experience in
                  building web applications, desktop applications, and AI-assisted tools. Comfortable
                  working across frontend, backend, and database layers with a strong focus on
                  responsive UI, clean code, and real project delivery.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-sm font-bold tracking-wider text-blue-800 uppercase mb-3 font-serif border-b border-slate-200 pb-1">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillGroups.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Code2 size={14} className="text-blue-600" />
                        {group.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px] font-mono"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-6">
                <h2 className="text-sm font-bold tracking-wider text-blue-800 uppercase mb-3 font-serif border-b border-slate-200 pb-1">
                  Selected Projects
                </h2>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <article
                      key={project.title}
                      className="rounded-2xl border border-slate-200 p-4 md:p-5 bg-white"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-base font-bold text-slate-900">
                            {project.title}
                          </h3>
                          <p className="text-sm text-blue-600">{project.subtitle}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {project.summary}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="mb-6">
                <h2 className="text-sm font-bold tracking-wider text-blue-800 uppercase mb-3 font-serif border-b border-slate-200 pb-1">
                  Education
                </h2>
                <div className="space-y-4">
                  {educationList.map((item) => (
                    <div
                      key={item.degree}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">
                            {item.degree}
                          </h3>
                          <p className="text-xs text-slate-600">{item.institution}</p>
                        </div>
                        <div className="text-left md:text-right">
                          <span className="text-xs font-mono text-slate-500 block">
                            {item.duration}
                          </span>
                          <span className="inline-block bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded mt-1">
                            {item.score}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-3 space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                        {item.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-6">
                <h2 className="text-sm font-bold tracking-wider text-blue-800 uppercase mb-3 font-serif border-b border-slate-200 pb-1">
                  Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                          <Award size={16} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-slate-600">
                            {cert.provider} • {cert.year}
                          </p>
                          <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                            {cert.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-sm font-bold tracking-wider text-blue-800 uppercase mb-3 font-serif border-b border-slate-200 pb-1">
                  Additional Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                      <Briefcase size={14} className="text-blue-600" />
                      Current Focus
                    </div>
                    <p className="text-xs text-slate-700">
                      Full stack development, UI building, database integration, and AI-enabled tools.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                      <GraduationCap size={14} className="text-blue-600" />
                      Academic Status
                    </div>
                    <p className="text-xs text-slate-700">
                      BCA Semester 4 completed with current CGPA of 8.27 / 10.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                      <Award size={14} className="text-blue-600" />
                      Project Count
                    </div>
                    <p className="text-xs text-slate-700">
                      7+ projects across frontend, backend, AI, travel planning, billing, and desktop apps.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
