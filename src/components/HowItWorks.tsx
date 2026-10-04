import bgData from "../assets/howitworks-bg.jpg";

import festeroImg from '../assets/festero-phone-tech.jpg';

const STEPS = [
  {
    n: '01',
    t: 'Nos pasáis lo que ya tenéis',
    d: 'Actas, estatutos, programa de fiestas, normas de indumentaria, menús. En PDF, Word o una foto del papel. No hay que rellenar nada.',
  },
  {
    n: '02',
    t: 'Le damos nombre y carácter',
    d: '“El Festeret de la vostra comparsa”. Con vuestro escudo, en tu idioma, y con vuestra manera de hablar.',
  },
  {
    n: '03',
    t: 'Tus festeros le escriben',
    d: 'Por WhatsApp o Telegram, como a un amigo. Responde al momento, a cualquier hora, también en plena Diana.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-paper-2 text-ink py-28 sm:py-36 overflow-hidden">
      <img src={bgData} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-screen" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <div className="relative">
            <img
              src={festeroImg}
              alt="Festero con traje de terciopelo bordado consultando el móvil durante el desfile"
              loading="lazy"
              className="w-full aspect-[3/4] object-cover rounded-[2rem]"
            />
            <div className="absolute -bottom-7 right-0 sm:-right-8 max-w-[260px] rounded-2xl bg-ink/10 backdrop-blur-md ring-1 ring-ink/10 text-ink p-4 shadow-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-grana">En plena Entrà</p>
              <p className="mt-1 text-[15px] leading-snug">“¿Dónde nos toca parar para el relevo?” — contestado en 2 segundos.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow text-oro reveal">Cómo funciona</p>
          <h2 className="font-display mt-5 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] font-medium reveal">
            Se pone en marcha en un día.
            <br />
            <em className="text-oro">Se usa sin manual.</em>
          </h2>

          <ol className="mt-14 space-y-10">
            {STEPS.map((s) => (
              <li key={s.n} className="reveal grid grid-cols-[auto_1fr] gap-6 sm:gap-8 border-t border-ink/15 pt-8">
                <span className="font-display text-5xl sm:text-6xl font-light text-oro leading-none">{s.n}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-ink/65 text-base sm:text-lg leading-relaxed max-w-xl">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
