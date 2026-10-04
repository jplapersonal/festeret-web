import dinnerImg from '../assets/dinner-celebration.jpg';
import fabricImg from '../assets/chilaba-fabric.jpg';

export function Capabilities() {
  return (
    <section className="bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl reveal">
          <p className="eyebrow text-grana">Lo que hace</p>
          <h2 className="font-display mt-5 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] font-medium text-ink">
            Todo lo que hoy pasa por el móvil del secretario.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[minmax(260px,auto)]">
          {/* Dinars */}
          <article className="reveal group relative md:col-span-4 md:row-span-2 overflow-hidden rounded-[2rem] bg-ink text-paper min-h-[460px]">
            <img src={dinnerImg} alt="Cena de comparsa con brindis" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 sm:p-10">
              <p className="eyebrow text-oro">Dinars, sopars y alergias</p>
              <h3 className="font-display mt-3 text-3xl sm:text-5xl font-medium leading-[1.02] max-w-xl">
                “Apúntame con menú celíaco.” <em className="text-oro">Y listo.</em>
              </h3>
              <p className="mt-4 max-w-lg text-paper/75 text-base sm:text-lg">
                Confirma asistencia, cuenta celíacos, menús infantiles y acompañantes, y te deja la lista preparada para el
                restaurante.
              </p>
            </div>
          </article>

          {/* Indumentaria */}
          <article className="reveal group relative md:col-span-2 overflow-hidden rounded-[2rem] bg-satin text-paper min-h-[280px]">
            <img src={fabricImg} alt="Satén turquesa con bordado dorado" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-7">
              <h3 className="font-display text-2xl font-medium">Indumentaria</h3>
              <p className="mt-2 text-paper/80 text-[15px]">Gala, xilaba, telas, proveedores y tallas. Sin buscar en el acta de mayo.</p>
            </div>
          </article>

          {/* Cuotas */}
          <article className="reveal md:col-span-2 rounded-[2rem] bg-ink/5 p-7 ring-1 ring-ink/10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-medium text-ink">Cuotas</h3>
              <p className="mt-2 text-ink/65 text-[15px]">Cada festero consulta lo suyo. Nadie ve lo de nadie.</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                ['Recibo 3 · sept', true],
                ['Recibo 4 · oct', true],
                ['Recibo 5 · nov', false],
              ].map(([l, ok]) => (
                <li key={l as string} className="flex items-center justify-between rounded-xl bg-paper px-4 py-2.5">
                  <span className="text-ink/80">{l}</span>
                  <span className={ok ? 'text-[#2f7a3b] font-semibold' : 'text-ink/40'}>{ok ? '✓ pagado' : 'pendiente'}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Avisos */}
          <article className="reveal md:col-span-3 rounded-[2rem] bg-grana text-paper p-8 sm:p-10 flex flex-col justify-between">
            <p className="eyebrow text-oro">Avisos</p>
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-medium leading-tight">La directiva avisa una vez. Llega a todos.</h3>
              <p className="mt-3 text-paper/80 text-base">Y las dudas que provoca el aviso las resuelve él, no tu teléfono.</p>
            </div>
          </article>

          {/* Actas */}
          <article className="reveal md:col-span-3 rounded-[2rem] bg-ink text-paper p-8 sm:p-10 flex flex-col justify-between">
            <p className="eyebrow text-oro">Memoria de la comparsa</p>
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-medium leading-tight">Se lee las actas para que tú no tengas que hacerlo.</h3>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {['Acta 26-09-2025.pdf', 'Estatutos.pdf', 'Programa de Fiestas.pdf', 'Menú dinar.pdf'].map((f) => (
                  <span key={f} className="rounded-full border border-paper/20 px-3 py-1.5 text-paper/75">
                    📄 {f}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
