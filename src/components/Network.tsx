import { Owl } from './Owl';

const SQUADS = ['Els Bohemis', 'La Xaranga', 'Els Rebels', 'La Penya', 'Els Nanos', 'Els Tronats', 'La Colla', 'Els Xiquets', 'Els Fadrins', 'La Traca', 'Els Cremats', 'La Nit'];
const C = 300;
const R = 215;

export function Network() {
  return (
    <section className="grain relative bg-paper-2 py-28 sm:py-36 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 reveal">
          <p className="eyebrow text-grana">Un cerebro por comparsa</p>
          <h2 className="font-display mt-5 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] font-medium text-ink">
            Se publica
            <br />
            una vez.
            <br />
            <em className="text-grana">Lo saben todos.</em>
          </h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            La comparsa cambia un horario o aprueba una norma, y el Festeret de cada escuadra lo sabe al instante. Cada escuadra
            guarda además lo suyo: sus cuotas, sus turnos, sus cenas. Nadie ve lo de los demás.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-px rounded-2xl overflow-hidden bg-ink/10 ring-1 ring-ink/10">
            {[
              ['1 cambio', '21 Festerets al día'],
              ['0 reenvíos', 'ni cadenas de audios'],
            ].map(([n, l]) => (
              <div key={n} className="bg-paper px-5 py-4">
                <dt className="font-display text-2xl font-medium text-ink">{n}</dt>
                <dd className="font-mono text-[12px] text-ink/55 mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7 reveal">
          <svg viewBox="0 0 600 600" className="w-full max-w-[640px] mx-auto h-auto" role="img" aria-label="La comparsa en el centro, conectada al Festeret de cada escuadra">
            {SQUADS.map((_, i) => {
              const a = (i / SQUADS.length) * Math.PI * 2 - Math.PI / 2;
              const x = C + Math.cos(a) * R;
              const y = C + Math.sin(a) * R;
              return (
                <g key={i} fill="none" strokeLinecap="round">
                  <line x1={C} y1={C} x2={x} y2={y} stroke="#09090b" strokeOpacity="0.12" strokeWidth="1.5" />
                  <path d={`M${C} ${C} L${x} ${y}`} pathLength={100} className="flow" stroke="#f43f5e" strokeWidth="3" style={{ animationDuration: '3.6s' }} />
                </g>
              );
            })}

            <circle cx={C} cy={C} r={R} fill="none" stroke="#09090b" strokeOpacity="0.1" strokeDasharray="3 8" />
            <circle cx={C} cy={C} r={R} className="ping-ring" fill="none" stroke="#f43f5e" strokeOpacity="0.5" strokeWidth="2" />

            {SQUADS.map((name, i) => {
              const a = (i / SQUADS.length) * Math.PI * 2 - Math.PI / 2;
              const x = C + Math.cos(a) * R;
              const y = C + Math.sin(a) * R;
              const below = Math.sin(a) > -0.2;
              return (
                <g key={name}>
                  <circle cx={x} cy={y} r="27" fill="#f8fafc" stroke="#f43f5e" strokeOpacity="0.35" />
                  <g transform={`translate(${x - 21} ${y - 21})`}>
                    <Owl size={42} />
                  </g>
                  <text
                    x={x}
                    y={below ? y + 48 : y - 38}
                    textAnchor="middle"
                    className="fill-ink/70"
                    fontSize="15"
                    fontWeight="500"
                  >
                    {name}
                  </text>
                </g>
              );
            })}

            <circle cx={C} cy={C} r="78" fill="#09090b" />
            <circle cx={C} cy={C} r="78" fill="none" stroke="#f59e0b" strokeOpacity="0.6" strokeWidth="2" />
            <g transform={`translate(${C - 45} ${C - 45})`}>
              <Owl size={90} />
            </g>
            
            {/* Chip COMPARSA */}
            <rect x={C - 52} y={C + 86} width="104" height="26" rx="13" fill="#09090b" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.8" />
            <text x={C} y={C + 103} textAnchor="middle" className="fill-oro font-mono font-bold" fontSize="11" letterSpacing="2">
              COMPARSA
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
