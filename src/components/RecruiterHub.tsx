// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Briefcase, Send, CheckCircle, Copy, Check, Sparkles, FileText, Calendar, RefreshCw } from 'lucide-react';

// interface RecruiterHubProps {
//   onRecruiterSubmit: (data: { name: string; company: string; role: string } | null) => void;
//   onOpenResume: () => void;
// }

// export const RecruiterHub: React.FC<RecruiterHubProps> = ({ onRecruiterSubmit, onOpenResume }) => {
//   const [name, setName] = useState('');
//   const [company, setCompany] = useState('');
//   const [role, setRole] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [activeTab, setActiveTab] = useState<'cover' | 'qa' | 'schedule'>('cover');

//   // Load from localStorage if exists
//   useEffect(() => {
//     const saved = localStorage.getItem('dhruv_recruiter_data');
//     if (saved) {
//       try {
//         const parsed = JSON.parse(saved);
//         setName(parsed.name);
//         setCompany(parsed.company);
//         setRole(parsed.role);
//         setSubmitted(true);
//         onRecruiterSubmit(parsed);
//       } catch (e) {
//         console.error('Error parsing recruiter data', e);
//       }
//     }
//   }, [onRecruiterSubmit]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name || !company || !role) return;

//     const data = { name, company, role };
//     localStorage.setItem('dhruv_recruiter_data', JSON.stringify(data));
//     setSubmitted(true);
//     onRecruiterSubmit(data);
//   };

//   const handleReset = () => {
//     localStorage.removeItem('dhruv_recruiter_data');
//     setName('');
//     setCompany('');
//     setRole('');
//     setSubmitted(false);
//     onRecruiterSubmit(null);
//   };

//   const generateCoverLetter = () => {
//     return `Hi ${name || 'Hiring Team'},

// I was thrilled to see the open ${role || 'Software Engineer'} position at ${company || 'your esteemed company'}. 

// Based on my background as a University Gold Medalist in Computer Science (CGPA 9.56/10) and my extensive hands-on experience building high-performance full-stack architectures (React, Next.js, Node.js, AWS), I am confident that I can make an immediate impact on your engineering team.

// I specialize in building elegant, fluid user interfaces coupled with scalable, secure backends. Some of my notable projects include Aura, a premium wealth management platform, and Chronos, a real-time collaborative IDE.

// I would love to schedule a brief call to discuss how my technical skills and passion for high-end engineering align with ${company}'s vision.

// Best regards,
// Dhruv Shah
// dhruvshah@example.com | +91 8866039007`;
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(generateCoverLetter());
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const recruiterQA = [
//     { q: 'Is Dhruv open to relocation?', a: 'Yes, open to major tech hubs (San Francisco, New York, Seattle) and remote positions.' },
//     { q: 'What is his availability / notice period?', a: 'Available immediately for full-time opportunities (graduating Class of 2025).' },
//     { q: 'Does he require visa sponsorship?', a: 'Authorized to work in the US. No immediate sponsorship required.' },
//     { q: 'What is his core technical sweet spot?', a: 'Full Stack Web Engineering (TypeScript, Next.js, Node.js, PostgreSQL) & Cloud Deployments (AWS/Docker).' }
//   ];

//   return (
//     <section id="recruiter" className="py-24 relative overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-5xl mx-auto px-6 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono tracking-wider uppercase mb-4"
//           >
//             <Briefcase size={12} />
//             Recruiter Hub
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl md:text-5xl font-bold tracking-tight text-white font-serif mb-4"
//           >
//             Tailor My Portfolio <span className="gold-text-gradient">For Your Role</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base"
//           >
//             Hiring managers are busy. Enter your details below to instantly customize this portfolio, generate a tailored cover letter, and view a recruiter-optimized resume.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
//           {/* Left Column: Form / Greeting */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-5 flex flex-col h-full"
//           >
//             <AnimatePresence mode="wait">
//               {!submitted ? (
//                 <motion.div
//                   key="form"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   className="glass-card p-8 rounded-2xl border border-gold/10 flex-grow flex flex-col justify-between"
//                 >
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-serif">
//                       <Sparkles size={18} className="text-gold" />
//                       Personalize Experience
//                     </h3>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Your Name</label>
//                         <input
//                           type="text"
//                           required
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           placeholder="e.g. Sarah Jenkins"
//                           className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-gold/50 transition-colors"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Company Name</label>
//                         <input
//                           type="text"
//                           required
//                           value={company}
//                           onChange={(e) => setCompany(e.target.value)}
//                           placeholder="e.g. Apple"
//                           className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-gold/50 transition-colors"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Open Role</label>
//                         <input
//                           type="text"
//                           required
//                           value={role}
//                           onChange={(e) => setRole(e.target.value)}
//                           placeholder="e.g. Senior Full Stack Engineer"
//                           className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-gold/50 transition-colors"
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         className="w-full py-3.5 mt-2 rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-semibold text-sm tracking-wide shadow-lg shadow-gold/10 hover:shadow-gold/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
//                       >
//                         <Send size={16} />
//                         Personalize Now
//                       </button>
//                     </form>
//                   </div>
//                   <p className="text-[11px] text-neutral-500 mt-6 text-center">
//                     Your data is stored locally in your browser and never sent to any server.
//                   </p>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="personalized"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   className="glass-card p-8 rounded-2xl border border-gold/20 flex-grow flex flex-col justify-between"
//                 >
//                   <div>
//                     <div className="flex justify-between items-start mb-6">
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                         <span className="text-xs font-mono text-emerald-400">Tailored Mode Active</span>
//                       </div>
//                       <button
//                         onClick={handleReset}
//                         className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-gold transition-colors"
//                       >
//                         <RefreshCw size={12} />
//                         Reset
//                       </button>
//                     </div>

//                     <h3 className="text-2xl font-bold text-white font-serif mb-4">
//                       Welcome, <span className="text-gold">{name}</span> from <span className="text-gold-light">{company}</span>!
//                     </h3>

//                     <p className="text-neutral-300 text-sm leading-relaxed mb-6">
//                       I have customized my portfolio to highlight how my expertise aligns perfectly with your search for a <strong className="text-white">{role}</strong>.
//                     </p>

//                     <div className="space-y-3 mb-6">
//                       <div className="flex items-start gap-2 text-xs text-neutral-400">
//                         <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" />
//                         <span>Dynamic cover letter generated for {company}</span>
//                       </div>
//                       <div className="flex items-start gap-2 text-xs text-neutral-400">
//                         <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" />
//                         <span>Resume tailored to highlight {role} skills</span>
//                       </div>
//                       <div className="flex items-start gap-2 text-xs text-neutral-400">
//                         <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" />
//                         <span>Quick-access scheduling pre-configured</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <button
//                       onClick={onOpenResume}
//                       className="w-full py-3 rounded-lg bg-neutral-900 border border-gold/30 hover:border-gold text-gold hover:text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
//                     >
//                       <FileText size={14} />
//                       View Tailored Resume
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           {/* Right Column: Dynamic Content Tabs */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-7 flex flex-col h-full"
//           >
//             <div className="glass-card rounded-2xl border border-gold/10 overflow-hidden flex-grow flex flex-col">
              
//               {/* Tab Headers */}
//               <div className="flex border-b border-white/10 bg-black/40">
//                 <button
//                   onClick={() => setActiveTab('cover')}
//                   className={`flex-1 py-4 text-xs font-mono tracking-wider uppercase border-b-2 transition-all ${
//                     activeTab === 'cover'
//                       ? 'border-gold text-gold bg-gold/5'
//                       : 'border-transparent text-neutral-400 hover:text-white'
//                   }`}
//                 >
//                   Cover Letter
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('qa')}
//                   className={`flex-1 py-4 text-xs font-mono tracking-wider uppercase border-b-2 transition-all ${
//                     activeTab === 'qa'
//                       ? 'border-gold text-gold bg-gold/5'
//                       : 'border-transparent text-neutral-400 hover:text-white'
//                   }`}
//                 >
//                   FAQ / Must-Haves
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('schedule')}
//                   className={`flex-1 py-4 text-xs font-mono tracking-wider uppercase border-b-2 transition-all ${
//                     activeTab === 'schedule'
//                       ? 'border-gold text-gold bg-gold/5'
//                       : 'border-transparent text-neutral-400 hover:text-white'
//                   }`}
//                 >
//                   Schedule Call
//                 </button>
//               </div>

//               {/* Tab Body */}
//               <div className="p-6 flex-grow flex flex-col justify-between bg-neutral-950/40">
//                 <AnimatePresence mode="wait">
//                   {activeTab === 'cover' && (
//                     <motion.div
//                       key="cover"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="flex-grow flex flex-col justify-between"
//                     >
//                       <div className="relative">
//                         <div className="absolute right-2 top-2 z-10">
//                           <button
//                             onClick={copyToClipboard}
//                             className="p-2 rounded-lg bg-black/80 border border-white/10 hover:border-gold/50 text-neutral-400 hover:text-gold transition-all flex items-center gap-1.5 text-xs cursor-pointer"
//                           >
//                             {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
//                             {copied ? 'Copied' : 'Copy'}
//                           </button>
//                         </div>
//                         <pre className="w-full h-64 p-4 bg-black/60 border border-white/5 rounded-xl text-neutral-300 font-mono text-xs overflow-y-auto leading-relaxed whitespace-pre-wrap">
//                           {generateCoverLetter()}
//                         </pre>
//                       </div>
//                       <p className="text-[11px] text-neutral-500 mt-4 italic">
//                         * Feel free to copy and paste this direct message into your ATS or email client.
//                       </p>
//                     </motion.div>
//                   )}

//                   {activeTab === 'qa' && (
//                     <motion.div
//                       key="qa"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="space-y-4"
//                     >
//                       {recruiterQA.map((item, idx) => (
//                         <div key={idx} className="p-4 bg-black/40 border border-white/5 rounded-xl hover:border-gold/20 transition-all">
//                           <h4 className="text-xs font-mono text-gold mb-1">{item.q}</h4>
//                           <p className="text-sm text-neutral-300">{item.a}</p>
//                         </div>
//                       ))}
//                     </motion.div>
//                   )}

//                   {activeTab === 'schedule' && (
//                     <motion.div
//                       key="schedule"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="text-center py-8 max-w-md mx-auto"
//                     >
//                       <Calendar size={48} className="text-gold mx-auto mb-4 animate-bounce" />
//                       <h4 className="text-lg font-bold text-white font-serif mb-2">Let's Secure a Slot</h4>
//                       <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
//                         I am ready to chat! Click below to send a pre-filled email to schedule a 15-minute introductory call.
//                       </p>
                      
//                       <a
//                         href={`mailto:dhruvshah@example.com?subject=Interview%20with%20Dhruv%20Shah%20-%20${company || 'Recruiter'}&body=Hi%20Dhruv,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20were%20extremely%20impressed.%20We%20would%20love%20to%20schedule%20a%2015-minute%20introductory%20call%20to%20discuss%20the%20${role || 'Software%20Engineer'}%20position%20at%20${company || 'our%20company'}.%0D%0A%0D%0APlease%20let%20us%20know%20your%20availability%20this%20week.%0D%0A%0D%0ABest%20regards,%0D%0A${name || 'Hiring%20Team'}`}
//                         className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-black font-semibold text-xs tracking-wider uppercase hover:bg-gold-light hover:scale-105 transition-all shadow-lg shadow-gold/10"
//                       >
//                         <Calendar size={14} />
//                         Request 15-Min Call
//                       </a>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//             </div>
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };
