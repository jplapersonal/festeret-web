import { Logo } from './Navbar';

export function Footer() {
  return (
    <footer className="bg-ink text-paper/60 border-t border-paper/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 flex flex-col md:flex-row gap-8 md:items-end justify-between">
        <div>
          <Logo light />
          <p className="mt-3 max-w-sm text-sm">El asistente con IA para comparsas, filàs, fallas y peñas. Dentro de WhatsApp y Telegram.</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a href="#como-funciona" className="hover:text-paper">Cómo funciona</a>
          <a href="#pruebalo" className="hover:text-paper">Pruébalo</a>
          <a href="#precios" className="hover:text-paper">Precios</a>
          <a href="#preguntas" className="hover:text-paper">Preguntas</a>
        </nav>
        <div className="text-sm md:text-right">
          <p className="font-display italic text-paper/80">Fet a Ontinyent, amb festa.</p>
          <p className="mt-1">© {new Date().getFullYear()} festeret.ai</p>
        </div>
      </div>
    </footer>
  );
}
