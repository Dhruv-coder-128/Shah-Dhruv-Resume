import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  highlights: string[];
  coursework: string[];
}

export const Education: React.FC = () => {
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
      coursework: [
        'Programming Fundamentals',
        'Data Structures',
        'Database Management Systems',
        'Object Oriented Programming',
        'Web Development',
        'Java Programming',
        'Advanced Java',
        'Software Development',
        'Computer Networks',
        'Operating Systems',
      ],
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Eklavya Public School',
      duration: '2023 - 2024',
      score: 'Percentage: 86.17%',
      highlights: [
        'Completed Higher Secondary Education',
        'Built a strong base in mathematics, science, and computing',
      ],
      coursework: [
        'Mathematics',
        'Computer Science',
        'English',
        'Statistics',
        'Basic Problem Solving',
      ],
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'Noble High School',
      duration: '2021 - 2022',
      score: 'Percentage: 83.48%',
      highlights: [
        'Completed Secondary Education',
        'Developed a strong foundation in core subjects',
      ],
      coursework: [
        'Mathematics',
        'Science',
        'English',
        'Social Science',
        'Basic Computer Studies',
      ],
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <GraduationCap size={12} />
            Academic Background
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Education <span className="text-blue-600">Timeline</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            A clear view of my academic journey, current CGPA, and the foundation that shaped my software development path.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Vertical Center Line (Desktop) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-blue-200 -translate-x-1/2 hidden md:block" />
          {/* Vertical Left Line (Mobile) */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-blue-200 -translate-x-1/2 md:hidden" />

          <div className="space-y-16">
            {educationList.map((item, idx) => (
              <div
                key={item.degree}
                className={`relative flex flex-col md:flex-row items-stretch ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node Icon */}
                <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 z-20 w-12 h-12 rounded-full bg-white border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                  <GraduationCap size={18} />
                </div>

                {/* Blank space on opposite column (Desktop only) */}
                <div className="w-full md:w-1/2 hidden md:block" />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                >
                  <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 relative group">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4 relative z-10">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        <Calendar size={10} />
                        {item.duration}
                      </span>
                      <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded font-bold">
                        {item.score}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors relative z-10">
                      {item.degree}
                    </h3>

                    <p className="text-slate-600 text-xs font-mono italic mt-1 mb-4 relative z-10">
                      {item.institution}
                    </p>

                    {/* Academic Highlights */}
                    <div className="space-y-2 mb-6 relative z-10">
                      <h4 className="text-[10px] font-mono text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Award size={12} />
                        Academic Highlights
                      </h4>
                      <ul className="space-y-1.5 pl-2 border-l border-blue-200">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-slate-700 leading-relaxed pl-1.5 relative">
                            <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-blue-500" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Coursework Tags */}
                    <div className="space-y-2 relative z-10">
                      <h4 className="text-[10px] font-mono text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen size={12} />
                        Core Coursework
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.coursework.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 text-[9px] font-mono hover:border-blue-300 transition-colors"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};