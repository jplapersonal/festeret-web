import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChatSimulator } from './components/ChatSimulator';
import { Comparison } from './components/Comparison';
import { Features } from './components/Features';
import { RoiCalculator } from './components/RoiCalculator';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const scrollToSimulator = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-teal-400 selection:text-slate-950 font-sans antialiased">
      {/* Top Navbar */}
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Hero Section with Cinematic Parade Background */}
      <Hero 
        onOpenDemo={() => setDemoModalOpen(true)} 
        onTrySimulator={scrollToSimulator}
      />

      {/* Live Interactive WhatsApp Simulator */}
      <ChatSimulator />

      {/* Traditional App vs festeret.ai Copilot Comparison */}
      <Comparison />

      {/* Key Superpowers with Authentic Dinner & Heritage Storytelling */}
      <Features />

      {/* ROI & Peace of Mind Calculator */}
      <RoiCalculator />

      {/* Transparent Pricing Plans & Castle Fireworks Climax */}
      <Pricing onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Footer */}
      <Footer />

      {/* Lead Generation & WhatsApp Demo Request Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}

export default App;
