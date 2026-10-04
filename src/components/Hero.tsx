import { useEffect, useState } from 'react';
import { Phone, type ChatMsg } from './Phone';
import { AgentTrace, type TraceStep } from './AgentTrace';
import paradeImg from '../assets/hero-tech.jpg';

type ScriptMsg = Omit<ChatMsg, 'id'> & { trace?: TraceStep[] };

const SCRIPT: ScriptMsg[] = [
  { from: 'user', text: '¿A qué hora es la Entrà el sábado?', time: '21:47' },
  {
    from: 'bot',
    text: 'La Entrà arranca a las **17:00**. Formamos a las **16:15** en la Plaça de Baix, detrás de la banda. Traje de gala completo, con babutxa y turbante.',
    time: '21:47',
    trace: [
      { k: 'entender', v: 'hora de la Entrà · sábado' },
      { k: 'buscar', v: 'Programa de Fiestas 2026 · pág. 4' },
      { k: 'contrastar', v: 'Acta 26/09 · punto 3, formación' },
      { k: 'responder', v: 'con fuente oficial' },
    ],
  },
  { from: 'user', text: '¿Y hay menú celíaco en el dinar del bou?', time: '21:48' },
  {
    from: 'bot',
    text: 'Sí. Te apunto con menú **sin gluten** ✅\nYa sois 3 celíacos en la comparsa, se lo paso al restaurante.',
    time: '21:48',
    trace: [
      { k: 'identificar', v: 'Marc S. · Escuadra Els Bohemis' },
      { k: 'buscar', v: 'Menú dinar del bou · opciones' },
      { k: 'actuar', v: 'apuntar(menú: sin gluten)' },
      { k: 'avisar', v: 'directiva · 3 celíacos en total' },
    ],
  },
  { from: 'user', text: 'Ets un crack, Festeret 🙌', time: '21:48' },
  {
    from: 'bot',
    text: '¡A disfrutar! Visca la festa 🎉',
    time: '21:48',
    trace: [
      { k: 'entender', v: 'agradecimiento' },
      { k: 'responder', v: 'con el tono de la comparsa' },
    ],
  },
];

function useAutoplayChat() {
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const [typing, setTyping] = useState(false);
  const [trace, setTrace] = useState<TraceStep[]>([]);
  const [done, setDone] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(window.setTimeout(r, ms)));

    (async () => {
      while (!cancelled) {
        setMsgs([]);
        setTrace([]);
        setDone(0);
        await wait(900);
        for (let i = 0; i < SCRIPT.length && !cancelled; i++) {
          const { trace: steps, ...m } = SCRIPT[i];
          if (m.from === 'bot') {
            setTyping(true);
            if (steps) {
              setTrace(steps);
              setDone(0);
              for (let s = 1; s <= steps.length && !cancelled; s++) {
                await wait(620);
                setDone(s);
              }
            }
            await wait(450);
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

  return { msgs, typing, trace, done };
}

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const { msgs, typing, trace, done } = useAutoplayChat();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-paper text-ink">
      <img
        src={paradeImg}
        alt="Desfile nocturno de Moros y Cristianos frente al castillo iluminado"
        className="kenburns absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/70 to-paper/10" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-paper to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-16 lg:pt-28 grid lg:grid-cols-12 gap-14 items-center min-h-[100svh]">
        <div className="lg:col-span-7 min-w-0">
          <p className="eyebrow mb-6 flex items-center gap-3 text-oro">
            <span className="h-px w-8 sm:w-10 shrink-0 bg-oro" />
            Agente de IA para comparsas, filàs y fallas
          </p>

          <h1 className="font-display font-medium text-[clamp(3rem,7vw,6.3rem)] leading-[0.92]">
            Menos grupo
            <br />
            de WhatsApp.
            <br />
            <em className="font-semibold text-oro">Más fiesta.</em>
          </h1>

          <p className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-ink/80">
            El Festeret es un agente de inteligencia artificial que vive en el WhatsApp de tu comparsa. Se ha leído
            vuestras actas, horarios y normas, razona cada pregunta y actúa: contesta, apunta y avisa en segundos.{' '}
            <span className="text-ink">Sin apps. Sin contraseñas.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenDemo}
              className="rounded-full bg-grana hover:bg-grana-2 px-8 py-4 text-base font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(163,23,43,0.8)] transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Pide tu Festeret
            </button>
            <a
              href="#pruebalo"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/30 px-7 py-4 text-base font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Háblale ahora
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-lg divide-x divide-ink/15 border-t border-ink/15 pt-6">
            {[
              ['0', 'apps que instalar'],
              ['24h', 'en marcha'],
              ['<3 s', 'por respuesta'],
            ].map(([n, l]) => (
              <div key={l} className="px-4 first:pl-0">
                <dt className="font-display text-3xl sm:text-4xl font-medium text-ink">{n}</dt>
                <dd className="mt-1 text-xs sm:text-sm text-ink/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative flex flex-col items-center gap-4">
            <div className="absolute -inset-10 rounded-full bg-grana/30 blur-3xl" />
            <Phone messages={msgs} typing={typing} className="relative" />
            <AgentTrace
              steps={trace}
              done={done}
              className="relative w-[310px] sm:w-[340px] lg:absolute lg:w-[290px] lg:-left-12 lg:-bottom-8 xl:-left-64 xl:bottom-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
