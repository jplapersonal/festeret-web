import { useEffect, useState } from 'react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`font-display text-[1.65rem] font-semibold italic tracking-tight ${light ? 'text-paper' : 'text-ink'}`}>
      festeret<span className="text-oro">.ai</span>
    </span>
  );
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = `text-sm font-medium transition-colors ${scrolled ? 'text-ink/70 hover:text-ink' : 'text-paper/80 hover:text-paper'}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="#top" aria-label="festeret.ai inicio">
          <Logo light={!scrolled} />
        </a>
        <nav className="hidden md:flex items-center gap-9">
          <a href="#como-funciona" className={link}>Cómo funciona</a>
          <a href="#pruebalo" className={link}>Pruébalo</a>
          <a href="#precios" className={link}>Precios</a>
          <a href="#preguntas" className={link}>Preguntas</a>
        </nav>
        <button
          onClick={onOpenDemo}
          className="rounded-full bg-grana hover:bg-grana-2 text-paper text-sm font-semibold px-5 py-2.5 transition-colors cursor-pointer"
        >
          Pide tu Festeret
        </button>
      </div>
    </header>
  );
}
