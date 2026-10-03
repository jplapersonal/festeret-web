import { Check, X, Smartphone, MessageSquare } from 'lucide-react';

export const Comparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Acceso y Fricción',
      traditional: 'Descargar app de 150MB de la App Store / Play Store',
      festeret: '0 descargas. Funciona directamente en WhatsApp y Telegram',
      highlight: true
    },
    {
      feature: 'Adopción real de socios',
      traditional: '~20% (la mayoría no la instala o la borra tras fiestas)',
      festeret: '100% (todos los socios ya tienen WhatsApp en su móvil)',
      highlight: true
    },
    {
      feature: 'Recordar contraseñas',
      traditional: 'Obligatorio usuario y contraseña (bloqueos continuos)',
      festeret: 'Cero contraseñas. Autenticación por número de móvil',
      highlight: false
    },
    {
      feature: 'Preguntas y dudas complejas',
      traditional: 'Navegar por menús estáticos, PDFs largos y pestañas',
      festeret: 'Escribes en lenguaje natural y la IA te responde en 2 segundos',
      highlight: true
    },
    {
      feature: 'Gestión de cenas y alergias',
      traditional: 'Formularios rígidos que casi nadie rellena a tiempo',
      festeret: 'Conversacional: "Apúntame con menú celíaco" y listo',
      highlight: false
    },
    {
      feature: 'Coste y mantenimiento',
      traditional: 'Desarrollos a medida de 4.000€ a 12.000€ + hosting',
      festeret: 'Tarifa plana anual accesible para cualquier comparsa',
      highlight: true
    }
  ];

  return (
    <section id="comparativa" className="py-24 relative bg-[#050811] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span>⚡</span> El Dilema de la Directiva
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            ¿Por qué crear otra App móvil{' '}
            <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
              ya no tiene sentido?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Las aplicaciones tradicionales exigen descargas, contraseñas y terminan abandonadas. 
            El futuro de la comunicación festera vive donde ya están tus festeros.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/60 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-slate-950/80 p-5 sm:p-6 items-center">
            <div className="md:col-span-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Característica
            </div>
            <div className="md:col-span-4 text-xs font-bold uppercase tracking-widest text-rose-400 flex items-center gap-1.5 mt-2 md:mt-0">
              <Smartphone className="w-4 h-4" />
              App Tradicional / Menús
            </div>
            <div className="md:col-span-4 text-xs font-bold uppercase tracking-widest text-teal-300 flex items-center gap-1.5 mt-2 md:mt-0">
              <MessageSquare className="w-4 h-4" />
              festeret.ai (Copiloto IA)
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {comparisonRows.map((row, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-center transition-colors ${
                  row.highlight ? 'bg-teal-950/15' : 'hover:bg-slate-800/30'
                }`}
              >
                {/* Feature Name */}
                <div className="md:col-span-4 font-bold text-white text-sm mb-2 md:mb-0">
                  {row.feature}
                </div>

                {/* Traditional App */}
                <div className="md:col-span-4 text-slate-400 text-xs sm:text-sm flex items-start gap-2.5 mb-2 md:mb-0 pr-4">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>

                {/* Festeret.ai */}
                <div className="md:col-span-4 text-teal-200 text-xs sm:text-sm font-medium flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{row.festeret}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
