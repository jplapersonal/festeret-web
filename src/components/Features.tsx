import { BookOpen, Shield, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import dinnerCelebrationImg from '../assets/dinner-celebration.jpg';

export const Features: React.FC = () => {
  return (
    <section id="superpoderes" className="py-24 relative bg-[#070c18] overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Superpoderes para tu Comparsa
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Todo lo que una directiva sueña.{' '}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
              En piloto automático.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Diseñado por y para festeros. Resuelve los 4 mayores dolores de cabeza de gestionar una escuadra, comparsa o filà.
          </p>
        </div>

        {/* Feature 1 with Real Festive Image Storytelling */}
        <div className="mb-20 rounded-3xl bg-slate-900/60 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold">
                <span>🥘</span> Cenas, Alergias y Eventos
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Que la directiva disfrute de la cena igual que cualquier festero.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Olvídate de ir persiguiendo a la gente por WhatsApp para saber si vienen al Mig Any o a la Cena de Gala. 
                Festeret gestiona las confirmaciones, detecta celíacos o intolerancias al instante y genera la lista exacta para el restaurante o catering.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Control automático de celíacos, vegetarianos e intolerancias</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Exportación directa para el restaurante en 1 clic</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Recordatorios de plazo límite antes del cierre de mesas</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[360px] overflow-hidden">
              <img 
                src={dinnerCelebrationImg} 
                alt="Brindis y cena de comparsa tradicional" 
                className="w-full h-full object-cover object-center filter saturate-[1.1] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-slate-900/85 border border-white/10 backdrop-blur-md text-xs text-slate-200 shadow-xl">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Cena de Mig Any · 142 confirmados</span>
                </div>
                <p className="text-slate-300 text-[11px]">
                  "6 menús celíacos, 4 vegetarianos y lista de mesas organizada sin una sola llamada."
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Grid Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 2: Cerebro RAG */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-teal-500/30 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-300 mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">El Cerebro Histórico (RAG)</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Sube tus actas en PDF, normativas de vestimenta, estatutos o partituras. La IA las memoriza y responde cualquier duda al momento con rigor y exactitud.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-semibold text-teal-300 flex items-center gap-2">
              <span>📚 Lee PDFs, Word y Actas históricas</span>
            </div>
          </div>

          {/* Feature 3: Horarios y Desfiles */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-300 mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Desfiles y Dianas en Tiempo Real</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Orden de formación de escuadras, puntos de encuentro de la banda de música, itinerarios y avisos de última hora ante retrasos o lluvia.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-semibold text-amber-300 flex items-center gap-2">
              <span>🎺 Coordinación total con la banda</span>
            </div>
          </div>

          {/* Feature 4: Marca Blanca */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-300 mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Tu Escudo y Personalidad</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Marca blanca total. El bot lleva el nombre, escudo y tono propio de tu comparsa (*"¡Che, festers!"*, *"Salam aleikum, comparsistas"*).
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-semibold text-emerald-300 flex items-center gap-2">
              <span>🛡️ 100% Personalizado y privado</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
