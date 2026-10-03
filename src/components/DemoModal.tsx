import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [comparsaName, setComparsaName] = useState('');
  const [town, setTown] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comparsaName || !phone) return;

    // Send WhatsApp notification / lead
    const whatsappMsg = encodeURIComponent(
      `👋 ¡Hola! Me gustaría solicitar una prueba/demo gratuita de festeret.ai para nuestra comparsa:\n\n• Comparsa/Filà: ${comparsaName}\n• Localidad: ${town || 'No especificada'}\n• Contacto: ${contactName || 'Responsable'}\n• Teléfono: ${phone}`
    );

    window.open(`https://wa.me/34659682643?text=${whatsappMsg}`, '_blank');
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2dd4bf', '#fbbf24', '#38bdf8']
      });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#090e1c] border border-teal-500/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden text-slate-200">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-[10px] font-bold uppercase tracking-wider border border-teal-500/20">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Prueba Gratuita sin Compromiso</span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight font-sans">
                Pide tu Demo Personalizada
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Déjanos los datos de tu comparsa y te montamos un bot de prueba en menos de 24 horas para que lo pruebe tu directiva.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold uppercase tracking-wider mb-1">
                  Nombre de tu Comparsa / Filà / Peña *
                </label>
                <input
                  type="text"
                  required
                  value={comparsaName}
                  onChange={(e) => setComparsaName(e.target.value)}
                  placeholder="Ej: Comparsa Taifas, Filà Maseros, Falla Plaza..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050811] border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-teal-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold uppercase tracking-wider mb-1">
                    Municipio / Fiesta *
                  </label>
                  <input
                    type="text"
                    required
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    placeholder="Ej: Ontinyent, Alcoy, Elda, Valencia..."
                    className="w-full px-4 py-3 rounded-xl bg-[#050811] border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-teal-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold uppercase tracking-wider mb-1">
                    Tu Nombre / Cargo
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ej: Jose (Presidente / Tesorero)"
                    className="w-full px-4 py-3 rounded-xl bg-[#050811] border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold uppercase tracking-wider mb-1">
                  Teléfono Móvil (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej: 659 000 000"
                  className="w-full px-4 py-3 rounded-xl bg-[#050811] border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-teal-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 hover:from-teal-200 hover:to-amber-200 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer mt-2"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Solicitar Demo por WhatsApp</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white font-sans">¡Solicitud Enviada!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Hemos abierto WhatsApp para coordinar la demo de <strong className="text-white">{comparsaName}</strong>. En breve tendrás tu bot listo para probar.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
