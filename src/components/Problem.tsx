const NOISE = [
  { who: 'Paco', color: 'text-[#b4532a]', text: '¿A qué hora es la Entrà al final?', rot: '-rotate-2', time: '19:02' },
  { who: 'Marta', color: 'text-[#1f6f78]', text: '¿Alguien sabe dónde se pide la tela de la xilaba?', rot: 'rotate-1', time: '19:05' },
  { who: 'Vicent', color: 'text-[#7a4fa3]', text: '¿Hay menú celíaco en el dinar del bou?', rot: '-rotate-1', time: '19:11' },
  { who: 'Toni', color: 'text-[#2f7a3b]', text: '¿Ya han pasado el recibo de octubre?', rot: 'rotate-2', time: '20:30' },
  { who: 'Paco', color: 'text-[#b4532a]', text: 'Perdonad, ¿a qué hora era? 😅', rot: '-rotate-1', time: '22:58' },
];

export function Problem() {
  return (
    <section className="grain relative bg-paper py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 reveal">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-grana">El problema</p>
          <h2 className="font-display mt-5 text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[0.98] font-medium text-ink">
            Cada año,
            <br />
            las mismas <em className="text-grana">500</em>
            <br />
            preguntas.
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/70">
            Horarios, telas, menús, cuotas, quién lleva el estandarte… Todo está en algún acta, en algún PDF o en un audio
            de hace tres meses. Y al final siempre contesta el mismo.
          </p>
          <p className="font-display mt-8 text-3xl sm:text-4xl italic text-ink">
            El secretario. <span className="text-grana">A las 23:47.</span>
          </p>
        </div>

        <div className="lg:col-span-6 reveal">
          <div className="relative mx-auto max-w-md rounded-3xl bg-white/70 p-5 sm:p-6 shadow-[0_30px_60px_-30px_rgba(22,17,13,0.35)] ring-1 ring-ink/5">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-ink/90 grid place-items-center text-paper font-display italic">C</div>
                <div>
                  <p className="font-semibold text-ink text-[15px]">Comparsa · General</p>
                  <p className="text-xs text-ink/50">214 participantes</p>
                </div>
              </div>
              <span className="rounded-full bg-[#25d366] px-2.5 py-1 text-xs font-bold text-white">487</span>
            </div>

            <div className="space-y-3 pt-5">
              {NOISE.map((n, i) => (
                <div key={i} className={`w-fit max-w-[88%] ${i % 2 ? 'ml-auto' : ''} ${n.rot} rounded-2xl bg-white px-4 py-2.5 shadow-sm ring-1 ring-ink/5`}>
                  <p className={`text-xs font-semibold ${n.color}`}>{n.who}</p>
                  <p className="text-[15px] text-ink">{n.text}</p>
                  <p className="text-right text-[10px] text-ink/40">{n.time}</p>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-6 -left-6 rotate-[-4deg] rounded-xl bg-grana px-4 py-3 text-paper shadow-xl">
              <p className="font-display text-xl italic leading-none">+ 482 sin leer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
