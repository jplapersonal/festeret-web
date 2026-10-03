const FAQS = [
  {
    q: '¿Los festeros tienen que instalar algo?',
    a: 'No. El Festeret vive en WhatsApp o Telegram, que ya tiene todo el mundo. Se guarda el contacto y se le escribe como a cualquier persona.',
  },
  {
    q: '¿Cómo se aprende las cosas de nuestra comparsa?',
    a: 'Nos pasáis vuestros documentos (actas, estatutos, programa, normas de indumentaria, menús) y los preparamos para que responda solo con vuestra información. Si algo no lo sabe, lo dice y avisa a la directiva.',
  },
  {
    q: '¿Y la privacidad? ¿Puede alguien ver la cuota de otro?',
    a: 'No. Solo responde a festeros dados de alta por su número, y lo económico es individual: cada uno ve lo suyo. No comparte teléfonos ni datos personales de nadie.',
  },
  {
    q: '¿Habla en valencià?',
    a: 'Sí. En castellano, en valencià o en los dos, y con el tono que queráis. Le podéis poner el nombre que queráis: “El Festeret de Taifas”, “El Maseret”, “El Falleret”…',
  },
  {
    q: '¿Cuánto se tarda en tenerlo?',
    a: 'Menos de 24 horas desde que nos pasáis la documentación. Primero lo prueba la directiva y, cuando os guste, se lo pasáis a toda la comparsa.',
  },
];

export function Faq() {
  return (
    <section id="preguntas" className="bg-paper-2 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-4 reveal">
          <p className="eyebrow text-grana">Preguntas</p>
          <h2 className="font-display mt-5 text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1] font-medium text-ink">
            Lo que siempre nos preguntan.
          </h2>
        </div>
        <div className="lg:col-span-8 divide-y divide-ink/15 border-y border-ink/15">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group py-6 reveal" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl sm:text-2xl font-display font-medium text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/20 text-lg transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
