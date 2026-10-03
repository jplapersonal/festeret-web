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
        origin: { y: 0.6 }
      });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#0f172a] border border-amber-400/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden text-slate-200">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-[10px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>14 Días de Prueba Gratis</span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Pide tu Demo Personalizada
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Déjanos los datos de tu comparsa y te montamos un bot de prueba en 24 horas para que lo pruebe tu directiva.
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
                  placeholder="Ej: Comparsa Taifas, Filà Maseros..."
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder:text-slate-600 outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold uppercase tracking-wider mb-1">
                    Municipio / Fiestas *
                  </label>
                  <input
                    type="text"
                    required
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    placeholder="Ej: Ontinyent, Alcoy, Elda..."
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder:text-slate-600 outline-none focus:border-amber-400"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder:text-slate-600 outline-none focus:border-amber-400"
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
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder:text-slate-600 outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Solicitar Demo por WhatsApp</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">¡Solicitud Enviada!</h3>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">
              Hemos abierto WhatsApp para coordinar la demo de <strong className="text-white">{comparsaName}</strong>. En breve tendrás tu bot listo para probar.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
            >
              Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
