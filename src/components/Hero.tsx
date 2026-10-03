import { useEffect, useState } from 'react';
import { Phone, type ChatMsg } from './Phone';
import paradeImg from '../assets/parade-hero.jpg';

const SCRIPT: Omit<ChatMsg, 'id'>[] = [
  { from: 'user', text: '¿A qué hora es la Entrà el sábado?', time: '21:47' },
  { from: 'bot', text: 'La Entrà arranca a las **17:00**. Formamos a las **16:15** en la Plaça de Baix, detrás de la banda. Traje de gala completo, con babutxa y turbante.', time: '21:47' },
  { from: 'user', text: '¿Y hay menú celíaco en el dinar del bou?', time: '21:48' },
  { from: 'bot', text: 'Sí. Te apunto con menú **sin gluten** ✅\nYa sois 3 celíacos en la comparsa, se lo paso al restaurante.', time: '21:48' },
  { from: 'user', text: 'Ets un crack, Festeret 🙌', time: '21:48' },
  { from: 'bot', text: '¡A disfrutar! Visca la festa 🎉', time: '21:48' },
];

function useAutoplayChat() {
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(window.setTimeout(r, ms)));

    (async () => {
      while (!cancelled) {
        setMsgs([]);
        await wait(900);
        for (let i = 0; i < SCRIPT.length && !cancelled; i++) {
          const m = SCRIPT[i];
          if (m.from === 'bot') {
            setTyping(true);
            await wait(1300);
            setTyping(false);
          } else {
            await wait(1100);
          }
          if (cancelled) return;
          setMsgs((p) => [...p, { ...m, id: `${Date.now()}-${i}` }]);
        }
        await wait(5000);
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return { msgs, typing };
}

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const { msgs, typing } = useAutoplayChat();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
      <img
        src={paradeImg}
        alt="Desfile nocturno de Moros y Cristianos frente al castillo iluminado"
        className="kenburns absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-16 lg:pt-28 grid lg:grid-cols-12 gap-14 items-center min-h-[100svh]">
        <div className="lg:col-span-7 min-w-0">
          <p className="eyebrow mb-6 flex items-center gap-3 text-oro">
            <span className="h-px w-8 sm:w-10 shrink-0 bg-oro" />
            Asistente IA para comparsas, filàs y fallas
          </p>

          <h1 className="font-display font-medium text-[clamp(3rem,7vw,6.3rem)] leading-[0.92]">
            Menos grupo
            <br />
            de WhatsApp.
            <br />
            <em className="font-semibold text-oro">Más fiesta.</em>
          </h1>

          <p className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-paper/80">
            El Festeret es el asistente de tu comparsa. Vive dentro de WhatsApp y Telegram, se sabe las actas, los horarios
            y la indumentaria, y contesta a cada festero en segundos.{' '}
            <span className="text-paper">Sin apps. Sin contraseñas.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenDemo}
              className="rounded-full bg-grana hover:bg-grana-2 px-8 py-4 text-base font-semibold text-paper shadow-[0_10px_30px_-10px_rgba(163,23,43,0.8)] transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Pide tu Festeret
            </button>
            <a
              href="#pruebalo"
              className="group inline-flex items-center gap-2 rounded-full border border-paper/30 px-7 py-4 text-base font-medium text-paper hover:bg-paper hover:text-ink transition-colors"
            >
              Háblale ahora
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-lg divide-x divide-paper/15 border-t border-paper/15 pt-6">
            {[
              ['0', 'apps que instalar'],
              ['24h', 'en marcha'],
              ['<3 s', 'por respuesta'],
            ].map(([n, l]) => (
              <div key={l} className="px-4 first:pl-0">
                <dt className="font-display text-3xl sm:text-4xl font-medium text-paper">{n}</dt>
                <dd className="mt-1 text-xs sm:text-sm text-paper/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-grana/30 blur-3xl" />
            <Phone messages={msgs} typing={typing} className="relative" />
          </div>
        </div>
      </div>
    </section>
  );
}
