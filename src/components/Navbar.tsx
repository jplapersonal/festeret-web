import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-[#0b1220] rounded-[14px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight text-white font-mono">
                festeret<span className="text-amber-400">.ai</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">
                Copiloto IA
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
              Para Comparsas, Filàs & Peñas
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#como-funciona" className="hover:text-amber-300 transition-colors">
            ¿Cómo funciona?
          </a>
          <a href="#simulador" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Simulador en Vivo</span>
          </a>
          <a href="#ventajas" className="hover:text-amber-300 transition-colors">
            Festeret vs Apps
          </a>
          <a href="#precios" className="hover:text-amber-300 transition-colors">
            Precios
          </a>
          <a href="#faq" className="hover:text-amber-300 transition-colors">
            Preguntas
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Probar Demo Gratis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1322] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in">
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-bold text-sm py-2"
          >
            ¿Cómo funciona?
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-amber-300 font-bold text-sm py-2 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Simulador en Vivo</span>
          </a>
          <a
            href="#ventajas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-bold text-sm py-2"
          >
            Festeret vs Apps
          </a>
          <a
            href="#precios"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-bold text-sm py-2"
          >
            Precios
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-bold text-sm py-2"
          >
            Preguntas
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemoModal();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Probar Demo Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
