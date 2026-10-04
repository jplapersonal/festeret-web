import { useEffect } from 'react';

type LegalType = 'aviso' | 'privacidad' | 'cookies' | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [type]);

  if (!type) return null;

  const content = {
    aviso: {
      title: 'Aviso Legal',
      body: (
        <div className="space-y-4 text-sm text-foreground/80">
          <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
          <p><strong>Titular:</strong> Venture Experience / Sociedad en Constitución (temporal)</p>
          <p><strong>Domicilio:</strong> [Dirección temporal]</p>
          <p><strong>Correo electrónico:</strong> hola@festeret.ai</p>
          <p>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
        </div>
      )
    },
    privacidad: {
      title: 'Política de Privacidad',
      body: (
        <div className="space-y-4 text-sm text-foreground/80">
          <p>En Festeret.AI nos tomamos muy en serio la privacidad de tus datos. Al usar nuestro servicio, ya sea a través de la web o mediante nuestro bot de WhatsApp/Telegram, se aplican las siguientes condiciones:</p>
          <h3 className="font-semibold text-foreground">1. Datos recopilados</h3>
          <p>Recopilamos la información estrictamente necesaria para el funcionamiento del bot y la gestión de la comparsa, incluyendo pero no limitado a: nombre, teléfono, e interacciones con el asistente.</p>
          <h3 className="font-semibold text-foreground">2. Uso de los datos</h3>
          <p>Los datos se utilizarán exclusivamente para proporcionar el servicio de asistencia por IA. No vendemos ni cedemos datos a terceros con fines comerciales.</p>
          <h3 className="font-semibold text-foreground">3. Derechos del usuario</h3>
          <p>Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición enviando un correo a hola@festeret.ai.</p>
        </div>
      )
    },
    cookies: {
      title: 'Política de Cookies',
      body: (
        <div className="space-y-4 text-sm text-foreground/80">
          <p>Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p>
          <h3 className="font-semibold text-foreground">Cookies utilizadas en Festeret.AI:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies técnicas:</strong> Necesarias para el correcto funcionamiento de la web (como guardar tu preferencia sobre el propio aviso de cookies).</li>
            <li><strong>Cookies analíticas (Google Analytics):</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio. Estas cookies <strong>solo se activan si nos das tu consentimiento explícito</strong>.</li>
          </ul>
          <p>Puedes cambiar tus preferencias o borrar las cookies desde las opciones de tu navegador.</p>
        </div>
      )
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="w-full max-w-2xl bg-card border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 relative max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-foreground/50 hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-6">{content[type].title}</h2>
        {content[type].body}
      </div>
    </div>
  );
}
