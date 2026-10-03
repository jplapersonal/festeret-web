import React from 'react';
import { Bot, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#070b14] via-[#0c1424] to-[#070b14]">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Background subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-inner text-xs font-semibold text-amber-300">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span>El 1er Copiloto IA de la Fiesta Valenciana · Sin Apps ni Descargas</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Tu comparsa no necesita otra app que nadie se instala. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Necesita un Copiloto IA.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            <strong className="text-white font-bold">El Festeret</strong> vive directamente en el <span className="text-emerald-400 font-bold">WhatsApp</span> y <span className="text-sky-400 font-bold">Telegram</span> de tus festeros. Resuelve dudas de actas y trajes, apunta a cenas con alergias y valida cuotas en lenguaje natural.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#simulador"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Probar Simulador en Vivo</span>
          </a>

          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm flex items-center justify-center gap-2 backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
          >
            <Bot className="w-4 h-4 text-amber-400" />
            <span>Solicitar Demo para mi Comparsa</span>
          </button>
        </div>

        {/* Key value proposition pills */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-400 border-t border-white/5 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>0% Fricción (0 Apps que instalar)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% en WhatsApp & Telegram</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Listo y configurado en 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>14 Días de Prueba Gratis</span>
          </div>
        </div>

      </div>
    </section>
  );
};
