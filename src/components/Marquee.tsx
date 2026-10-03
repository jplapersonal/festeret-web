const ITEMS = ['Moros i Cristians', 'Falles', 'Fogueres', 'Semana Santa', 'Comparsas', 'Filàs', 'Peñas', 'Cofradías', 'Hermandades', 'Collas'];

const LOG = [
  'Els Bohemis · «¿qué traje llevo mañana?» → resuelto en 1,8 s',
  'Falla Plaça Major · 3 menús infantiles apuntados',
  'Cofradía del Silencio · ensayo movido a las 21:00 → 140 avisados',
  'Filà Llana · recibo de octubre recordado a 12 festeros',
  'Foguera Carolines · acta resumida en 5 líneas',
  'Els Rebels · duda sobre el relevo → escalada a la directiva',
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  const log = [...LOG, ...LOG];
  return (
    <div aria-label="Fiestas para las que funciona">
      <div className="relative overflow-hidden bg-grana py-5 text-paper border-y border-grana-2">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-2xl sm:text-3xl">
              {t}
              <span className="text-oro text-lg not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden bg-ink py-3 text-paper/70 border-b border-paper/10" aria-hidden="true">
        <div className="marquee-track reverse flex w-max gap-12 whitespace-nowrap font-mono text-[12px] sm:text-[13px]">
          {log.map((t, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-oro">festeret</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
