interface PricingProps {
  onOpenDemo: () => void;
}

const PLANS = [
  {
    name: 'Escuadra',
    price: '99 €',
    per: 'al año',
    desc: 'Para una escuadra, una filà pequeña o una comisión.',
    items: ['Hasta 25 festeros', 'WhatsApp o Telegram', 'Comidas, cenas y alergias', 'Hasta 5 documentos'],
    featured: false,
    cta: 'La quiero para mi escuadra',
  },
  {
    name: 'Comparsa',
    price: '390 €',
    per: 'al año',
    desc: 'Para toda la comparsa, filà o falla. Sin límite de festeros.',
    items: ['Festeros ilimitados', 'Vuestro nombre, escudo e idioma', 'Todas vuestras actas y documentos', 'Cuotas y avisos a todos', 'En marcha en 24 horas'],
    featured: true,
    cta: 'Pide tu Festeret',
  },
  {
    name: 'Junta / Federación',
    price: 'Hablemos',
    per: '',
    desc: 'Para Juntas Festeras, Societats de Festers o federaciones.',
    items: ['Varias comparsas a la vez', 'Programa oficial y actos públicos', 'Soporte prioritario'],
    featured: false,
    cta: 'Contactar',
  },
];

export function Pricing({ onOpenDemo }: PricingProps) {
  return (
    <section id="precios" className="grain relative bg-paper py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-grana">Precios</p>
          <h2 className="font-display mt-5 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] font-medium text-ink">
            Lo que cuesta una cena.
            <br />
            <em className="text-grana">Para todo el año.</em>
          </h2>
          <p className="mt-6 text-lg text-ink/70">Tarifa plana. Sin coste por mensaje, sin permanencia. Demo gratis con vuestros datos.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`reveal relative rounded-[2rem] p-8 sm:p-10 flex flex-col ${
                p.featured ? 'bg-ink text-paper shadow-[0_40px_80px_-30px_rgba(22,17,13,0.6)] md:-translate-y-4' : 'bg-white ring-1 ring-ink/10 text-ink'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-oro px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                  La más elegida
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className={`mt-2 text-[15px] ${p.featured ? 'text-paper/65' : 'text-ink/60'}`}>{p.desc}</p>
              <p className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-6xl font-medium">{p.price}</span>
                {p.per && <span className={p.featured ? 'text-paper/60' : 'text-ink/50'}>{p.per}</span>}
              </p>
              <ul className={`mt-8 space-y-3 text-[15px] flex-1 border-t pt-8 ${p.featured ? 'border-paper/15' : 'border-ink/10'}`}>
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className={p.featured ? 'text-oro' : 'text-grana'}>✦</span>
                    {i}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenDemo}
                className={`mt-10 rounded-full py-4 font-semibold transition-colors cursor-pointer ${
                  p.featured ? 'bg-grana hover:bg-grana-2 text-paper' : 'border border-ink/20 hover:bg-ink hover:text-paper'
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
