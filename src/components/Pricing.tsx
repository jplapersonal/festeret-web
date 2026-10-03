import { Check, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import fireworksCastleImg from '../assets/fireworks-castle.jpg';

interface PricingProps {
  onOpenDemo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  return (
    <section id="precios" className="py-24 relative bg-[#050811] overflow-hidden">
      
      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-500/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span>💶</span> Tarifas Transparentes
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Una inversión mínima.{' '}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
              Tranquilidad todo el año.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Sin permanencias ocultas, sin costes por mensaje ni sorpresas. Tarifa plana anual por comparsa o escuadra.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 items-stretch">
          
          {/* Plan Escuadra */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Escuadra o Filà
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Plan Escuadra</h3>
              <p className="text-xs text-slate-400 mb-6">
                Para escuadras especiales, grupos reducidos o comisiones pequeñas.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">99 €</span>
                <span className="text-sm text-slate-400">/ año</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Hasta 25 miembros activos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Bot IA en WhatsApp & Telegram</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Gestión de cenas y alergias de escuadra</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Subida de hasta 5 PDFs / actas</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="mt-8 w-full py-3 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-white/10 cursor-pointer"
            >
              Pedir para mi Escuadra
            </button>
          </div>

          {/* Plan Comparsa (Featured / Most Popular) */}
          <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/90 to-teal-950/40 border-2 border-teal-400/50 relative backdrop-blur-2xl shadow-2xl shadow-teal-500/15 flex flex-col justify-between transform md:-translate-y-2">
            
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-400 to-amber-300 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Opción Más Elegida</span>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-2">
                Comparsa / Filà Completa
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Plan Comparsa</h3>
              <p className="text-xs text-slate-300 mb-6">
                Para comparsas completas que quieren centralizar toda la fiesta sin caos.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-white">390 €</span>
                <span className="text-sm text-slate-400">/ año</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-teal-500/20 text-xs text-slate-200">
                <div className="flex items-center gap-2.5 font-medium text-white">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Socios ilimitados</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Marca blanca total (tu escudo y nombre)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Cerebro RAG ilimitado (todas tus actas históricas)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Módulo de Cenas, Mesas y Alergias</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Puesta en marcha asistida en &lt; 24 horas</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="mt-8 w-full py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 hover:from-teal-200 hover:to-amber-200 transition-all shadow-lg shadow-teal-500/25 cursor-pointer"
            >
              Empezar Ahora con mi Comparsa
            </button>
          </div>

          {/* Plan Federación / Asociación */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Federación / Junta Central
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Plan Federación</h3>
              <p className="text-xs text-slate-400 mb-6">
                Para Societats de Festers, Juntas de Moros y Cristianos o Federaciones de Peñas.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black text-white">A medida</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Múltiples comparsas coordinadas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Horarios de actos públicos y revista digital</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Soporte dedicado y SLA prioritario</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="mt-8 w-full py-3 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-white/10 cursor-pointer"
            >
              Contactar para Federación
            </button>
          </div>

        </div>

        {/* Grand Emotional Climax Card with Castle Fireworks Background */}
        <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 shadow-2xl">
          <img 
            src={fireworksCastleImg} 
            alt="Castillo de fuegos artificiales de fiestas patronales" 
            className="w-full h-80 sm:h-96 object-cover object-center filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050811]/95 via-[#050811]/70 to-[#050811]/95 flex items-center justify-center p-6 sm:p-12 text-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-4 border border-amber-400/30">
                <span>🏰</span> Puesta en marcha en menos de 24h
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 leading-tight font-sans">
                ¿Quieres que te preparemos una demo con los datos de tu comparsa?
              </h3>
              <p className="text-slate-200 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Sin compromiso. Envíanos un WhatsApp, te configuramos un bot de prueba con tu escudo y tus horarios para que la directiva lo pruebe gratis.
              </p>
              <button
                onClick={onOpenDemo}
                className="px-8 py-4 rounded-2xl font-bold text-slate-950 bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 hover:from-teal-200 hover:to-amber-200 transition-all shadow-xl hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer text-sm sm:text-base"
              >
                <MessageSquare className="w-5 h-5 text-slate-950" />
                <span>Pedir Demo Gratuita por WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
