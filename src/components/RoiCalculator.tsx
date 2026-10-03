import React, { useState } from 'react';
import { Clock, MessageSquare, Zap, Users, Sparkles } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [festerosCount, setFesterosCount] = useState<number>(25);

  // Estimations
  const hoursSaved = Math.round(festerosCount * 5.5);
  const questionsAvoided = Math.round(festerosCount * 45);
  const annualCost = festerosCount <= 35 ? 99 : 390;
  const costPerFestero = (annualCost / festerosCount).toFixed(1);

  return (
    <section className="py-20 bg-[#070b14] relative border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#0e172a] via-[#121c33] to-[#0a1020] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-black uppercase tracking-wider">
              <Zap className="w-3 h-3 text-emerald-400" />
              <span>Calculadora de Ahorro para Directivas</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              ¿Cuánto tiempo pierde tu Junta Directiva?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Desliza para indicar el número de componentes en tu escuadra, peña o comparsa:
            </p>
          </div>

          {/* Interactive Slider */}
          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex items-center justify-between font-black text-white text-base sm:text-xl">
              <span className="flex items-center gap-2 text-slate-300 text-sm">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Componentes / Socios:</span>
              </span>
              <span className="px-4 py-1.5 rounded-xl bg-amber-400 text-slate-950 text-xl font-mono shadow-md">
                {festerosCount} festeros
              </span>
            </div>

            <input
              type="range"
              min="10"
              max="250"
              step="5"
              value={festerosCount}
              onChange={(e) => setFesterosCount(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />

            <div className="flex justify-between text-[11px] font-bold text-slate-500">
              <span>10 (Escuadra pequeña)</span>
              <span>50 (Filà media)</span>
              <span>250+ (Gran Comparsa)</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs font-bold mb-1">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Tiempo Ahorrado al Año</span>
              </div>
              <p className="text-3xl font-black text-white font-mono">~{hoursSaved} h</p>
              <p className="text-[11px] text-slate-400">en mensajes, llamadas y listas</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs font-bold mb-1">
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>Preguntas Resueltas</span>
              </div>
              <p className="text-3xl font-black text-sky-300 font-mono">~{questionsAvoided}</p>
              <p className="text-[11px] text-slate-400">contestadas 24/7 en segundos</p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-emerald-300 text-xs font-bold mb-1">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Coste por Festero</span>
              </div>
              <p className="text-3xl font-black text-emerald-400 font-mono">{costPerFestero} € <span className="text-xs font-normal text-emerald-300">/año</span></p>
              <p className="text-[11px] text-emerald-200/80">¡Menos de 1 cubata en fiestas!</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
