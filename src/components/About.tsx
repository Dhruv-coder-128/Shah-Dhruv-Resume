import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Award, ChevronRight, Sparkles } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
  recruiterData: { name: string; company: string; role: string } | null;
}

export const About: React.FC<AboutProps> = ({ onOpenResume, recruiterData }) => {
  const stats = [
    {
      label: 'CGPA',
      value: '8.30 / 10.0',
      description: 'Bachelor of Computer Applications',
      icon: <GraduationCap className="text-blue-600" size={20} />,
    },
    {
      label: 'Projects',
      value: '7+ Completed',
      description: 'Academic & Personal Projects',
      icon: <Code className="text-blue-600" size={20} />,
    },
    {
      label: 'Technologies',
      value: '14+ Known',
      description: 'Frontend, Backend, Database',
      icon: <Briefcase className="text-blue-600" size={20} />,
    },
    {
      label: 'Achievements',
      value: '4+ Excellence',
      description: 'University rank holder',
      icon: <Award className="text-blue-600" size={20} />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-10 border border-blue-30 text-blue text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Sparkles size={12} />
            The Artisan
          </motion.div> */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Behind the Craft: <span className="text-blue-600">Dhruv Shah</span>
          </motion.h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
              {recruiterData ? (
                <>Developing Software that Drives <span className="text-blue-600">{recruiterData.company}</span>'s Innovations</>
              ) : (
                <>Bridging the Gap Between <span className="text-blue-600">Sleek Interface</span> and <span className="text-blue-600">Architectural Integrity</span></>
              )}
            </h3>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              I am a final-year BCA student who treats software development as a fine craft. Over the past 2 - 3 years, I have maintained an outstanding academic record,  while dedicating thousands of hours to coding, system design, and building production-ready personal platforms.
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              My philosophy aligns with Apple's standard of computing: every line of code should be clean, every interface should feel fluid, and the underlying architecture must be bulletproof. I don't just build features; I architect solutions that scale, optimize performance down to the millisecond.
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              I strive to push the boundaries of what is possible in web development.
            </p>

            {/* Quick List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-blue-600" />
                <span>Focus: Full Stack Development</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-blue-600" />
                <span>Frontend: React, TypeScript & Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-blue-600" />
                <span>Backend: Node.js, Python & Java</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-blue-600" />
                <span>Database: MySQL & SQL</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border  hover:border-blue-600 bg-white hover:bg-blue-50 text-slate-900 hover:text-blue-600 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
              >
                Explore Interactive Resume
              </button>
            </div>
          </motion.div>

          {/* Right Column: Grid of Stats */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between  transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className="mt-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    {stat.value}
                  </h4>
                  <p className="text-[11px] text-slate-600 font-mono mt-1 leading-snug">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
