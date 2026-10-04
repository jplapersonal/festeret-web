interface PricingProps {
  onOpenDemo: () => void;
}

const INCLUDED = [
  'Consultas ilimitadas por Telegram (100% gratis)',
  'Integración con WhatsApp Oficial (coste adicional por mensaje según tarifas de Meta)',
  'Vuestro nombre, escudo e idioma (multidioma)',
  'Todas vuestras actas y documentos',
  'Comidas, cenas, alergias y cuotas',
  'Avisos a todos y felicitaciones automáticas',
  'Puesta en marcha en 24 h, sin cuota de alta',
];

export function Pricing({ onOpenDemo }: PricingProps) {
  return (
    <section id="precios" className="grain relative bg-paper py-28 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-grana/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl reveal">
          <p className="eyebrow text-grana">Precio</p>
          <h2 className="font-display mt-5 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] font-medium text-ink">
            Pagas por grupos.
            <br />
            <em className="text-grana">No por personas.</em>
          </h2>
          <p className="mt-6 text-lg text-ink/70">
            Da igual que seáis 12 o 400. Cada grupo tiene su propio Festeret, y lo que publica la comparsa lo saben al momento todas sus escuadras.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-5 items-stretch">
          {/* Grupo */}
          <div className="reveal rounded-[2rem] bg-ink/5 ring-1 ring-ink/10 p-8 sm:p-10 flex flex-col">
            <p className="eyebrow text-grana">Escuadra · Peña · Colla</p>
            <p className="mt-6 font-display text-[clamp(3.5rem,7vw,5rem)] font-medium leading-none text-ink">69 €</p>
            <p className="mt-2 text-ink/60">al año</p>
            <p className="mt-6 text-ink/70 text-[16px] leading-relaxed flex-1">
              Vuestro grupo, por su cuenta: cuotas, turnos, cenas y documentos de la escuadra, en vuestro Telegram o WhatsApp.
            </p>
            <button
              onClick={onOpenDemo}
              className="mt-8 rounded-full border border-ink/20 py-4 font-semibold text-ink hover:bg-ink hover:text-paper transition-colors cursor-pointer"
            >
              Empezar con mi escuadra
            </button>
          </div>

          {/* Entidad */}
          <div className="reveal rounded-[2rem] bg-ink/10 text-ink ring-1 ring-grana/40 p-8 sm:p-10 flex flex-col shadow-[0_40px_80px_-30px_rgba(22,17,13,0.6)] lg:-my-4">
            <p className="eyebrow text-oro">Comparsa · Filà · Falla · Cofradía</p>
            <p className="mt-6 font-display text-[clamp(3.5rem,7vw,5rem)] font-medium leading-none">199 €</p>
            <p className="mt-2 text-ink/70">al año, para todos sus miembros</p>
            <div className="mt-6 rounded-2xl bg-ink/[0.06] ring-1 ring-paper/15 p-5">
              <p className="text-[16px]">
                <span className="font-display text-3xl text-oro">+25 €</span>
                <span className="text-ink/80"> por cada escuadra o peña que se sume</span>
              </p>
              <p className="mt-2 text-sm text-ink/55">En vez de 69 € cada una. Una sola factura.</p>
            </div>
            <p className="mt-6 text-ink/70 text-[16px] leading-relaxed flex-1">
              Normas, actos, actas y avisos para toda la comparsa, y un Festeret propio para cada escuadra que ya sabe todo lo de arriba.
            </p>
            <button
              onClick={onOpenDemo}
              className="mt-8 rounded-full bg-grana hover:bg-grana-2 py-4 font-semibold text-ink transition-colors cursor-pointer"
            >
              Pide tu Festeret
            </button>
            <p className="mt-3 text-center text-sm text-ink/50">Demo gratis con vuestros datos</p>
          </div>

          {/* Federación */}
          <div className="reveal rounded-[2rem] bg-ink/5 ring-1 ring-ink/10 p-8 sm:p-10 flex flex-col">
            <p className="eyebrow text-grana">Juntas · Societats · Federaciones</p>
            <h3 className="font-display mt-6 text-4xl font-medium text-ink leading-tight">Toda la fiesta, en un solo Festeret.</h3>
            <p className="mt-4 text-ink/65 text-[16px] leading-relaxed flex-1">
              Programa oficial y actos públicos para toda la ciudad, y cada comparsa con su Festeret a precio de Junta.
            </p>
            <button
              onClick={onOpenDemo}
              className="mt-8 rounded-full border border-ink/20 py-4 font-semibold text-ink hover:bg-ink hover:text-paper transition-colors cursor-pointer"
            >
              Hablemos
            </button>
          </div>
        </div>

        <div className="reveal mt-12 rounded-[2rem] ring-1 ring-ink/10 bg-paper-2/60 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="eyebrow text-ink/60 shrink-0">Todo incluido en cualquier plan</p>
            <p className="text-sm text-ink/50 md:text-right">
              <strong className="font-medium text-ink/65">Nota sobre WhatsApp:</strong> Telegram es 100% gratuito e ilimitado. Si decidís conectar WhatsApp Oficial, Meta (Facebook) cobra un pequeño coste por cada mensaje enviado/recibido que se facturará aparte.<br/>
              <span className="opacity-75 mt-1 block">IVA no incluido · ¿Ya pagabais como escuadra? Os lo descontamos al entrar la comparsa.</span>
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-[16px]">
            {INCLUDED.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="text-grana">✦</span>
                <span className="text-ink/85">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
