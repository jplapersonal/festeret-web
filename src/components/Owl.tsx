interface OwlProps {
  size?: number;
  /** "avatar": crimson disc + cream owl. "mark": owl only, for placing on any background. */
  variant?: 'avatar' | 'mark';
  /** stroke/fill colour of the owl in "mark" variant */
  color?: string;
  className?: string;
  title?: string;
}

const CREAM = '#f8fafc';
const GRANA = '#f43f5e';
const ORO = '#f59e0b';
const INK = '#09090b';

/**
 * El Festeret — the wise owl. Hand-built geometry on a 100×100 grid:
 * head ring + ear tufts, gold spectacle-eyes with half-closed lids ("ya me lo sé"),
 * beak, and the festive neckerchief knot shared by every fiesta.
 */
export function Owl({ size = 40, variant = 'avatar', color, className = '', title = 'El Festeret' }: OwlProps) {
  const line = variant === 'avatar' ? CREAM : color ?? INK;
  const hole = variant === 'avatar' ? GRANA : 'transparent';
  const eyeWhite = variant === 'avatar' ? CREAM : color ?? INK;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
      {variant === 'avatar' && <circle cx="50" cy="50" r="50" fill={GRANA} />}
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* ear tufts */}
        <path d="M32 28 L28.5 17 L40 23.5" fill={hole} stroke={line} strokeWidth="4.5" />
        <path d="M68 28 L71.5 17 L60 23.5" fill={hole} stroke={line} strokeWidth="4.5" />
        {/* head */}
        <circle cx="50" cy="48" r="27" fill={hole} stroke={line} strokeWidth="4.5" />
        {/* spectacle eyes */}
        {[38, 62].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="46" r="10.5" fill={hole} stroke={line} strokeWidth="3.5" />
            <circle cx={cx} cy="46" r="6.6" fill="none" stroke={ORO} strokeWidth="3.4" />
            {/* half-closed lid: lower half-disc + lid line */}
            <path d={`M${cx - 4.2} 46 A4.2 4.2 0 0 0 ${cx + 4.2} 46 Z`} fill={eyeWhite} />
            <circle cx={cx} cy="47.6" r="1.7" fill={variant === 'avatar' ? INK : hole === 'transparent' ? '#fff' : INK} />
            <line x1={cx - 4.8} y1="46" x2={cx + 4.8} y2="46" stroke={line} strokeWidth="2.2" />
          </g>
        ))}
        {/* beak */}
        <path d="M45.5 58 L54.5 58 L50 65.5 Z" fill={line} />
        {/* neckerchief knot + tails */}
        <circle cx="50" cy="79" r="3.6" fill={ORO} />
        <path d="M46.5 81.5 L42.5 91 L49 86 Z M53.5 81.5 L57.5 91 L51 86 Z" fill={ORO} />
      </g>
    </svg>
  );
}
