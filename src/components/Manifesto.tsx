import bgSimplicity from "../assets/manifesto-bg.jpg";

export function Manifesto() {
  return (
    <section className="relative bg-paper text-ink py-28 sm:py-40 overflow-hidden">
      <img src={bgSimplicity} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-screen" />
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <p className="eyebrow text-oro reveal">Por qué no otra app</p>
        <h2 className="font-display mt-6 text-[clamp(2.6rem,6.5vw,5.8rem)] leading-[0.98] font-medium reveal">
          Nadie se va a descargar
          <br />
          otra app.
        </h2>

        <ul className="mt-16 space-y-3 font-display text-[clamp(1.6rem,3.6vw,2.8rem)] text-ink/35">
          <li className="reveal line-through decoration-grana decoration-[3px]">Buscarla en la App Store</li>
          <li className="reveal line-through decoration-grana decoration-[3px]">Crear usuario y contraseña</li>
          <li className="reveal line-through decoration-grana decoration-[3px]">Aprender otro menú</li>
          <li className="reveal text-oro">Abrir WhatsApp.</li>
        </ul>

        <p className="mt-14 mx-auto max-w-2xl text-lg text-ink/65 reveal">
          Por eso el Festeret vive donde ya está toda tu comparsa, del cabo de escuadra al abuelo de 82 años. Funciona desde el
          primer día porque no hay nada que aprender.
        </p>
      </div>
    </section>
  );
}
