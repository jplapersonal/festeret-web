import { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const field =
  'w-full rounded-xl border border-ink/15 bg-ink/10 px-4 py-3.5 text-[15px] text-ink placeholder:text-ink/35 outline-none focus:border-grana focus:ring-2 focus:ring-grana/15';

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [comparsa, setComparsa] = useState('');
  const [town, setTown] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (isOpen && !d.open) d.showModal();
    if (!isOpen && d.open) d.close();
  }, [isOpen]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola! Quiero una demo de festeret.ai\n\n• Comparsa/Filà/Falla: ${comparsa}\n• Fiesta / municipio: ${town}\n• Contacto: ${name || '-'}\n• Teléfono: ${phone}`,
    );
    window.open(`https://wa.me/34659682643?text=${msg}`, '_blank');
    setSent(true);
    confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 }, colors: ['#a3172b', '#d4a23a', '#f3ebdd'] });
  };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[min(560px,calc(100%-2rem))] rounded-[2rem] bg-paper p-0 text-ink backdrop:bg-ink/75 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-8 sm:p-10">
        <button onClick={onClose} aria-label="Cerrar" className="absolute right-5 top-5 h-10 w-10 rounded-full hover:bg-ink/5 text-2xl leading-none cursor-pointer">
          ×
        </button>

        {!sent ? (
          <>
            <p className="eyebrow text-grana">Demo gratis</p>
            <h3 className="font-display mt-3 text-4xl font-medium leading-tight">Pide tu Festeret</h3>
            <p className="mt-3 text-ink/65">Te montamos uno de prueba con los datos de tu comparsa en menos de 24 horas.</p>

            <form onSubmit={submit} className="mt-8 space-y-4">
              <input required className={field} placeholder="Comparsa, filà o falla *" value={comparsa} onChange={(e) => setComparsa(e.target.value)} />
              <div className="grid sm:grid-cols-2 gap-4">
                <input required className={field} placeholder="Municipio / fiesta *" value={town} onChange={(e) => setTown(e.target.value)} />
                <input className={field} placeholder="Tu nombre y cargo" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <input required type="tel" autoComplete="tel" className={field} placeholder="Móvil (WhatsApp) *" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <button type="submit" className="w-full rounded-full bg-grana hover:bg-grana-2 py-4 font-semibold text-paper transition-colors cursor-pointer">
                Enviar por WhatsApp
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <p className="font-display text-5xl text-grana">¡Visca!</p>
            <h3 className="font-display mt-4 text-3xl font-medium">Solicitud enviada</h3>
            <p className="mt-3 text-ink/65">
              Hemos abierto WhatsApp para coordinar la demo de <strong className="text-ink">{comparsa}</strong>.
            </p>
            <button onClick={onClose} className="mt-8 rounded-full border border-ink/20 px-8 py-3 font-semibold hover:bg-ink hover:text-paper cursor-pointer">
              Cerrar
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
}
