import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 group mb-2">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-black text-xs tracking-tighter">
              DS
            </div>
            <span className="text-slate-900 font-bold tracking-wider text-xs uppercase">
              Dhruv Shah
            </span>
          </div>
          <p className="text-[10px] font-mono text-slate-500 tracking-wider">
            © {currentYear} Dhruv Shah. All rights reserved.
          </p>
        </div>

        {/* Center: Quote */}
        <div className="text-center">
          <p className="text-xs italic text-slate-600">
            "Simplicity is the ultimate sophistication."
          </p>
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-1">
            — Leonardo da Vinci
          </p>
        </div>

        {/* Right Side: Back to top */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest cursor-pointer group py-2"
          >
            Back to Top
            <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="text-[9px] font-mono text-slate-500 mt-1 uppercase tracking-widest">
            Designed in California • Built with Care
          </p>
        </div>

      </div>
    </footer>
  );
};
