import { Owl } from './Owl';

export type TraceStep = { k: string; v: string };

interface AgentTraceProps {
  steps: TraceStep[];
  /** how many steps are completed; the next one shows a spinner */
  done: number;
  className?: string;
}

/** The "behind the scenes" panel: what the agent is doing before it answers. */
export function AgentTrace({ steps, done, className = '' }: AgentTraceProps) {
  const finished = steps.length > 0 && done >= steps.length;
  return (
    <div
      className={`rounded-2xl bg-paper-2/85 backdrop-blur-md ring-1 ring-ink/15 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] text-ink overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-paper/10">
        <Owl size={22} />
        <p className="font-mono text-[11px] tracking-wider uppercase text-paper/70">Festeret · agente</p>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-oro">
          <span className={`h-1.5 w-1.5 rounded-full ${finished || steps.length === 0 ? 'bg-emerald-400' : 'bg-oro node-lit'}`} />
          {steps.length === 0 ? 'escuchando' : finished ? 'hecho' : 'razonando'}
        </span>
      </div>
      <ol className="px-4 py-3.5 space-y-2.5 min-h-[168px]">
        {steps.slice(0, Math.min(done + 1, steps.length)).map((s, i) => (
          <li key={`${s.k}-${i}`} className="step-in flex gap-2.5 text-[12.5px] leading-snug">
            <span className="mt-[3px] h-3.5 w-3.5 shrink-0 grid place-items-center">
              {i < done ? (
                <span className="text-emerald-400 text-[11px]">✓</span>
              ) : (
                <span className="spinner block h-3 w-3 rounded-full border-[1.5px] border-oro/30 border-t-oro" />
              )}
            </span>
            <span className="min-w-0">
              <span className="font-mono text-oro">{s.k}</span>
              <span className="text-paper/45"> → </span>
              <span className="text-paper/85">{s.v}</span>
            </span>
          </li>
        ))}
        {steps.length === 0 && <li className="font-mono text-[12px] text-paper/40">esperando un mensaje…</li>}
      </ol>
    </div>
  );
}
