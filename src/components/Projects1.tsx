import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Folder, Play, Check, Search, Cpu, Database, Shield, Layers, HelpCircle, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  shortDesc: string;
  longDesc: string;
  architecture: string[];
  github: string;
  live: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'fullstack' | 'ai' | 'web3'>('all');

  // Widget States
  const [auraFilter, setAuraFilter] = useState<'1D' | '1W' | '1M' | '1Y'>('1M');
  const [chronosRunning, setChronosRunning] = useState(false);
  const [chronosOutput, setChronosOutput] = useState<string[]>([]);
  const [vortexQuery, setVortexQuery] = useState('');
  const [vortexResults, setVortexQueryResults] = useState<{ frame: string; text: string; confidence: string }[]>([]);
  const [solsticeStatus, setSolsticeStatus] = useState<'idle' | 'scanning' | 'verified'>('idle');
  const [solsticeAsset, setSolsticeStatusAsset] = useState('Rolex Daytona Ref. 116500LN');

  const projects: Project[] = [
    {
      id: 'aura',
      title: 'Aura',
      subtitle: 'Premium Wealth Management Platform',
      category: 'fullstack',
      tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
      metrics: [
        { label: 'API Latency', value: '< 45ms' },
        { label: 'Data Sync', value: 'Real-time' },
        { label: 'Simulation Accuracy', value: '99.8%' }
      ],
      shortDesc: 'A high-end financial dashboard managing simulated high-net-worth portfolios with real-time SVG charts and predictive rebalancing.',
      longDesc: 'Aura is an ultra-premium wealth management system tailored for luxury financial advisors. It features a responsive, glassmorphic client interface that updates instantly via WebSockets. The backend, built with FastAPI and PostgreSQL, utilizes Redis to cache volatile market feeds, reducing database load by 60%. A predictive portfolio rebalancing engine analyzes asset deviations and recommends adjustments in microseconds.',
      architecture: [
        'Clients establish persistent secure WebSocket connections to the gateway.',
        'FastAPI processes rebalancing algorithms and coordinates with a PostgreSQL relational model.',
        'Redis serves as a high-speed cache layer for asset valuations and user sessions.',
        'Tailwind and Framer Motion power the fluid, micro-interactive charting dashboard.'
      ],
      github: 'https://github.com/dhruvshah/aura',
      live: '#'
    },
    {
      id: 'chronos',
      title: 'Chronos',
      subtitle: 'Real-time Collaborative IDE',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'WebSockets', 'Yjs CRDT', 'Docker'],
      metrics: [
        { label: 'Sync Latency', value: '< 15ms' },
        { label: 'Supported Languages', value: '8+' },
        { label: 'Execution Sandbox', value: 'Secure Docker' }
      ],
      shortDesc: 'A collaborative web-based code editor featuring real-time multi-user synchronization and secure, sandboxed code execution.',
      longDesc: 'Chronos is a fully functional web-based IDE that lets multiple developers write, review, and execute code together. Collaborative editing is powered by Yjs Conflict-free Replicated Data Types (CRDTs) over WebSockets, ensuring flawless synchronization even under poor network conditions. Code execution is securely sandboxed in ephemeral Docker containers, protecting the host system while compiling 8+ programming languages.',
      architecture: [
        'React frontend integrates Monaco Editor, bound to Yjs shared documents.',
        'WebSocket server orchestrates collaborative rooms and broadcasts changes.',
        'An execution service queues compile requests and spins up sandboxed Docker containers.',
        'Resource limits (CPU/Memory) are strictly enforced per run execution.'
      ],
      github: 'https://github.com/dhruvshah/chronos',
      live: '#'
    },
    {
      id: 'vortex',
      title: 'Vortex',
      subtitle: 'AI-powered Video Search Engine',
      category: 'ai',
      tags: ['Python', 'PyTorch', 'Qdrant', 'OpenAI CLIP', 'Whisper'],
      metrics: [
        { label: 'Search Latency', value: '120ms' },
        { label: 'Embedding Dimensions', value: '512' },
        { label: 'Indexing Speed', value: '10x Real-time' }
      ],
      shortDesc: 'A semantic search engine processing video assets to perform precise context-based frame and dialog queries.',
      longDesc: 'Vortex revolutionizes video library navigation by enabling semantic search across both visual and auditory content. It processes uploaded videos, using OpenAI Whisper to generate timestamped text transcripts, and OpenAI CLIP to generate 512-dimensional vector embeddings for video frames. These embeddings are indexed in Qdrant Vector Database, allowing natural language queries to instantly locate specific scenes.',
      architecture: [
        'A Python pipeline extracts audio and keyframes from uploaded video files.',
        'Whisper transcribes the audio; CLIP encodes visual frames into vectors.',
        'Embeddings and metadata are indexed in a high-performance Qdrant cluster.',
        'A React UI queries the API, returning exact timestamps and matching video frames.'
      ],
      github: 'https://github.com/dhruvshah/vortex',
      live: '#'
    },
    {
      id: 'solstice',
      title: 'Solstice',
      subtitle: 'Decentralized Luxury Marketplace',
      category: 'web3',
      tags: ['Solidity', 'Ethers.js', 'React', 'Hardhat', 'IPFS'],
      metrics: [
        { label: 'Block Confirmations', value: '1' },
        { label: 'Gas Optimization', value: '30% Saved' },
        { label: 'Asset Verification', value: '100% Cryptographic' }
      ],
      shortDesc: 'A Web3 luxury goods verification and marketplace platform using decentralized ledgers to prevent luxury counterfeiting.',
      longDesc: 'Solstice is a decentralized application (dApp) designed to secure the supply chain of luxury assets. Manufacturers mint non-fungible tokens (NFTs) representing physical items (e.g. high-end watches, handbags). Ownership is transferred cryptographically upon sale. Built on Ethereum (tested via Hardhat), the ERC-721 smart contracts are heavily optimized for gas efficiency. Metadata and proof of authenticity are stored permanently on IPFS.',
      architecture: [
        'Solidity smart contracts define luxury asset ownership and transfer rules.',
        'IPFS hosts high-resolution asset images and cryptographic specifications.',
        'React frontend connects to Ethereum nodes via Ethers.js and MetaMask.',
        'Automated testing suite written in Hardhat verifies contract security.'
      ],
      github: 'https://github.com/dhruvshah/solstice',
      live: '#'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Widget 1: Aura Interactive Financial Chart Data
  const getAuraChartPoints = () => {
    switch (auraFilter) {
      case '1D':
        return '10,120 40,115 70,118 100,105 130,110 160,95 190,100 220,90 250,85 280,92 310,75 340,80';
      case '1W':
        return '10,130 40,120 70,110 100,115 130,100 160,105 190,85 220,95 250,80 280,70 310,75 340,60';
      case '1M':
        return '10,140 40,130 70,125 100,110 130,115 160,95 190,105 220,80 250,85 280,70 310,55 340,40';
      case '1Y':
        return '10,150 40,135 70,120 100,105 130,95 160,80 190,85 220,60 250,65 280,45 310,35 340,20';
    }
  };

  const getAuraPercentage = () => {
    switch (auraFilter) {
      case '1D': return '+1.84%';
      case '1W': return '+5.12%';
      case '1M': return '+12.45%';
      case '1Y': return '+38.90%';
    }
  };

  // Widget 2: Chronos Code Execution
  const runChronosCode = () => {
    if (chronosRunning) return;
    setChronosRunning(true);
    setChronosOutput(['$ sandbox-exec run main.ts', 'Compiling...']);
    
    setTimeout(() => {
      setChronosOutput(prev => [...prev, 'Linking libraries...', 'Executing environment...']);
    }, 800);

    setTimeout(() => {
      setChronosOutput(prev => [
        ...prev,
        '---------------------------------------',
        'Hello World! Dhruv Shah here.',
        'Status: Ready to build amazing things.',
        'CGPA: 9.56/10.0 | Gold Medalist',
        '---------------------------------------',
        'Execution complete. Exit code: 0 (Success)'
      ]);
      setChronosRunning(false);
    }, 1800);
  };

  // Widget 3: Vortex Semantic Search
  const handleVortexSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vortexQuery) return;
    
    const query = vortexQuery.toLowerCase();
    let results: { frame: string; text: string; confidence: string }[] = [];

    if (query.includes('nature') || query.includes('forest') || query.includes('tree')) {
      results = [
        { frame: '🌲 Deep Forest Timelapse', text: '...camera pans across redwood trees in early morning mist...', confidence: '98.4%' },
        { frame: '🍂 Autumn River Flow', text: '...sound of rushing water as leaves drift down current...', confidence: '91.2%' }
      ];
    } else if (query.includes('city') || query.includes('traffic') || query.includes('cyberpunk')) {
      results = [
        { frame: '🏙️ Tokyo Intersection Night', text: '...pedestrians crossing under bright neon billboards in Shibuya...', confidence: '97.1%' },
        { frame: '🚗 Highway Timelapse', text: '...streaks of headlights stretching into the financial district...', confidence: '89.5%' }
      ];
    } else if (query.includes('space') || query.includes('star') || query.includes('galaxy')) {
      results = [
        { frame: '🌌 Nebula Zoom', text: '...stellar dust swirling around a newly forming protostar...', confidence: '99.1%' },
        { frame: '🚀 Rocket Launch Slow-Mo', text: '...engines igniting as the Saturn V clears the launch pad...', confidence: '93.7%' }
      ];
    } else {
      results = [
        { frame: '💻 Code Compilation Screen', text: `...matching query "${vortexQuery}" across developer workspace files...`, confidence: '85.2%' }
      ];
    }

    setVortexQueryResults(results);
  };

  // Widget 4: Solstice Asset Verification
  const runSolsticeVerification = () => {
    if (solsticeStatus === 'scanning') return;
    setSolsticeStatus('scanning');
    
    setTimeout(() => {
      setSolsticeStatus('verified');
    }, 2000);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50">
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
            <Folder size={12} />
            The Gallery
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Things I've <span className="text-blue-600">Built</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            A showcase of the applications, experiments, and ideas I've brought to life through code.
          </motion.p>
        </div>

        {/* Category Filters */}
        {/* <div className="flex justify-center gap-2 mb-12">
          {([
            { id: 'all', label: 'All Projects' },
            { id: 'fullstack', label: 'Full Stack' },
            { id: 'ai', label: 'AI & Data' },
            { id: 'web3', label: 'Web3 / Ledger' }
          ] as const).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-blue-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Project 1: Aura (Wealth Management) */}
          {['all', 'fullstack'].includes(activeCategory) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-500"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Aura</h3>
                    <p className="text-xs font-mono text-slate-600 mt-0.5">Premium Wealth Management Platform</p>
                  </div>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    Full Stack
                  </span>
                </div>

                {/* Interactive Chart Widget */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 mb-6 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase">Portfolio Value</p>
                      <h4 className="text-lg font-bold text-slate-900 font-mono flex items-center gap-1.5">
                        $1,248,390
                        <span className="text-xs text-emerald-600 font-normal">{getAuraPercentage()}</span>
                      </h4>
                    </div>
                    <div className="flex gap-1.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                      {(['1D', '1W', '1M', '1Y'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setAuraFilter(filter)}
                          className={`px-2 py-1 rounded text-[9px] font-mono transition-all cursor-pointer ${
                            auraFilter === filter ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SVG Line Graph */}
                  <div className="h-28 flex items-end justify-center relative">
                    <svg className="w-full h-24 overflow-visible" viewBox="0 0 350 150">
                      <defs>
                        <linearGradient id="auraGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Fill area */}
                      <path
                        d={`M10,150 L${getAuraChartPoints()} L340,150 Z`}
                        fill="url(#auraGlow)"
                        className="transition-all duration-500"
                      />
                      {/* Main line */}
                      <polyline
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="2.5"
                        points={getAuraChartPoints()}
                        className="transition-all duration-500"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {projects[0].shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between items-center border-t border-slate-200 pt-6 mt-2">
                <button
                  onClick={() => setSelectedProject(projects[0])}
                  className="text-xs font-mono text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest flex items-center gap-1 cursor-pointer"
                >
                  Deep Technical Overview &rarr;
                </button>
                <div className="flex gap-3">
                  <a href={projects[0].github} target="_blank" className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-blue-600 transition-colors">
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Project 2: Chronos (Collaborative IDE) */}
          {['all', 'fullstack'].includes(activeCategory) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-500"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Chronos</h3>
                    <p className="text-xs font-mono text-slate-600 mt-0.5">Real-time Collaborative IDE</p>
                  </div>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    Full Stack
                  </span>
                </div>

                {/* Interactive Code Widget */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 mb-6 font-mono text-xs overflow-hidden h-[180px] flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-[10px] text-slate-500">sandbox_workspace/main.ts</span>
                    <button
                      onClick={runChronosCode}
                      disabled={chronosRunning}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-600 text-white font-bold text-[10px] hover:bg-blue-700 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <Play size={10} fill="white" />
                      {chronosRunning ? 'Running...' : 'Run Code'}
                    </button>
                  </div>

                  <div className="flex-grow py-3 overflow-y-auto space-y-1 text-[11px]">
                    <div className="text-slate-600">
                      <span className="text-orange-500">import</span> {'{ Developer }'} <span className="text-orange-500">from</span> <span className="text-emerald-600">"./developer"</span>;
                    </div>
                    <div className="text-slate-600">
                      <span className="text-orange-500">const</span> candidate = <span className="text-orange-500">new</span> <span className="text-yellow-600">Developer</span>(<span className="text-emerald-600">"Dhruv Shah"</span>);
                    </div>
                    <div className="text-slate-600">
                      candidate.<span className="text-blue-600">initializePortfolio</span>();
                    </div>

                    {/* Output terminal */}
                    {chronosOutput.length > 0 && (
                      <div className="mt-3 pt-2 border-t border-slate-200 text-emerald-600 font-mono text-[10px] space-y-0.5">
                        {chronosOutput.map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {projects[1].shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[1].tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between items-center border-t border-slate-200 pt-6 mt-2">
                <button
                  onClick={() => setSelectedProject(projects[1])}
                  className="text-xs font-mono text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest flex items-center gap-1 cursor-pointer"
                >
                  Deep Technical Overview &rarr;
                </button>
                <div className="flex gap-3">
                  <a href={projects[1].github} target="_blank" className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-blue-600 transition-colors">
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Project 3: Vortex (AI Search) */}
          {['all', 'ai'].includes(activeCategory) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-500"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Vortex</h3>
                    <p className="text-xs font-mono text-slate-600 mt-0.5">AI-powered Video Search Engine</p>
                  </div>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    AI & Data
                  </span>
                </div>

                {/* Interactive Search Widget */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 mb-6 h-[180px] flex flex-col justify-between">
                  <form onSubmit={handleVortexSearch} className="flex gap-2">
                    <div className="relative flex-grow">
                      <input
                        type="text"
                        value={vortexQuery}
                        onChange={(e) => setVortexQuery(e.target.value)}
                        placeholder="Search: 'nature', 'city', 'space'..."
                        className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-600"
                      />
                      <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    </div>
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-blue-600 text-white font-bold text-[10px] rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      Search
                    </button>
                  </form>

                  <div className="flex-grow overflow-y-auto py-2.5 space-y-2">
                    {vortexResults.length > 0 ? (
                      vortexResults.map((res, idx) => (
                        <div key={idx} className="p-2 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
                          <div>
                            <p className="text-[10px] font-bold text-slate-900">{res.frame}</p>
                            <p className="text-[9px] text-slate-600 truncate max-w-[200px] mt-0.5">{res.text}</p>
                          </div>
                          <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                            {res.confidence}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="h-full flex items-center justify-center text-center text-[10px] text-slate-500">
                        Type a query and press search to locate video frame timestamps.
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {projects[2].shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[2].tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between items-center border-t border-slate-200 pt-6 mt-2">
                <button
                  onClick={() => setSelectedProject(projects[2])}
                  className="text-xs font-mono text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest flex items-center gap-1 cursor-pointer"
                >
                  Deep Technical Overview &rarr;
                </button>
                <div className="flex gap-3">
                  <a href={projects[2].github} target="_blank" className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-blue-600 transition-colors">
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Project 4: Solstice (Web3 Marketplace) */}
          {['all', 'web3'].includes(activeCategory) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-500"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Solstice</h3>
                    <p className="text-xs font-mono text-slate-600 mt-0.5">Decentralized Luxury Marketplace</p>
                  </div>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    Web3 / Ledger
                  </span>
                </div>

                {/* Interactive Ledger Widget */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 mb-6 h-[180px] flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-[10px] font-mono text-slate-500">Asset Verification Client</span>
                    <span className="text-[9px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
                      Ethereum Goerli
                    </span>
                  </div>

                  {solsticeStatus === 'idle' && (
                    <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
                      <p className="text-[11px] text-slate-600 mb-3">Scan cryptographic luxury watch NFT ownership status.</p>
                      <button
                        onClick={runSolsticeVerification}
                        className="px-4 py-2 bg-blue-600 text-white font-bold text-[10px] rounded-lg hover:bg-blue-700 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        Verify Cryptographic Asset
                      </button>
                    </div>
                  )}

                  {solsticeStatus === 'scanning' && (
                    <div className="flex-grow flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                      <div className="w-full h-0.5 bg-blue-600 absolute top-1/2 left-0 animate-bounce blur-[1px] z-10" />
                      <p className="text-xs font-mono text-blue-600 animate-pulse mb-1">Scanning Smart Contract Ledger...</p>
                      <p className="text-[9px] font-mono text-slate-500">Hash: 0x9f82...23ab</p>
                    </div>
                  )}

                  {solsticeStatus === 'verified' && (
                    <div className="flex-grow flex flex-col justify-center py-2.5">
                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                          <Check size={16} />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-[11px] font-bold text-slate-900 truncate">{solsticeAsset}</h5>
                          <p className="text-[9px] font-mono text-emerald-600 mt-0.5">Verified Genuine Owner • Block #1829023</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSolsticeStatus('idle')}
                        className="text-[9px] font-mono text-slate-500 hover:text-blue-600 transition-colors text-center mt-3"
                      >
                        Reset Scanner
                      </button>
                    </div>
                  )}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {projects[3].shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[3].tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between items-center border-t border-slate-200 pt-6 mt-2">
                <button
                  onClick={() => setSelectedProject(projects[3])}
                  className="text-xs font-mono text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest flex items-center gap-1 cursor-pointer"
                >
                  Deep Technical Overview &rarr;
                </button>
                <div className="flex gap-3">
                  <a href={projects[3].github} target="_blank" className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-blue-600 transition-colors">
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
            >
              {/* Header controls (Hidden on print) */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  <span className="ml-2 text-sm text-slate-600 font-mono">{selectedProject.id}_blueprint.md</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full bg-slate-100 border border-slate-200 hover:border-red-300 text-slate-600 hover:text-red-500 transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Resume Sheet */}
              <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto bg-white text-slate-900 print:max-h-full print:p-0 font-sans">
                
                {/* Recruiter Custom Header (Print only if recruiterData is present) */}
                {selectedProject && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-800 print:hidden">
                    <p className="font-semibold text-sm mb-1">Technical Blueprint for {selectedProject.title}</p>
                    <p>This is the detailed architecture overview of {selectedProject.title}.</p>
                  </div>
                )}

                {/* Main Header */}
                <div className="border-b-2 border-blue-600 pb-6 mb-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
                        {selectedProject.title}
                      </h1>
                      <p className="text-lg font-medium text-blue-600 tracking-wide mt-1">
                        {selectedProject.subtitle}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-600 font-mono">
                      {selectedProject.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <p className="text-slate-500 uppercase">{metric.label}</p>
                          <p className="font-bold text-slate-900">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold tracking-wider text-blue-800 uppercase mb-2 font-serif border-b border-slate-200 pb-1">
                    Technical Overview
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProject.longDesc}
                  </p>
                </div>

                {/* Architecture Timeline */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold tracking-wider text-blue-800 uppercase mb-2 font-serif border-b border-slate-200 pb-1">
                    System Pipeline Flow
                  </h2>
                  <div className="space-y-3 font-mono text-xs pl-2 border-l border-blue-200">
                    {selectedProject.architecture.map((step, idx) => (
                      <div key={idx} className="relative pl-6">
                        <div className="absolute left-[-13px] top-1 w-2 h-2 rounded-full bg-blue-600 border border-white"></div>
                        <span className="text-slate-500 mr-1.5">0{idx + 1}.</span>
                        <span className="text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};