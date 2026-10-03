import { useState } from 'react';
import { Calculator, Clock, MessageSquare, HeartHandshake } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [members, setMembers] = useState(120);

  // Estimations
  const messagesPerYear = members * 18;
  const hoursSaved = Math.round(members * 0.45);

  return (
    <section className="py-24 relative bg-[#070c18] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-amber-300" />
            Calculadora de Paz Mental
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            ¿Cuánto tiempo ahorrará tu directiva?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Mueve el selector según el número de socios o comparsistas y descubre el impacto inmediato en tranquilidad.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/70 border border-white/10 shadow-2xl backdrop-blur-xl">
          
          {/* Slider Control */}
          <div className="mb-12 text-center">
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
              Número de socios / festeros en tu comparsa o filà:
            </label>
            <div className="text-5xl sm:text-6xl font-black text-white mb-6 font-sans">
              <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
                {members}
              </span>{' '}
              <span className="text-2xl sm:text-3xl text-slate-400 font-medium">festeros</span>
            </div>
            
            <input
              type="range"
              min="15"
              max="500"
              step="5"
              value={members}
              onChange={(e) => setMembers(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400 hover:accent-teal-300 transition-all"
            />
            
            <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
              <span>Escuadra (15)</span>
              <span>Comparsa Media (120)</span>
              <span>Gran Comparsa (500+)</span>
            </div>
          </div>

          {/* Real-time Calculation Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/5 text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-white mb-1">
                ~{hoursSaved}h
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Horas de llamadas y gestiones ahorradas al año
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/5 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 mx-auto mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-white mb-1">
                ~{messagesPerYear.toLocaleString()}
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Mensajes y dudas repetitivas respondidas por la IA
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/5 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 mx-auto mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-white mb-1">
                0 líos
              </div>
              <p className="text-xs text-slate-300 font-medium">
                En listas de cenas, alergias y cobros de cuotas
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
