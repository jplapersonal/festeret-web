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

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
      {/* Top Navbar */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Live Chat Simulator */}
      <ChatSimulator />

      {/* Why No-App / Comparison with traditional apps */}
      <Comparison />

      {/* Key Superpowers & Features */}
      <Features onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* ROI & Time Saved Calculator */}
      <RoiCalculator />

      {/* Pricing Plans */}
      <Pricing onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Footer */}
      <Footer />

      {/* Demo Request Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}

export default App;
