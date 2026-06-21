import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy, Linkedin, Github, Twitter, MessageSquare, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('dhruvshah@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+91 8866039007');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50">
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
            <MessageSquare size={12} />
            Let's Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Initiate a <span className="text-blue-600">Conversation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            Whether you are looking to hire a full-time developer, discuss system design architectures, or just want to say hi, my inbox is always open.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl space-y-8 flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Channels</h3>
              
              <div className="space-y-6">
                {/* Email Channel */}
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl group hover:border-blue-300 transition-all">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-slate-500 uppercase">Email Address</p>
                      <p className="text-xs md:text-sm font-bold text-slate-900 truncate">dhruvshah@example.com</p>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-slate-500 hover:text-blue-600 transition-all cursor-pointer"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone Channel */}
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl group hover:border-blue-300 transition-all">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-slate-500 uppercase">Phone Number</p>
                      <p className="text-xs md:text-sm font-bold text-slate-900 truncate">+91 8866039007</p>
                    </div>
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-slate-500 hover:text-blue-600 transition-all cursor-pointer"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location Channel */}
                <div className="flex items-center p-4 bg-slate-50 border border-slate-200 rounded-xl group hover:border-blue-300 transition-all">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-slate-500 uppercase">Primary Location</p>
                      <p className="text-xs md:text-sm font-bold text-slate-900 truncate">Junagadh, Guarat, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Connect on Socials</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/shah-dhruv-38337736a/"
                    target="_blank"
                    className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/dhruv-coder-128"
                    target="_blank"
                    className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/_dhruv_444_/"
                    target="_blank"
                    className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div className="glass-card p-8 rounded-2xl flex-grow flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Encrypted Message Box</h3>
                      <p className="text-xs text-slate-600">Leave a secure note in my development registry.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono text-slate-600 uppercase mb-1.5">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Sarah Jenkins"
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono text-slate-600 uppercase mb-1.5">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="sarah@company.com"
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-slate-600 uppercase mb-1.5">Company (Optional)</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Apple Inc."
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-slate-600 uppercase mb-1.5">Message *</label>
                        <textarea
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write your message here... Let's build something beautiful together."
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 mt-2 rounded-xl bg-blue-600 text-white font-semibold text-xs font-mono uppercase tracking-widest hover:bg-blue-700 hover:scale-[1.01] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {submitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Registry...
                          </>
                        ) : (
                          <>
                            <Send size={12} />
                            Transmit Message
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-grow flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                      <Check size={28} className="animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Transmission Successful</h3>
                    <p className="text-slate-600 text-sm max-w-sm leading-relaxed mb-6">
                      Your message has been securely recorded in my developer registry. I will review it and get back to you within 12 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-blue-300 text-blue-600 hover:bg-blue-50 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
