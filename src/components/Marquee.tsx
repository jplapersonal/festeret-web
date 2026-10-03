const ITEMS = ['Moros i Cristians', 'Falles', 'Fogueres', 'Semana Santa', 'Comparsas', 'Filàs', 'Peñas', 'Cofradías', 'Hermandades', 'Collas'];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden bg-grana py-5 text-paper border-y border-grana-2" aria-label="Fiestas para las que funciona">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl sm:text-3xl">
            {t}
            <span className="text-oro text-lg not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
