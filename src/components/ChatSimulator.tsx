import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, ShieldCheck, CheckCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  actionTag?: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'm1',
    sender: 'bot',
    text: '¡Hombre Jose! 👋🎉 Soy **El Festeret** de tu comparsa 🐪. Pregúntame de cenas, qué traje toca ponerse, horarios o tus recibos de cuotas.',
    time: '12:00'
  },
  {
    id: 'm2',
    sender: 'user',
    text: '¿A qué hora salimos en la Diana y qué traje me pongo?',
    time: '12:01'
  },
  {
    id: 'm3',
    sender: 'bot',
    text: '🌟 ¡Diana del Domingo a las 07:30h desde la Plaça Major!\n\n👉 Toca **Traje de Gala oficial completo**. Recuerda que para la Diana de chilaba es el sábado por la mañana. ¡A dormir pronto que pasamos lista! 😉🐪',
    time: '12:01'
  }
];

const PRESET_QUESTIONS = [
  {
    label: '👘 ¿Qué traje toca el viernes?',
    query: '¿Puedo llevar la chilaba el viernes por la mañana?',
    response: '⚠️ ¡Ojo al dato! El viernes por la mañana en la Entrada Infantil SOLO puedes llevar chilaba si sales tocando el pandero con la banda. Si no tocas, está prohibido por reglamento. ¡Por la noche en la Gran Entrada toca Traje de Gala a tope! 👘✨'
  },
  {
    label: '🍽️ Apuntarme a la cena con celíaco',
    query: 'Apúntame a la cena del Mig Any con mi mujer y mi hijo celíaco (sin gluten)',
    response: '¡Hecho Jose! 🎉 Anotados los 3 para la Cena del Mig Any (2 adultos + 1 menor celíaco menú sin gluten). Ya se lo he pasado a intendencia para la reserva. ¡A liarla! 🐪✅',
    actionTag: 'RESERVA_CONFIRMADA'
  },
  {
    label: '💳 Consultar mi estado de cuotas',
    query: '¿Cuánto llevo pagado de cuota este año y cuál es el siguiente recibo?',
    response: '💰 Llevas validadas 1 de 10 remesas (60 € de 550 €). La 2ª remesa la gira la comparsa desde el Sabadell el ~11 de Octubre. Si ya te pasaron el cargo, dímelo y te pongo el check verde al momento. 💳✅'
  },
  {
    label: '📜 ¿Dónde pido la tela de la chilaba?',
    query: '¿Dónde puedo comprar la tela oficial de la chilaba?',
    response: '👘 La tela oficial de satén turquesa no se compra en tiendas. Pídesela a La Junta para que te pasen con la modista oficial asignada, y el importe se te carga en la remesa de julio (Acta 3/2025). ¡Prohibido telas externas por tonos de brillo! 🐪📜'
  }
];

export const ChatSimulator: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeChannel, setActiveChannel] = useState<'telegram' | 'whatsapp'>('telegram');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userTime = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = {
      id: `u_${Date.now()}`,
      sender: 'user',
      text,
      time: userTime
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Dynamic response logic
    setTimeout(() => {
      const qLower = text.toLowerCase();
      let botResponse = '';
      let hasConfetti = false;

      const preset = PRESET_QUESTIONS.find((p) => p.query.toLowerCase() === qLower);
      if (preset) {
        botResponse = preset.response;
        if (preset.actionTag === 'RESERVA_CONFIRMADA') hasConfetti = true;
      } else if (qLower.includes('cena') || qLower.includes('comida') || qLower.includes('apúntame') || qLower.includes('apuntame')) {
        botResponse = `¡Anotadísimo! Te dejo confirmado para el próximo acto gastronómico en la sede con menú registrado. ¡A disfrutar de la fiesta! 🍽️🐪`;
        hasConfetti = true;
      } else if (qLower.includes('cuota') || qLower.includes('remesa') || qLower.includes('pagar') || qLower.includes('banco')) {
        botResponse = `Tu cuota anual está domiciliada en 10 remesas periódicas. Tienes tu portal al día y puedes consultar el desglose exacto siempre que quieras. 💰✅`;
      } else if (qLower.includes('traje') || qLower.includes('chilaba') || qLower.includes('gala')) {
        botResponse = `👘 Recuerda el kit oficial: chilaba de satén turquesa oficial, fez azul, calcetines ejecutivos altos blancos y zapato oficial de piel. ¡Sin excepciones de indumentaria!`;
      } else if (qLower.includes('hola') || qLower.includes('buenas') || qLower.includes('qué tal')) {
        botResponse = `¡Ey qué pasa! 👋 Aquí El Festeret listo para resolverte cualquier duda de horarios, cenas, trajes o secretaría de la comparsa. ¿Qué necesitas hoy? 🐪`;
      } else {
        botResponse = `¡Oído! Como Copiloto IA de tu comparsa conozco al milímetro tus actas, estatutos, censo y fechas oficiales. Pregúntame sobre cualquier acto o cuota y te lo digo al instante. 🐪✨`;
      }

      const botTime = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
      const botMsg: Message = {
        id: `b_${Date.now()}`,
        sender: 'bot',
        text: botResponse,
        time: botTime
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);

      if (hasConfetti) {
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch {}
      }
    }, 900);
  };

  return (
    <section id="simulador" className="py-20 md:py-28 bg-[#090d16] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulador Interactivo en Vivo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Pruébalo tú mismo. <br />
            <span className="text-amber-400">Así de fácil habla con tus festeros.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Haz clic en cualquiera de las preguntas de ejemplo o escribe la tuya propia en el chat para ver cómo responde El Festeret.
          </p>
        </div>

        {/* Main Grid: Prompts + Phone Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Quick prompt buttons */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Bot className="w-4 h-4 text-amber-400" />
                <span>Preguntas Frecuentes de Ejemplo:</span>
              </h3>
              <p className="text-xs text-slate-500">
                Pulsa cualquier tarjeta para enviársela al simulador:
              </p>
            </div>

            <div className="space-y-2.5">
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q.query)}
                  className="w-full text-left p-3.5 rounded-2xl bg-[#0f172a]/90 hover:bg-[#1e293b] border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white transition-all duration-200 group cursor-pointer shadow-sm hover:translate-x-1"
                >
                  <div className="flex items-center justify-between text-xs font-black text-amber-300 group-hover:text-amber-200">
                    <span>{q.label}</span>
                    <Send className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1 group-hover:text-slate-300">
                    "{q.query}"
                  </p>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-400/5 border border-amber-400/20 text-xs text-amber-200/90 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Memoria y Datos 100% Blindados</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                El bot solo responde a socios verificados por móvil, no da teléfonos privados de otros ni cruza datos de cuotas.
              </p>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-[380px] bg-[#0c1220] rounded-[44px] p-3.5 border-4 border-slate-700/60 shadow-2xl shadow-black/80 relative">
              
              {/* Phone speaker notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-900 mr-2" />
                <div className="w-8 h-1 rounded-full bg-slate-700" />
              </div>

              {/* Chat Screen */}
              <div className="bg-[#0b101c] rounded-[36px] overflow-hidden border border-white/5 flex flex-col h-[520px] relative">
                
                {/* Chat App Header */}
                <div className="bg-[#11192e] px-4 pt-8 pb-3 border-b border-white/10 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
                        🐪
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#11192e]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-xs text-white">El Festeret</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-bold">BOT</span>
                      </div>
                      <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                        <span>en línea</span>
                        <span className="text-slate-400">• Comparsa Taifas</span>
                      </p>
                    </div>
                  </div>

                  {/* Channel Switcher */}
                  <div className="flex items-center bg-[#090d16] p-0.5 rounded-lg border border-white/10 text-[10px] font-bold">
                    <button
                      onClick={() => setActiveChannel('telegram')}
                      className={`px-2 py-1 rounded-md transition-colors ${
                        activeChannel === 'telegram' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Telegram
                    </button>
                    <button
                      onClick={() => setActiveChannel('whatsapp')}
                      className={`px-2 py-1 rounded-md transition-colors ${
                        activeChannel === 'whatsapp' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>

                {/* Messages Stream */}
                <div className="flex-1 p-3.5 space-y-3 overflow-y-auto text-xs">
                  <div className="text-center my-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-medium text-slate-400">
                      Hoy · Chat en vivo
                    </span>
                  </div>

                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${
                          m.sender === 'user'
                            ? activeChannel === 'whatsapp'
                              ? 'bg-[#005c4b] text-white rounded-tr-xs'
                              : 'bg-sky-600 text-white rounded-tr-xs'
                            : 'bg-[#182238] text-slate-100 rounded-tl-xs border border-white/5'
                        }`}
                      >
                        <p className="whitespace-pre-line">{m.text}</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
                          <span>{m.time}</span>
                          {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-sky-300 inline" />}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-[#182238] border border-white/5 w-16 animate-pulse">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  )}

                  <div ref={chatBottomRef} />
                </div>

                {/* Chat Input Bar */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="p-2.5 bg-[#11192e] border-t border-white/10 flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Escribe un mensaje de prueba..."
                    className="flex-1 bg-[#090d16] border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400/50"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="w-8 h-8 rounded-full bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-slate-950 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
