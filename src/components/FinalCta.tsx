import fireworksImg from '../assets/fireworks-castle.jpg';

export function FinalCta({ onOpenDemo }: { onOpenDemo: () => void }) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <img src={fireworksImg} alt="Castillo de fuegos artificiales sobre la fortaleza" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/95" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-36 sm:py-48 text-center [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]">
        <h2 className="font-display text-[clamp(2.6rem,6.5vw,5.8rem)] leading-[0.98] font-medium reveal">
          Este año, que el secretario
          <br />
          <em className="text-oro">también disfrute la fiesta.</em>
        </h2>
        <p className="mt-8 mx-auto max-w-xl text-lg sm:text-xl text-paper/80 reveal">
          Te preparamos una demo con los datos de tu comparsa. Gratis y sin compromiso.
        </p>
        <button
          onClick={onOpenDemo}
          className="reveal mt-12 rounded-full bg-grana hover:bg-grana-2 px-10 py-5 text-lg font-semibold text-paper shadow-[0_10px_40px_-10px_rgba(163,23,43,0.9)] transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          Pide tu Festeret
        </button>
      </div>
    </section>
  );
}
