import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Only load if not already loaded
    if (document.getElementById('ga-script')) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-07HH66LQJ0';
    document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-07HH66LQJ0');
    `;
    document.head.appendChild(script2);
  };

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-foreground/80 flex-1">
        <p>
          Utilizamos cookies propias y de terceros para analizar nuestro tráfico y mejorar tu experiencia. 
          Al hacer clic en "Aceptar", aceptas el uso de TODAS las cookies.
        </p>
      </div>
      <div className="flex gap-3 shrink-0">
        <button 
          onClick={handleDecline}
          className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
        >
          Rechazar
        </button>
        <button 
          onClick={handleAccept}
          className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
