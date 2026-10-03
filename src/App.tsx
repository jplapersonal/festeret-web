import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Problem } from './components/Problem';
import { Agent } from './components/Agent';
import { Network } from './components/Network';
import { HowItWorks } from './components/HowItWorks';
import { Simulator } from './components/Simulator';
import { Capabilities } from './components/Capabilities';
import { Manifesto } from './components/Manifesto';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const open = () => setDemoOpen(true);

  return (
    <>
      <Navbar onOpenDemo={open} />
      <main>
        <Hero onOpenDemo={open} />
        <Marquee />
        <Problem />
        <Agent />
        <HowItWorks />
        <Simulator />
        <Capabilities />
        <Manifesto />
        <Network />
        <Pricing onOpenDemo={open} />
        <Faq />
        <FinalCta onOpenDemo={open} />
      </main>
      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}

export default App;
