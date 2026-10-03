import React from 'react';
import { XCircle, CheckCircle2, Smartphone, Zap, Sparkles, Bot } from 'lucide-react';

export const Comparison: React.FC = () => {
  const comparisonPoints = [
    {
      feature: 'Acceso para el festero',
      traditional: 'Obligar a 100 festeros a descargarse una app de la App Store / Google Play.',
      festeret: 'Cero descargas. Hablan directamente por WhatsApp o Telegram que ya tienen abierto.',
      isMajor: true
    },
    {
      feature: 'Contraseñas y registros',
      traditional: 'Recordar emails, contraseñas olvidadas y códigos que nadie encuentra.',
      festeret: '1 clic de verificación por móvil (SMS/Contacto) y listo para siempre.',
      isMajor: false
    },
    {
      feature: 'Cómo se resuelven las dudas',
      traditional: 'Buscar manualmente entre menús, noticias y PDFs de 20 páginas.',
      festeret: 'Preguntar en lenguaje natural: "¿A qué hora salimos?" y recibir el dato exacto.',
      isMajor: true
    },
    {
      feature: 'Inscripción a cenas y eventos',
      traditional: 'Rellenar formularios en la app o cadenas infinitas de mensajes en el grupo.',
      festeret: '"Apúntame con mi mujer y mi hijo celíaco" -> El bot registra plaza y menú en la base de datos.',
      isMajor: true
    },
    {
      feature: 'Cuotas y cobros bancarios',
      traditional: 'Tesorero persiguiendo gente por privado y pasando vergüenza para cobrar.',
      festeret: 'Autoservicio confidencial: el festero consulta su saldo y valida sus remesas con 1 check.',
      isMajor: false
    },
    {
      feature: 'Personalización e identidad',
      traditional: 'App genérica con el logo de una empresa externa.',
      festeret: 'Tu propio bot con el alma, apodos y jerga de tu comparsa (Marca Blanca).',
      isMajor: false
    }
  ];

  return (
    <section id="ventajas" className="py-20 md:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300 text-xs font-black uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>El Cambio de Paradigma</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ¿Por qué una App tradicional fracasa <br />
            <span className="text-amber-400">y un Copiloto IA triunfa?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            La fiesta no ocurre dentro de un software corporativo. Ocurre donde la gente ya está hablando: en sus canales de mensajería favoritos.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: El Modelo Tradicional */}
          <div className="rounded-3xl bg-[#0f172a]/60 border border-rose-500/20 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-400">
                  Modelo Antiguo (Apps Festeras)
                </span>
                <h3 className="text-xl font-black text-slate-200">
                  La App Tradicional
                </h3>
              </div>
              <span className="p-2.5 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <Smartphone className="w-5 h-5" />
              </span>
            </div>

            <div className="space-y-4">
              {comparisonPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-300 font-bold mb-0.5">{item.feature}:</strong>
                    <span>{item.traditional}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 text-center">
              <span className="text-xs font-bold text-rose-400/80">
                ❌ 80% de abandono por pereza de instalación y contraseñas.
              </span>
            </div>
          </div>

          {/* Card 2: El Modelo Festeret.ai */}
          <div className="rounded-3xl bg-gradient-to-b from-[#131f36] to-[#0c1424] border-2 border-amber-400/40 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl shadow-amber-500/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                  Nueva Generación con IA
                </span>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span>festeret.ai</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </h3>
              </div>
              <span className="p-2.5 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Bot className="w-5 h-5 text-amber-400" />
              </span>
            </div>

            <div className="space-y-4 relative z-10">
              {comparisonPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-amber-300 font-bold mb-0.5">{item.feature}:</strong>
                    <span className="text-slate-200">{item.festeret}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 text-center relative z-10">
              <span className="text-xs font-black text-emerald-400 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% de adopción inmediata desde el día uno.</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
