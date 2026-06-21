import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown, FileText, Briefcase, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  recruiterData: { name: string; company: string; role: string } | null;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, recruiterData }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for Apple-like smoothness
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">

        {/* Left Side: Copy / Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono tracking-widest uppercase">
              <Sparkles size={12} className="animate-pulse" />
              {recruiterData ? (
                <span>Exclusive Portfolio for {recruiterData.company}</span>
              ) : (
                <span>Full Stack Developer</span>
              )}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-1 mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-none">
              Dhruv Shah
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-500">
              {recruiterData ? (
                <>Your Next <span className="text-blue-600">{recruiterData.role}</span></>
              ) : (
                <>Crafting <span className="text-blue-600">Digital Masterpieces</span></>
              )}
            </h2>
          </motion.div>

          {/* Subtitle / Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 max-w-xl text-sm md:text-base leading-relaxed mb-10"
          >
            {recruiterData ? (
              `Hi ${recruiterData.name}, I am a high-performance Full Stack Developer specializing in building elegant user experiences coupled with highly scalable backends. I've built this tailored space to demonstrate how my technical stack perfectly aligns with ${recruiterData.company}'s development standards.`
            ) : (
              "A Full Stack Developer and BCA student passionate about turning ideas into functional digital products. Experienced in building web applications using modern frontend and backend technologies, with a strong focus on usability, clean code, and continuous learning."
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-xs font-mono uppercase tracking-widest hover:bg-blue-700 hover:scale-105 transition-all cursor-pointer"
            >
              View My Work
            </a>
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-slate-200 hover:border-blue-600 bg-white hover:bg-blue-50 text-slate-900 hover:text-blue-600 text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
            >
              <FileText size={14} />
              View Resume
            </button>
            {/* <a
              href="#recruiter"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-blue-600 tracking-wider uppercase transition-colors ml-2 py-2"
            >
              <Briefcase size={12} />
              Recruiter Hub
            </a> */}
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Profile Image */}
          <div className="relative">
            <img
              src="/dhruv.jpeg"
              alt="Dhruv Shah"
              className="
                w-[450px]
                h-[450px]
                rounded-full
                border-4
                border-white
                shadow-xl
              "
            />
          </div>
        </motion.div>
      </div>

      {/* Down Arrow / Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-blue-600"
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
};
