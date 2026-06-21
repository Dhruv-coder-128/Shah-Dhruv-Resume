import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck, Calendar } from 'lucide-react';

interface Achievement {
  title: string;
  subtitle: string;
  date: string;
  category: string;
  metrics: string;
  description: string;
  icon: React.ReactNode;
}

export const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: 'University Rank 1',
      subtitle: 'Noble University',
      date: 'December 2024',
      category: 'Academics',
      metrics: 'Rank 1 / 450+ Students',
      description: 'Awarded from Noble University for maintaining the highest cumulative GPA (8.50/10.0) for first semester in Bachelor of Computer Applications.',
      icon: <Trophy className="text-blue-600" size={24} />,
    },
    {
      title: 'AI Fundamentals Certification',
      subtitle: 'IBM SkillBuild',
      date: 'May 2025',
      category: 'Certifications',
      metrics: 'AI Foundations',
      description: 'Completed IBM SkillBuild AI Fundamentals certification covering core concepts of Artificial Intelligence, Machine Learning, Generative AI, and practical AI applications across industries.',
      icon: <Award className="text-blue-600" size={24} />,
    },
    {
      title: 'Basics of Web Development',
      subtitle: 'IBM SkillBuild',
      date: 'June 2025',
      category: 'Certifications',
      metrics: 'Web Development',
      description: 'Completed IBM SkillBuild Web Development certification covering HTML, CSS, JavaScript, responsive design principles, and modern website development fundamentals.',
      icon: <Award className="text-blue-600" size={24} />,
    },
    {
      title: '7+ Projects Completed',
      subtitle: 'Personal & Academic Projects',
      date: '2026',
      category: 'Projects',
      metrics: 'Full Stack Development',
      description: 'Designed and developed multiple projects across AI, web development, travel planning, billing systems, and desktop applications.',
      icon: <Award className="text-blue-600" size={24} />,
    },
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-50">
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
            <Trophy size={12} />
            Honors & Ranks
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Milestones of <span className="text-blue-600">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            A timeline of academic honors, national-level hackathon championships, and professional industry certifications.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -35 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 transition-all duration-300 group"
            >
              {/* Icon Side */}
              <div className="flex md:flex-col items-center justify-between md:justify-start gap-4 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {ach.icon}
                </div>
                <div className="text-right md:text-center mt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <Calendar size={10} />
                    {ach.date}
                  </span>
                </div>
              </div>

              {/* Description Side */}
              <div className="flex-grow space-y-3">
                <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1">
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    {ach.category}
                  </span>
                  <span className="text-xs font-mono text-blue-700 font-bold">
                    {ach.metrics}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 font-mono italic">
                  {ach.subtitle}
                </p>

                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans pt-1">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
