import bgBubbles from "../assets/simulator-bg.jpg";

import { useState } from 'react';
import { Phone, type ChatMsg } from './Phone';

const PRESETS = [
  {
    q: '¿A qué hora es la Entrà?',
    a: 'Sábado a las **17:00**. Formamos a las **16:15** en la Plaça de Baix, detrás de la banda. Llega con 15 minutos de margen para pasar lista 😉',
  },
  {
    q: '¿Dónde pido la tela de la chilaba de diario?',
    a: 'Según el **acta del 26/09**: satén turquesa, se encarga en la tienda de siempre diciendo que eres de la comparsa. El delegado de indumentaria tiene la referencia exacta.',
  },
  {
    q: 'Apúntame al dinar del bou. Soy celíaco.',
    a: 'Hecho ✅ Estás apuntado con menú **sin gluten**. Te recuerdo el viernes la hora y el sitio.',
  },
  {
    q: '¿Tengo la cuota al día?',
    a: 'Sí. Llevas **4 de 10 recibos** pagados, todos en verde ✅ El próximo se pasa el día 5.',
  },
  {
    q: '¿Qué hay que llevar a la Diana?',
    a: 'chilaba de diario, fajín y babutxes. **Nada de gala**. Y algo de abrigo, que a las 7:30 refresca.',
  },
];

const now = () => new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

const WELCOME: ChatMsg = {
  id: 'w',
  from: 'bot',
  text: '¡Hola! Soy **el Festeret** de tu comparsa 👋\nPregúntame por horarios, indumentaria, comidas o cuotas.',
  time: now(),
};

export function Simulator() {
  const [msgs, setMsgs] = useState<ChatMsg[]>([WELCOME]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');

  const ask = (q: string) => {
    if (!q.trim() || typing) return;
    const preset = PRESETS.find((p) => p.q.toLowerCase() === q.trim().toLowerCase());
    setMsgs((m) => [...m, { id: crypto.randomUUID(), from: 'user', text: q.trim(), time: now() }]);
    setInput('');
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          from: 'bot',
          text:
            preset?.a ??
            'Buena pregunta 🙂 En tu comparsa la respondería con vuestras actas y documentos. En esta demo solo me sé las preguntas de la izquierda: ¡prueba una!',
          time: now(),
        },
      ]);
    }, 1200);
  };

  return (
    <section id="pruebalo" className="grain relative bg-paper-2 py-28 sm:py-36 overflow-hidden">
      <img src={bgBubbles} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 reveal">
          <p className="eyebrow text-grana">Pruébalo</p>
          <h2 className="font-display mt-5 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] font-medium text-ink">
            Pregúntale como
            <br />
            <em className="text-grana">se lo preguntarías</em>
            <br />
            al secretario.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-ink/70">Toca una pregunta y mira cómo responde. Sin menús, sin pestañas.</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {PRESETS.map((p) => (
              <button
                key={p.q}
                onClick={() => ask(p.q)}
                disabled={typing}
                className="rounded-full border border-ink/15 bg-paper px-5 py-3 text-[15px] text-ink hover:border-grana hover:bg-grana hover:text-paper transition-colors disabled:opacity-50 cursor-pointer text-left"
              >
                {p.q}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMsgs([WELCOME])}
            className="mt-6 text-sm text-ink/50 underline underline-offset-4 hover:text-ink cursor-pointer"
          >
            Reiniciar conversación
          </button>
        </div>

        <div className="lg:col-span-6 flex justify-center reveal">
          <Phone
            messages={msgs}
            typing={typing}
           
            footer={
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  ask(input);
                }}
                className="bg-paper-2 px-2.5 py-2 flex items-center gap-2 shrink-0"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe un mensaje"
                  aria-label="Escribe un mensaje al Festeret"
                  className="flex-1 rounded-full bg-ink/10 px-4 py-2 text-[13px] text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-wa/40"
                />
                <button
                  type="submit"
                  aria-label="Enviar"
                  className="h-9 w-9 rounded-full bg-wa grid place-items-center text-white text-sm cursor-pointer"
                >
                  ➤
                </button>
              </form>
            }
          />
        </div>
      </div>
    </section>
  );
}
