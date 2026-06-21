import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
// import { RecruiterHub } from './components/RecruiterHub';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [recruiterData, setRecruiterData] = useState<{ name: string; company: string; role: string } | null>(null);

  const handleRecruiterSubmit = (data: { name: string; company: string; role: string } | null) => {
    setRecruiterData(data);
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-slate-900 overflow-x-hidden">
      {/* Sticky header */}
      <Header onOpenResume={handleOpenResume} recruiterData={recruiterData} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* HERO Section */}
        <Hero onOpenResume={handleOpenResume} recruiterData={recruiterData} />

        {/* ABOUT Section */}
        <About onOpenResume={handleOpenResume} recruiterData={recruiterData} />

        {/* RECRUITER HUB Section */}
        {/* <RecruiterHub onRecruiterSubmit={handleRecruiterSubmit} onOpenResume={handleOpenResume} /> */}

        {/* SKILLS Section */}
        <Skills />

        {/* PROJECTS Section */}
        <Projects />

        {/* ACHIEVEMENTS Section */}
        <Achievements />

        {/* EDUCATION Section */}
        <Education />

        {/* CONTACT Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
        recruiterData={recruiterData}
      />
    </div>
  );
}

export default App;
