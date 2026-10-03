import React from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenDemoModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemoModal }) => {
  const plans = [
    {
      name: 'Plan Escuadra / Peña',
      subtitle: 'Para grupos de 10 a 35 componentes',
      price: '99',
      period: 'al año (tarifa plana)',
      highlight: 'Ideal para empezar',
      featured: false,
      features: [
        'Bot de IA en Telegram / WhatsApp',
        'Hasta 35 festeros verificados',
        'Cerebro con estatutos y normativas de indumentaria',
        'Gestión de asistencia a cenas, intolerancias y niños',
        'Control de cuotas y validación de recibos',
        'Portal Web PWA ligero sin contraseñas',
        'Soporte técnico directo por WhatsApp'
      ],
      ctaText: 'Probar 14 Días Gratis'
    },
    {
      name: 'Plan Comparsa / Filà',
      subtitle: 'Para comparsas completas (50 a 500 socios)',
      price: '390',
      period: 'al año (tarifa plana)',
      highlight: 'Más Popular · Todo Incluido',
      featured: true,
      features: [
        'Bot de IA con Marca Blanca personalizada',
        'Festeros y peñas ilimitadas',
        'Asimilación de actas históricas y normativas en PDF',
        'Sub-paneles de control para cada representante de peña',
        'Auditoría y desglose de las 10 remesas bancarias',
        'Canal oficial con alertas fijadas automáticas',
        'Memoria individual confidencial por festero',
        'Soporte prioritario y puesta en marcha en 24h'
      ],
      ctaText: 'Empezar con mi Comparsa'
    },
    {
      name: 'Junta Central / Federación',
      subtitle: 'Para Juntas Locales y Federaciones de Fiestas',
      price: 'Consultar',
      period: 'según número de comparsas',
      highlight: 'Solución Global',
      featured: false,
      features: [
        'Múltiples bots para todas las comparsas del pueblo',
        'Integración con calendarios oficiales de festejos',
        'Canal institucional unificado para todo el municipio',
        'Panel de administración y estadísticas globales',
        'Despliegue y formación presencial a directivas',
        'Acuerdo de nivel de servicio (SLA) dedicado'
      ],
      ctaText: 'Hablar con un Asesor'
    }
  ];

  return (
    <section id="precios" className="py-20 md:py-28 bg-[#090d16] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Precios Transparentes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tarifas planas y justas. <br />
            <span className="text-amber-400">Sin sorpresas ni cobros por socio.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A diferencia de otras plataformas que te cobran por cada socio individual, con Festeret pagas una tarifa plana anual que cabe de sobra en el presupuesto de cualquier peña.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                p.featured
                  ? 'bg-gradient-to-b from-[#15233c] to-[#0c1424] border-2 border-amber-400 shadow-2xl shadow-amber-500/15 lg:-translate-y-2'
                  : 'bg-[#0f172a]/90 border border-white/10 hover:border-white/20'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-widest shadow-md">
                  {p.highlight}
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-black text-white">{p.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{p.subtitle}</p>
                </div>

                <div className="pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    {p.price !== 'Consultar' && <span className="text-4xl font-black text-white font-mono">{p.price} €</span>}
                    {p.price === 'Consultar' && <span className="text-3xl font-black text-white">{p.price}</span>}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{p.period}</p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5">
                <button
                  onClick={onOpenDemoModal}
                  className={`w-full py-3.5 rounded-full font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    p.featured
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30'
                  }`}
                >
                  <span>{p.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Prueba 14 días sin compromiso. Si no te convence, no pagas nada.</span>
        </div>

      </div>
    </section>
  );
};
