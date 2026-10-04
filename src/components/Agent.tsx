import { Owl } from './Owl';
import embroideryImg from '../assets/embroidery-circuit.jpg';

const SOURCES = [
  ['Actas', 'todas, desde 2019'],
  ['Estatutos', 'art. 1 – 42'],
  ['Programa de Fiestas', 'actos y horarios'],
  ['Menús y dinars', 'alergias incluidas'],
  ['Cuotas', 'lo de cada festero'],
  ['Calendario', 'ensayos y reuniones'],
];

const ACTIONS = [
  ['Responde', 'en segundos, con fuente'],
  ['Apunta', 'asistencia y menús'],
  ['Recuerda', 'pagos y ensayos'],
  ['Avisa', 'a quien toque'],
  ['Resume', 'el acta en 5 líneas'],
  ['Pregunta', 'a la directiva si duda'],
];

const LOOP = [
  {
    n: '01',
    t: 'Entiende',
    d: 'Lo que le preguntas, como lo preguntes: con prisas, con faltas o en valencià.',
    code: 'intención: hora_entrà · sábado',
  },
  {
    n: '02',
    t: 'Busca',
    d: 'En vuestros documentos, no en internet. Solo responde con lo que es vuestro.',
    code: 'fuentes: programa_2026 · acta_26-09',
  },
  {
    n: '03',
    t: 'Comprueba',
    d: 'Contrasta la fuente. Si no está seguro, no se inventa nada: pregunta a la directiva.',
    code: 'confianza: alta ✓ · baja → directiva',
  },
  {
    n: '04',
    t: 'Actúa',
    d: 'No solo contesta. Apunta, recuerda, organiza turnos y avisa a quien toque.',
    code: 'apuntar() · recordar() · avisar()',
  },
];

const ROW_Y = [48, 140, 232, 324, 416, 508];
const CX = 600;
const CY = 280;

function Diagram() {
  return (
    <svg viewBox="0 0 1200 560" className="w-full h-auto" role="img" aria-label="Del conocimiento de la comparsa a las acciones del Festeret">
      <defs>
        <radialGradient id="core-glow">
          <stop offset="0%" stopColor="#a3172b" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#a3172b" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#a3172b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* connections */}
      {ROW_Y.map((y, i) => {
        const inPath = `M280 ${y} C 420 ${y}, 430 ${CY}, ${CX - 112} ${CY}`;
        const outPath = `M${CX + 112} ${CY} C 770 ${CY}, 780 ${y}, 920 ${y}`;
        return (
          <g key={y} fill="none" strokeLinecap="round">
            <path d={inPath} stroke="#f8fafc" strokeOpacity="0.12" strokeWidth="1.5" />
            <path d={inPath} pathLength={100} className="flow" stroke="#d4a23a" strokeWidth="2.5" style={{ animationDelay: `${i * -0.53}s` }} />
            <path d={outPath} stroke="#f8fafc" strokeOpacity="0.12" strokeWidth="1.5" />
            <path d={outPath} pathLength={100} className="flow" stroke="#e0566b" strokeWidth="2.5" style={{ animationDelay: `${i * -0.53 - 1.6}s` }} />
          </g>
        );
      })}

      {/* core */}
      <circle cx={CX} cy={CY} r="220" fill="url(#core-glow)" />
      <circle cx={CX} cy={CY} r="160" className="orbit" fill="none" stroke="#d4a23a" strokeOpacity="0.35" strokeDasharray="2 9" strokeWidth="2" />
      <g className="orbit-rev">
        <circle cx={CX} cy={CY} r="134" fill="none" stroke="#f8fafc" strokeOpacity="0.14" strokeWidth="1" />
        <circle cx={CX + 134} cy={CY} r="4" fill="#d4a23a" />
        <circle cx={CX - 95} cy={CY - 95} r="3" fill="#f8fafc" fillOpacity="0.7" />
        <circle cx={CX - 40} cy={CY + 128} r="3" fill="#e0566b" />
      </g>
      <circle cx={CX} cy={CY} r="110" fill="#16110d" stroke="#d4a23a" strokeOpacity="0.5" strokeWidth="1.5" />
      <g transform={`translate(${CX - 62} ${CY - 78})`}>
        <Owl size={124} />
      </g>
      <text x={CX} y={CY + 70} textAnchor="middle" className="fill-ink font-display" fontSize="22" fontWeight="600">
        El Festeret
      </text>

      {/* sources */}
      {SOURCES.map(([t, s], i) => (
        <g key={t} transform={`translate(0 ${ROW_Y[i] - 32})`}>
          <rect width="280" height="64" rx="16" fill="#f8fafc" fillOpacity="0.05" stroke="#f8fafc" strokeOpacity="0.16" />
          <text x="22" y="28" className="fill-ink" fontSize="18" fontWeight="600">{t}</text>
          <text x="22" y="49" className="fill-ink/50 font-mono" fontSize="13">{s}</text>
          <circle cx="280" cy="32" r="4" fill="#d4a23a" />
        </g>
      ))}

      {/* actions */}
      {ACTIONS.map(([t, s], i) => (
        <g key={t} transform={`translate(920 ${ROW_Y[i] - 32})`}>
          <rect width="280" height="64" rx="16" fill="#a3172b" fillOpacity="0.16" stroke="#e0566b" strokeOpacity="0.35" />
          <text x="22" y="28" className="fill-ink" fontSize="18" fontWeight="600">{t}</text>
          <text x="22" y="49" className="fill-ink/55 font-mono" fontSize="13">{s}</text>
          <circle cx="0" cy="32" r="4" fill="#e0566b" />
        </g>
      ))}
    </svg>
  );
}

function VLine() {
  return (
    <svg viewBox="0 0 2 56" className="mx-auto h-14 w-[2px] overflow-visible" aria-hidden="true">
      <path d="M1 0 V56" stroke="#f8fafc" strokeOpacity="0.15" strokeWidth="2" />
      <path d="M1 0 V56" pathLength={100} className="flow" stroke="#d4a23a" strokeWidth="2" style={{ strokeDasharray: '30 70' }} />
    </svg>
  );
}

function Chips({ items, tone }: { items: string[][]; tone: 'src' | 'act' }) {
  return (
    <ul className="grid grid-cols-2 gap-2.5">
      {items.map(([t, s]) => (
        <li
          key={t}
          className={`rounded-2xl px-4 py-3 ring-1 ${tone === 'src' ? 'bg-paper/[0.05] ring-paper/15' : 'bg-grana/20 ring-grana-2/50'}`}
        >
          <p className="font-semibold text-[15px]">{t}</p>
          <p className="font-mono text-[11px] text-ink/55 mt-0.5">{s}</p>
        </li>
      ))}
    </ul>
  );
}

export function Agent() {
  return (
    <section id="agente" className="relative bg-paper text-ink overflow-hidden">
      {/* Opening band: tradition stitched into intelligence */}
      <div className="relative min-h-[78svh] flex items-end">
        <img
          src={embroideryImg}
          alt="Bordado de hilo de oro sobre terciopelo granate cuyos arabescos se convierten en circuitos iluminados"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[70%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/55 to-paper/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/80 via-paper/20 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24 pt-40">
          <p className="eyebrow text-oro reveal flex items-center gap-3">
            <span className="h-px w-10 bg-oro" />
            Inteligencia artificial agéntica
          </p>
          <h2 className="font-display mt-6 text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.92] font-medium reveal max-w-5xl">
            No es un chatbot.
            <br />
            <em className="text-oro">Es un agente.</em>
          </h2>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-ink/80 reveal">
            Un chatbot repite respuestas. El Festeret entiende lo que le pides, busca en lo que es vuestro, comprueba la
            fuente y actúa. Es la tradición de siempre, con la memoria y la paciencia de una inteligencia artificial.
          </p>
        </div>
      </div>

      {/* How the agent thinks */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="hidden lg:flex justify-between mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-ink/45 reveal">
          <span>Lo que se ha leído</span>
          <span>Lo que hace</span>
        </div>
        <div className="hidden lg:block reveal">
          <Diagram />
        </div>

        {/* Mobile / tablet stacked version */}
        <div className="lg:hidden">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink/45 mb-4">Lo que se ha leído</p>
          <Chips items={SOURCES} tone="src" />
          <VLine />
          <div className="relative mx-auto grid place-items-center h-40 w-40">
            <span className="ping-ring absolute inset-0 rounded-full border border-oro/50" />
            <span className="ping-ring absolute inset-0 rounded-full border border-grana-2/60" style={{ animationDelay: '-1.8s' }} />
            <span className="absolute inset-4 rounded-full bg-grana/25 blur-xl" />
            <Owl size={104} className="relative" />
          </div>
          <p className="text-center font-display text-xl mt-2">El Festeret</p>
          <VLine />
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink/45 mb-4">Lo que hace</p>
          <Chips items={ACTIONS} tone="act" />
        </div>

        {/* Agent loop */}
        <ol className="mt-20 sm:mt-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-[2rem] overflow-hidden bg-paper/10 ring-1 ring-paper/10">
          {LOOP.map((s) => (
            <li key={s.n} className="reveal bg-ink/5 ring-1 ring-ink/10 p-7 sm:p-8 flex flex-col">
              <span className="font-mono text-[12px] text-oro">{s.n}</span>
              <h3 className="font-display mt-4 text-3xl font-medium">{s.t}</h3>
              <p className="mt-3 text-ink/65 text-[15px] leading-relaxed flex-1">{s.d}</p>
              <code className="mt-6 block rounded-xl bg-paper/[0.06] px-3.5 py-2.5 font-mono text-[11.5px] text-oro/90 ring-1 ring-paper/10">
                {s.code}
              </code>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
