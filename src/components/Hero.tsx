import React from 'react';
import { MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Zap, ArrowDown } from 'lucide-react';
import paradeHeroImg from '../assets/parade-hero.jpg';

interface HeroProps {
  onOpenDemo: () => void;
  onTrySimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onTrySimulator }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Cinematic Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={paradeHeroImg} 
          alt="Desfile de Moros y Cristianos en ambiente festivo nocturno" 
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter saturate-[1.2] brightness-90"
        />
        {/* Multilayered Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/90 via-[#050811]/85 to-[#050811]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/15 via-transparent to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Festive Badges / Tagline */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-semibold mb-8 shadow-xl shadow-teal-950/50 backdrop-blur-md animate-float">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-amber-300 font-bold">🎺 El Copiloto IA de la Fiesta</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Moros y Cristianos · Fallas · Peñas · Hermandades</span>
        </div>

        {/* Grand Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6 font-sans">
          La pasión de tus Fiestas.{' '}
          <span className="block mt-2 font-extrabold bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
            La IA en el bolsillo de cada festero.
          </span>
        </h1>

        {/* Emotionally Grounded Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          Se acabaron los <span className="text-amber-300 font-semibold underline decoration-amber-400/40">500 mensajes repetitivos</span> en el grupo de WhatsApp preguntando horarios, telas de chilaba, cenas o alergias. 
          <strong className="text-white font-semibold"> festeret.ai</strong> responde al instante con los datos oficiales de tu comparsa. 
          <span className="block mt-1.5 text-teal-300 font-medium">✨ Cero apps para descargar. Cero contraseñas. 100% en WhatsApp y Telegram.</span>
        </p>

        {/* Dual Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onTrySimulator}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-slate-950 bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 hover:from-teal-200 hover:to-amber-200 transition-all duration-300 shadow-2xl shadow-teal-500/30 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>Probar Simulador en Vivo</span>
            <ArrowDown className="w-4 h-4 text-slate-950 animate-bounce" />
          </button>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-base text-white bg-slate-900/90 hover:bg-slate-800/90 border border-white/15 hover:border-teal-400/40 transition-all duration-300 shadow-xl backdrop-blur-xl flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-teal-400" />
            <span>Pedir Demo para mi Comparsa</span>
          </button>
        </div>

        {/* Trust Badges / Key Selling Points */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/[0.08]">
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span>0% descargas de app</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Responde en &lt; 2 segundos</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Datos 100% oficiales</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <span className="text-base">🥘</span>
            <span>Listas de cenas automáticas</span>
          </div>
        </div>

      </div>
    </section>
  );
};
