import { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, CheckCheck, RefreshCw, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  badge?: string;
  isAudio?: boolean;
}

const PRESET_PROMPTS = [
  {
    icon: '🎺',
    label: 'Horario y formación',
    query: '¿A qué hora salimos en la Diana y dónde formamos?',
    response: '¡Hombre Jose! 👋 La Diana de Gala arranca a las **07:30h** desde la Plaza Mayor. Nuestra comparsa forma en el **4º bloque (delante de la Banda de Música)**. ¡Recuerda llevar la chilaba oficial y estar 15 min antes para pasar lista! 🥁',
    badge: 'Horario Oficial'
  },
  {
    icon: '🧵',
    label: 'Tela de chilaba de diario',
    query: '¿Dónde y cómo pido la tela azul turquesa para la chilaba de diario?',
    response: 'Según el acta de asamblea de mayo: la tela oficial es **Satén Turquesa Festero (Ref. TF-502)**. Se encarga directamente en Tejidos La Purísima diciendo que eres de nuestra comparsa (tienes un 15% de descuento aplicado). ¡Pregunta por Vicente!',
    badge: 'Indumentaria Oficial'
  },
  {
    icon: '🥘',
    label: 'Cena de Gala & Celíaco',
    query: 'Apúntame a la cena de gala del sábado, pero soy celíaco',
    response: '¡Anotado Jose! 🎉 Quedas registrado en la mesa de tu escuadra con menú **100% Sin Gluten (Alergia celiaquía confirmada)** para el catering. Recibirás el recordatorio el viernes.',
    badge: 'Reserva Confirmada'
  },
  {
    icon: '💳',
    label: 'Estado de mi cuota',
    query: '¿Tengo al día la cuota de la escuadra?',
    response: '✅ Todo en orden, Jose. Tienes la cuota anual 2026/2027 domiciliada y el recibo de septiembre ya está regularizado. ¡A disfrutar!',
    badge: 'Tesorería al día'
  }
];

export const ChatSimulator: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: '¡Hola festero! 👋 Soy **El Festeret**, el copiloto oficial de tu comparsa. ¿Qué necesitas consultar hoy? (Horarios de diana, cenas, telas, cuotas o normas de desfile)',
      time: '12:00',
      badge: 'El Festeret IA'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    // Find if it matches a preset or generate contextual response
    const matchedPreset = PRESET_PROMPTS.find(p => p.query.toLowerCase() === text.toLowerCase());

    setTimeout(() => {
      let botReply = '';
      let badge = 'Oficial';

      if (matchedPreset) {
        botReply = matchedPreset.response;
        badge = matchedPreset.badge;
      } else {
        botReply = `¡Entendido! Consultando en el histórico de actas y normativas de la comparsa: para "${text}", todo está registrado y validado. Te mantendremos informado por este mismo chat. 🎉`;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        badge: badge
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);

      // Trigger celebratory confetti for interactive delight
      try {
        confetti({
          particleCount: 35,
          spread: 55,
          origin: { y: 0.75 },
          colors: ['#2dd4bf', '#fbbf24', '#38bdf8']
        });
      } catch {
        // ignore in SSR or headless
      }
    }, 1100);
  };

  const handleReset = () => {
    setMessages([
      {
        id: '1',
        sender: 'bot',
        text: '¡Hola festero! 👋 Soy **El Festeret**, el copiloto oficial de tu comparsa. ¿Qué necesitas consultar hoy? (Horarios de diana, cenas, telas, cuotas o normas de desfile)',
        time: '12:00',
        badge: 'El Festeret IA'
      }
    ]);
  };

  return (
    <section id="demo" className="py-24 relative bg-[#050811] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Simulador Interactivo en Vivo
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            Pruébalo tú mismo en{' '}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
              WhatsApp
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Haz clic en cualquiera de las preguntas habituales de una comparsa o escribe la tuya propia.
            Observa la precisión y el tono festero con el que responde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Preset Questions Selector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <span>🎯</span> Preguntas típicas de comparsistas:
                </h3>
                <button 
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-teal-300 flex items-center gap-1 transition-colors cursor-pointer"
                  title="Reiniciar chat"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reiniciar
                </button>
              </div>

              <div className="space-y-2.5">
                {PRESET_PROMPTS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(item.query)}
                    className="w-full text-left p-3.5 rounded-2xl bg-slate-800/60 hover:bg-teal-950/40 border border-white/5 hover:border-teal-500/30 transition-all duration-200 group flex items-start gap-3 cursor-pointer"
                  >
                    <span className="text-xl p-1.5 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-teal-300 mb-0.5">{item.label}</p>
                      <p className="text-xs text-slate-300 line-clamp-1 group-hover:text-white transition-colors">{item.query}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  IA entrenada con actas y estatutos
                </span>
                <span>⚡ Latencia ~1.2s</span>
              </div>
            </div>

            {/* Festero Quality Guarantee Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-950/40 to-slate-900 border border-teal-500/20 text-xs text-slate-300 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-teal-500/20 flex items-center justify-center text-amber-300 shrink-0">
                <Heart className="w-4 h-4 fill-amber-300" />
              </div>
              <p>
                <strong className="text-white">Tono 100% festero y cercano:</strong> Habla como un miembro más de la comparsa, respetando jerarquías y tradiciones.
              </p>
            </div>
          </div>

          {/* Right Column: Mobile WhatsApp Frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[400px] h-[590px] rounded-[44px] bg-[#0c1322] border-[7px] border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(20,184,166,0.15)] flex flex-col overflow-hidden relative">
              
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-30 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-600 rounded-full" />
              </div>

              {/* WhatsApp Header */}
              <div className="pt-8 pb-3 px-4 bg-[#0d1e2e] border-b border-white/10 flex items-center justify-between text-white shrink-0 z-20">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-amber-300 p-0.5">
                      <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-lg">
                        🎺
                      </div>
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0d1e2e]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm tracking-tight">El Festeret IA</h4>
                      <span className="text-[9px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded-full font-bold">Oficial</span>
                    </div>
                    <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                      <span>en línea</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span className="bg-slate-800 px-2 py-1 rounded-lg text-[10px] text-slate-300 font-mono">WhatsApp</span>
                </div>
              </div>

              {/* Chat Message Stream */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#080e18] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
                
                <div className="text-center my-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-white/5">
                    Hoy · Comparsa Oficial
                  </span>
                </div>

                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs shadow-md ${
                        m.sender === 'user'
                          ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-tr-none'
                          : 'bg-[#152336] text-slate-100 rounded-tl-none border border-white/10'
                      }`}
                    >
                      {m.badge && (
                        <div className="mb-1 text-[9px] font-bold text-amber-300 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{m.badge}</span>
                        </div>
                      )}
                      
                      <p className="leading-relaxed whitespace-pre-line font-sans">
                        {m.text}
                      </p>

                      <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-slate-400">
                        <span>{m.time}</span>
                        {m.sender === 'user' && (
                          <CheckCheck className="w-3 h-3 text-teal-300" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1.5 bg-[#152336] border border-white/10 rounded-2xl rounded-tl-none px-3.5 py-2.5 w-20">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" />
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <div className="p-2.5 bg-[#0d1e2e] border-t border-white/10 flex items-center gap-2 shrink-0">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe una pregunta festera..."
                  className="flex-1 bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputVal.trim() || isTyping}
                  className="w-8 h-8 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-slate-950 font-bold transition-all cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
