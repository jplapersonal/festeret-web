import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Tienen los festeros que descargarse alguna aplicación de la App Store o Google Play?',
      a: 'Rotundamente no. Esa es la principal ventaja de Festeret.ai. El bot vive directamente en WhatsApp y Telegram, aplicaciones que el 100% de tus festeros ya tienen instaladas y usan a diario. Cero descargas, cero contraseñas olvidadas y cero fricción.'
    },
    {
      q: '¿Cómo aprende el bot las normas, actas y trajes de nuestra comparsa?',
      a: 'Simplemente subes desde el panel de administración tus documentos habituales: PDFs de actas de asambleas, el reglamento de indumentaria, fechas de la agenda o apuntes de secretaría. El motor de IA de Festeret los asimila de forma privada y responde con el contexto exacto de tu fiesta.'
    },
    {
      q: '¿Es seguro y privado con los datos de los festeros y sus cuotas?',
      a: 'Totalmente. Festeret.ai cuenta con blindaje estricto de privacidad: solo responde a festeros verificados por móvil, no facilita teléfonos privados de otros compañeros y cada consulta económica o de cuotas es 100% estanca e individual.'
    },
    {
      q: '¿Podemos personalizar el nombre, foto y tono del bot?',
      a: '¡Sí! Puedes ponerle el nombre que quieras (por ejemplo "El Festeret de Taifas", "El Maseret", "El Chano" o "El Fester de San Jorge") con el avatar o escudo de tu comparsa. Además, se adapta al tono cercano y desenfadado propio de la fiesta.'
    },
    {
      q: '¿Cuánto tiempo se tarda en tenerlo funcionando para nuestra comparsa?',
      a: 'En menos de 24 horas. Nos pasas el censo de socios y los documentos básicos de la comparsa, y te dejamos el bot y el portal listos para usar al día siguiente.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#070b14] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Resolvemos tus dudas.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Todo lo que necesitas saber antes de poner en marcha tu Copiloto IA.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0f172a]/90 border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-sm sm:text-base text-white hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
