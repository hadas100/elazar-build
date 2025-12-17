import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import { MessageCircle } from 'lucide-react';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary-200 selection:text-primary-900">
      <Header onLogoClick={handleBackToHome} />
      
      <main>
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onBack={handleBackToHome} />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio onProjectClick={handleProjectClick} />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/972501234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
};

export default App;
