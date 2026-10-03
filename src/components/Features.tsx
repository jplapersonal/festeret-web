import React from 'react';
import { Brain, Utensils, CreditCard, Palette, Sparkles, ArrowRight } from 'lucide-react';

interface FeaturesProps {
  onOpenDemoModal: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenDemoModal }) => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-amber-400" />,
      tag: 'Conocimiento Institucional',
      title: 'Cerebro de Comparsa (Sabe lo que nadie sabe)',
      description: 'Sube las actas de secretaría en PDF, el reglamento de indumentaria y las fechas clave. El Festeret responde dudas exactas sobre qué traje ponerse, horarios o acuerdos de junta en segundos.',
      highlight: 'Soporta PDFs, actas y normativas'
    },
    {
      icon: <Utensils className="w-6 h-6 text-emerald-400" />,
      tag: 'Gestión de Eventos',
      title: 'Cenas y Fiestas sin Listas Caóticas',
      description: 'Olvídate de cadenas de WhatsApp donde se pierden los mensajes. El festero le dice al bot que va a la cena con su pareja y su hijo celíaco, y queda registrado al instante para el restaurante.',
      highlight: 'Control de celíacos, niños e invitados'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-sky-400" />,
      tag: 'Tesorería Festera',
      title: 'Control Amable de Cuotas y Remesas',
      description: 'Cada festero puede consultar su estado de pagos de forma 100% privada y validar los recibos emitidos por el banco con un simple botón en el chat, sin que el tesorero pase vergüenza persiguiendo a nadie.',
      highlight: 'Autoservicio con check verde directo'
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      tag: 'Identidad Propia',
      title: 'Marca Blanca con el Alma de tu Colectivo',
      description: 'Tu bot llevará el nombre y foto que elijas ("El Festeret de Taifas", "El Maseret", "El Chano"). Además, habla con la simpatía, apodos y jerga propia de tu comparsa.',
      highlight: '100% Personalizado para tu fiesta'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#090d16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Superpotencias de la IA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Todo lo que tu comparsa necesita. <br />
            <span className="text-amber-400">Sin complicaciones técnicas.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Diseñado específicamente para el ecosistema de Moros y Cristianos, Fallas, Peñas y Cofradías.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0f172a]/80 hover:bg-[#131e36] border border-white/10 hover:border-amber-400/40 transition-all duration-300 group space-y-5 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-3.5 rounded-2xl bg-[#1e293b] group-hover:scale-110 transition-transform shadow-inner">
                    {f.icon}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {f.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-amber-400/90">
                <span>✨ {f.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#131f36] to-sky-500/10 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-black text-white">¿Quieres ver cómo funcionaría con las actas de tu comparsa?</h4>
            <p className="text-xs sm:text-sm text-slate-400">Te montamos una demo personalizada en 24h sin compromiso.</p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
          >
            <span>Pedir Demo Personalizada</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
