import { useRef, useState } from 'react';


export interface PMUVisual {
  label: string;
  before: string;
  after: string;
}

interface BeforeAfterProps {
  visual: PMUVisual;
}

export function BeforeAfter({ visual }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={ref}
      role="slider"
      aria-label={`${visual.label} before and after slider`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={onKey}
      className="group relative h-[320px] w-full select-none overflow-hidden rounded-2xl border border-champagne-200 shadow-luxury outline-none md:h-[400px] focus-visible:ring-2 focus-visible:ring-champagne-400"
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
      onTouchStart={(e) => update(e.touches[0].clientX)}
    >
      {/* After (full) */}
      <div className="absolute inset-0">
        <img src={visual.after} alt={`${visual.label} after`} className="h-full w-full object-cover" />
      </div>
      {/* Before (clipped to left portion) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={visual.before} alt={`${visual.label} before`} className="h-full w-full object-cover" />
      </div>

      <span className="absolute left-3 top-3 z-20 rounded-full bg-ink-900/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">Before</span>
      <span className="absolute right-3 top-3 z-20 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow">After</span>
      <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/85 px-4 py-1 text-xs font-semibold text-ink-800 backdrop-blur">{visual.label}</span>

      <div className="absolute inset-y-0 z-10 w-1 bg-gold-gradient" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-luxury ring-2 ring-champagne-200">
          <span className="material-symbols-outlined text-champagne-600 text-base">drag_handle</span>
        </div>
      </div>
    </div>
  );
}

export const PMU_VISUALS: PMUVisual[] = [
  { label: 'Enhanced Brows', before: '/before_face.png', after: '/after_face.png' },
  { label: 'Naturally Tinted Lips', before: '/pmu_lips_before.png', after: '/pmu_lips_after.png' },
  { label: 'Hair GFC Treatment', before: '/hair_gfc_before.png', after: '/hair_gfc_after.png' },
];
