import { useState } from 'react';
import { Logo } from './Navbar';
import { LegalModal } from './LegalModal';

type LegalType = 'aviso' | 'privacidad' | 'cookies' | null;

export function Footer() {
  const [legalOpen, setLegalOpen] = useState<LegalType>(null);

  return (
    <>
      <footer className="bg-paper-2 text-ink/60 border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 flex flex-col md:flex-row gap-8 md:items-end justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm">El asistente con IA para comparsas, filàs, fallas y peñas. Dentro de WhatsApp y Telegram.</p>
          </div>
          <div className="flex flex-col gap-4">
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a href="#como-funciona" className="hover:text-ink">Cómo funciona</a>
              <a href="#pruebalo" className="hover:text-ink">Pruébalo</a>
              <a href="#precios" className="hover:text-ink">Precios</a>
              <a href="#preguntas" className="hover:text-ink">Preguntas</a>
            </nav>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs opacity-70">
              <button onClick={() => setLegalOpen('aviso')} className="hover:text-ink transition-colors">Aviso Legal</button>
              <button onClick={() => setLegalOpen('privacidad')} className="hover:text-ink transition-colors">Privacidad</button>
              <button onClick={() => setLegalOpen('cookies')} className="hover:text-ink transition-colors">Cookies</button>
            </nav>
          </div>
          <div className="text-sm md:text-right">
            <p className="font-display text-ink/80">Fet a Ontinyent, amb festa.</p>
            <p className="mt-1">© {new Date().getFullYear()} festeret.ai</p>
          </div>
        </div>
      </footer>
      <LegalModal type={legalOpen} onClose={() => setLegalOpen(null)} />
    </>
  );
}
