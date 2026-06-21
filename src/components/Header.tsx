import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Briefcase } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
  recruiterData: { name: string; company: string; role: string } | null;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, recruiterData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm tracking-tighter"
          >
            DS
          </motion.div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-bold tracking-wider text-sm uppercase group-hover:text-blue-600 transition-colors">
              Dhruv Shah
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-widest uppercase text-slate-600 hover:text-blue-600 transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 transition-all group-hover:w-full" />
            </a>
          ))}
          
          {/* Recruiter Hub Short Link */}
          {/* <a
            href="#recruiter"
            className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-blue-600 hover:text-blue-700 transition-colors py-2"
          >
            <Briefcase size={12} />
            Recruiter Hub
          </a> */}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          {recruiterData && (
            <div className="text-right mr-2 hidden lg:block">
              <p className="text-[10px] font-mono text-green-600">Tailored for</p>
              <p className="text-xs font-semibold text-slate-900">{recruiterData.company}</p>
            </div>
          )}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 hover:border-blue-600 bg-white hover:bg-blue-50 text-slate-900 hover:text-blue-600 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
          >
            <FileText size={12} />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-600 hover:text-blue-600 md:hidden transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-mono tracking-widest uppercase text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#recruiter"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Briefcase size={14} />
                Recruiter Hub
              </a>
              <div className="h-[1px] bg-slate-200 my-2" />
              {recruiterData && (
                <div className="text-left py-1">
                  <p className="text-[10px] font-mono text-green-600">Tailored for</p>
                  <p className="text-xs font-semibold text-slate-900">{recruiterData.company} ({recruiterData.role})</p>
                </div>
              )}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-blue-600 bg-blue-600 text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer hover:bg-blue-700"
              >
                <FileText size={14} />
                View Custom Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
