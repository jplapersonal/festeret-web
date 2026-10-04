import { useEffect, useRef } from 'react';
import { Owl } from './Owl';

export type ChatMsg = { id: string; from: 'user' | 'bot'; text: string; time: string };

/** Very small **bold** parser so copy stays readable. */
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? (
      <strong key={i} className="font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

interface PhoneProps {
  messages: ChatMsg[];
  typing?: boolean;
  footer?: React.ReactNode;
  className?: string;
  title?: string;
}

export function Phone({ messages, typing, footer, className = '', title = 'El Festeret' }: PhoneProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  return (
    <div
      className={`relative w-full max-w-[310px] sm:max-w-[340px] rounded-[2.75rem] bg-ink p-[10px] shadow-[0_0_80px_-20px_rgba(244,63,94,0.3),0_0_0_1px_rgba(255,255,255,0.06)_inset] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2.2rem] bg-paper flex flex-col h-[600px]">
        {/* status bar */}
        <div className="bg-wa text-white/90 text-[11px] font-semibold px-6 pt-3 pb-1 flex justify-between">
          <span>21:47</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-2 h-[22px] w-[92px] rounded-full bg-ink" />
          <span className="tracking-widest">●●● 5G</span>
        </div>

        {/* header */}
        <div className="bg-wa text-white px-4 py-2.5 flex items-center gap-3 shrink-0">
          <span className="text-white/80 text-lg leading-none">‹</span>
          <Owl size={36} className="shrink-0 ring-2 ring-white/15 rounded-full" />
          <div className="leading-tight">
            <p className="text-[14px] font-semibold">{title}</p>
            <p className="text-[11px] text-white/75">{typing ? 'escribiendo…' : 'en línea'}</p>
          </div>
        </div>

        {/* chat */}
        <div ref={bodyRef} className="wa-wallpaper flex-1 overflow-y-auto px-3 py-4 space-y-2 text-[13.5px] leading-snug">
          <div className="mx-auto w-fit rounded-md bg-ink/10 backdrop-blur-md px-2.5 py-1 text-[10.5px] font-medium text-ink/60 shadow-sm">
            HOY
          </div>
          {messages.map((m) => (
            <div key={m.id} className={`bubble-in flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`relative max-w-[82%] rounded-xl px-3 pt-1.5 pb-4 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-ink ${
                  m.from === 'user' ? 'bg-wa-bubble rounded-tr-sm' : 'bg-ink/10 rounded-tl-sm'
                }`}
              >
                <p className="whitespace-pre-line">{rich(m.text)}</p>
                <span className="absolute bottom-1 right-2 text-[10px] text-ink/45">
                  {m.time}
                  {m.from === 'user' && <span className="ml-1 text-sky-500">✓✓</span>}
                </span>
              </div>
            </div>
          ))}
          {typing && (
            <div className="bubble-in flex justify-start">
              <div className="rounded-xl rounded-tl-sm bg-ink/10 px-3.5 py-3 shadow-sm flex gap-1">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/50" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/50" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/50" />
              </div>
            </div>
          )}
        </div>

        {/* input */}
        {footer ?? (
          <div className="bg-paper-2 px-2.5 py-2 flex items-center gap-2 shrink-0">
            <div className="flex-1 rounded-full bg-ink/10 px-4 py-2 text-[13px] text-ink/40">Mensaje</div>
            <div className="h-9 w-9 rounded-full bg-wa grid place-items-center text-white text-sm">🎤</div>
          </div>
        )}
      </div>
    </div>
  );
}
