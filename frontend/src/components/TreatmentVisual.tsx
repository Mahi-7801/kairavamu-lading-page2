interface TreatmentVisualProps {
  type: 'brows' | 'lips' | 'eyeliner' | 'correction' | 'smp';
  className?: string;
}

const ACCENTS = {
  brows: { primary: '#9f6837', secondary: '#5e3e26', glow: '#e0b87a' },
  lips: { primary: '#d4645a', secondary: '#bd4a44', glow: '#eeb0a7' },
  eyeliner: { primary: '#3d372f', secondary: '#16110f', glow: '#a39a88' },
  correction: { primary: '#9f6837', secondary: '#d4645a', glow: '#ebd2a8' },
  smp: { primary: '#7a7060', secondary: '#3d372f', glow: '#c5bfb3' },
};

function FaceBase({ tone = '#f7e6d8', cx = 200, cy = 200 }: { tone?: string; cx?: number; cy?: number }) {
  return <ellipse cx={cx} cy={cy} rx="110" ry="140" fill={tone} stroke="#e0b87a" strokeWidth="1.5" opacity="0.95" />;
}

function ScalpBase({ glow }: { glow: string }) {
  return (
    <>
      <defs>
        <radialGradient id="smpHead" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f7e6d8" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="200" rx="120" ry="135" fill="url(#smpHead)" stroke="#e0b87a" strokeWidth="1.5" />
    </>
  );
}

export function TreatmentVisual({ type, className }: TreatmentVisualProps) {
  const a = ACCENTS[type];
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-hidden>
      <defs>
        <linearGradient id={`bg-${type}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf4e8" />
          <stop offset="100%" stopColor="#fdfbf7" />
        </linearGradient>
        <radialGradient id={`g-${type}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={a.glow} stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fdfbf7" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#bg-${type})`} />
      <rect width="400" height="400" fill={`url(#g-${type})`} />

      {type === 'brows' && (
        <g>
          <FaceBase />
          <defs>
            <linearGradient id="tbL" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor={a.primary} stopOpacity="0.7" />
              <stop offset="100%" stopColor={a.secondary} />
            </linearGradient>
            <linearGradient id="tbR" x1="1" x2="0" y1="0" y2="0">
              <stop offset="0%" stopColor={a.primary} stopOpacity="0.7" />
              <stop offset="100%" stopColor={a.secondary} />
            </linearGradient>
          </defs>
          {/* Microblading strokes (hair-like) */}
          <g stroke={a.secondary} strokeWidth="1" opacity="0.6" strokeLinecap="round">
            {Array.from({ length: 10 }).map((_, i) => {
              const x = 122 + i * 5.5;
              return <line key={`l${i}`} x1={x} y1="172" x2={x - 3} y2="158" />;
            })}
            {Array.from({ length: 10 }).map((_, i) => {
              const x = 225 + i * 5.5;
              return <line key={`r${i}`} x1={x} y1="172" x2={x + 3} y2="158" />;
            })}
          </g>
          <path d="M 118 164 Q 145 154 178 160 Q 175 168 142 172 Z" fill="url(#tbL)" />
          <path d="M 222 160 Q 255 154 282 164 Q 258 172 225 168 Z" fill="url(#tbR)" />
        </g>
      )}

      {type === 'lips' && (
        <g>
          <FaceBase />
          <defs>
            <linearGradient id="tlip" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={a.glow} />
              <stop offset="50%" stopColor={a.primary} />
              <stop offset="100%" stopColor={a.secondary} stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path d="M 162 243 Q 175 232 195 238 Q 200 234 205 238 Q 225 232 238 243 Q 225 258 200 268 Q 175 258 162 243 Z" fill="url(#tlip)" />
          <path d="M 165 245 Q 200 248 235 245" fill="none" stroke={a.secondary} strokeWidth="1" opacity="0.5" />
          <ellipse cx="200" cy="245" rx="14" ry="3" fill="#fbeae7" opacity="0.4" />
        </g>
      )}

      {type === 'eyeliner' && (
        <g>
          <FaceBase />
          <ellipse cx="165" cy="190" rx="22" ry="11" fill="white" stroke="#c5bfb3" strokeWidth="1.2" />
          <ellipse cx="235" cy="190" rx="22" ry="11" fill="white" stroke="#c5bfb3" strokeWidth="1.2" />
          <circle cx="165" cy="190" r="6" fill={a.primary} />
          <circle cx="235" cy="190" r="6" fill={a.primary} />
          {/* Winged liner */}
          <path d="M 143 192 Q 165 200 187 192" fill="none" stroke={a.secondary} strokeWidth="3" strokeLinecap="round" />
          <path d="M 145 191 L 140 184 L 148 188 Z" fill={a.secondary} />
          <path d="M 213 192 Q 235 200 257 192" fill="none" stroke={a.secondary} strokeWidth="3" strokeLinecap="round" />
          <path d="M 255 191 L 260 184 L 252 188 Z" fill={a.secondary} />
          <g stroke={a.secondary} strokeWidth="1.5" strokeLinecap="round">
            <line x1="150" y1="180" x2="148" y2="173" />
            <line x1="165" y1="177" x2="165" y2="170" />
            <line x1="180" y1="180" x2="182" y2="174" />
            <line x1="250" y1="180" x2="252" y2="173" />
            <line x1="235" y1="177" x2="235" y2="170" />
            <line x1="220" y1="180" x2="218" y2="174" />
          </g>
        </g>
      )}

      {type === 'correction' && (
        <g>
          <FaceBase />
          {/* Old faded/discolored brow remnants (left lighter, right corrected) */}
          <path d="M 118 164 Q 145 158 178 162" fill="none" stroke="#7d5230" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" strokeDasharray="3 5" />
          <defs>
            <linearGradient id="corrL" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#9f6837" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#5e3e26" />
            </linearGradient>
          </defs>
          <path d="M 222 160 Q 255 154 282 164 Q 258 172 225 168 Z" fill="url(#corrL)" />
          {/* correction arrow */}
          <path d="M 178 150 Q 200 138 220 150" fill="none" stroke={a.primary} strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
          <polygon points="220,150 214,146 214,154" fill={a.primary} />
        </g>
      )}

      {type === 'smp' && (
        <g>
          <ScalpBase glow={a.glow} />
          {/* Density dots — clustered follicle illusion */}
          <g fill={a.secondary}>
            {Array.from({ length: 220 }).map((_, i) => {
              const angle = (i * 0.285) % (Math.PI * 2);
              const radius = 15 + (i % 9) * 12;
              const x = 200 + Math.cos(angle) * radius * (i % 2 === 0 ? 1 : 0.85);
              const y = 150 + ((i * 7) % 90) + Math.sin(angle) * radius * 0.6;
              return <circle key={i} cx={x} cy={y} r={1.6} opacity={0.55 + ((i % 5) / 10)} />;
            })}
          </g>
          {/* Hairline */}
          <path d="M 110 160 Q 200 110 290 160" fill="none" stroke={a.primary} strokeWidth="2" opacity="0.6" />
        </g>
      )}
    </svg>
  );
}
