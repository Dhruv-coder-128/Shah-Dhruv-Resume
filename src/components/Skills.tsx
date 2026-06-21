import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code, Cpu, Database, Terminal, Shield } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools' | 'ai'>('all');

  const categories = [
    { id: 'all', label: 'All Expertise' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools & Platforms' },
    { id: 'ai', label: 'AI Tools' },
  ];

  const skillsData = [
    // Frontend
    { name: 'React', level: 95, category: 'frontend', type: 'Expert', desc: '4+ years of complex state management, SSR, ISR, and React 19 concurrent features.' },
    { name: 'TypeScript', level: 92, category: 'frontend', type: 'Expert', desc: 'Strict typing, advanced generic design, and type-safe API integration.' },
    { name: 'Tailwind CSS', level: 95, category: 'frontend', type: 'Expert', desc: 'Utility-first styling, customized luxury themes, and fluid layouts.' },
    { name: 'Bootstrap', level: 95, category: 'frontend', type: 'Expert', desc: 'Pre-built components, responsive grid system, and mobile components.' },
    { name: 'Framer Motion', level: 88, category: 'frontend', type: 'Advanced', desc: 'Orchestrating high-end 60fps animations, layout transitions, and scroll reveals.' },
    { name: 'HTML', level: 95, category: 'frontend', type: 'Expert', desc: 'Semantic markup, responsive design, and cross-browser compatibility.' },
    { name: 'CSS', level: 95, category: 'frontend', type: 'Expert', desc: 'Responsive design, cross-browser compatibility, and CSS Grid.' },
    
    // Backend
    { name: 'Node.js / Express', level: 90, category: 'backend', type: 'Expert', desc: 'Asynchronous architectures, security middleware, and performant REST APIs.' },
    { name: 'Python / FastAPI', level: 88, category: 'backend', type: 'Advanced', desc: 'High-speed asynchronous Python endpoints, auto-docs, and AI integrations.' },
    { name: 'Django', level: 95, category: 'backend', type: 'Expert', desc: 'Full-stack web framework, admin interface, and ORM.' },
    { name: 'JSP', level: 95, category: 'backend', type: 'Expert', desc: 'JavaServer Pages, dynamic web pages, and servlets.' },
    { name: 'Java', level: 95, category: 'backend', type: 'Expert', desc: 'Java platform, enterprise applications, and middleware.' },

    // Database
    { name: 'MySQL', level: 95, category: 'database', type: 'Expert', desc: 'Relational database management, transaction support, and query optimization.' },
    { name: 'SQLite', level: 95, category: 'database', type: 'Expert', desc: 'Embedded SQL database, embedded database, and embedded database.' },
    { name: 'PostgreSQL', level: 88, category: 'database', type: 'Advanced', desc: 'Complex joins, indexing, query optimization, and JSONB storage.' },
    { name: 'MongoDB', level: 85, category: 'database', type: 'Advanced', desc: 'NoSQL document modeling, aggregation pipelines, and high availability.' },

    // DevOps & Tools
    { name: 'Git', level: 90, category: 'tools', type: 'Expert', desc: 'CI/CD pipelines, automated testing, trunk-based development, and releases.' },
    { name: 'GitHub', level: 95, category: 'tools', type: 'Expert', desc: 'Version control, issue tracking, and project management.' },
    { name: 'XAMPP', level: 95, category: 'tools', type: 'Expert', desc: 'Integrated Apache, MySQL, and PHP server for local development and testing.' },
    { name: 'Apache tomcat', level: 95, category: 'tools', type: 'Expert', desc: 'Java servlet container, deployment, and application server.' },
    
    // AI Tools
    { name: 'OpenAI', level: 90, category: 'ai', type: 'Expert', desc: 'Generative AI models, chatbots, and NLP tools.' },
    { name: 'Trae', level: 85, category: 'ai', type: 'Advanced', desc: 'AI platform for building and deploying AI models.' },
    { name: 'Cursor', level: 88, category: 'ai', type: 'Advanced', desc: 'AI platform for building and deploying AI models.' },
    { name: 'Antigravity', level: 85, category: 'ai', type: 'Advanced', desc: 'AI platform for building and deploying AI models.' },
    { name: 'Claude', level: 85, category: 'ai', type: 'Advanced', desc: 'AI platform for building and deploying AI models.' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  // Core pillars of Dhruv's skillset (showcased prominently)
  const corePillars = [
    { title: 'The Architect', icon: <Cpu className="text-blue-600" size={24} />, desc: 'Designing robust, decoupled systems using microservices, WebSockets, and secure REST/GraphQL gateways.' },
    { title: 'The Designer', icon: <Code className="text-blue-600" size={24} />, desc: 'Pixel-perfect UI development with strict adherence to luxury typography, responsive layouts, and fluid motion.' },
    { title: 'The Optimizer', icon: <Database className="text-blue-600" size={24} />, desc: 'Database index tuning, asset compression, caching strategies, and Docker orchestration for rapid deployments.' },
    { title: 'The Strategist', icon: <Shield className="text-blue-600" size={24} />, desc: 'Writing clean, self-documenting code with automated testing (Jest), type-safety, and secure authentication protocols.' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
            <Terminal size={12} />
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Developed to <span className="text-blue-600">Perfection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            A comprehensive overview of my technical arsenal, specialized in modern web technologies, scalable backend services, and premium user experiences.
          </motion.p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {corePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-sm tracking-wider uppercase font-mono mb-2">{pillar.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skills Matrix */}
        <div className="glass-card rounded-3xl p-8 md:p-12">

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12 border-b border-slate-200 pb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all cursor-pointer ${activeCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-blue-600'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="flex flex-wrap justify-center gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="px-5 py-3 rounded-xl border border-slate-700 bg-white hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
