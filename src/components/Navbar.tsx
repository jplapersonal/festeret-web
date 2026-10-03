import React, { useState } from 'react';
import { Sparkles, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050811]/85 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-teal-500 via-emerald-400 to-amber-300 p-[1px] shadow-lg shadow-teal-500/20">
              <div className="w-full h-full bg-[#090e1c] rounded-[11px] flex items-center justify-center text-xl">
                <span>🎺</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white font-sans">festeret<span className="text-teal-400">.ai</span></span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  IA Festera
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">El Copiloto IA de Comparsas y Fiestas</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#como-funciona" className="hover:text-teal-300 transition-colors">Cómo funciona</a>
            <a href="#demo" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
              <span>Simulador</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </a>
            <a href="#comparativa" className="hover:text-teal-300 transition-colors">¿Por qué no una App?</a>
            <a href="#superpoderes" className="hover:text-teal-300 transition-colors">Superpoderes</a>
            <a href="#precios" className="hover:text-teal-300 transition-colors">Precios</a>
            <a href="#faq" className="hover:text-teal-300 transition-colors">Dudas</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={onOpenDemo}
              className="relative group px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-900 bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-300 hover:from-teal-300 hover:to-amber-200 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Probar Demo WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070c18] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <a 
            href="#como-funciona" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Cómo funciona
          </a>
          <a 
            href="#demo" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-teal-300 hover:bg-slate-800"
          >
            Probar Simulador
          </a>
          <a 
            href="#comparativa" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            ¿Por qué no una App?
          </a>
          <a 
            href="#superpoderes" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Superpoderes
          </a>
          <a 
            href="#precios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Precios
          </a>
          <div className="pt-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full py-3 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-teal-400 to-amber-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Probar Demo Gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
