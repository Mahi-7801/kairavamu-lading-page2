import { useState, useMemo, useEffect } from 'react';
import { BeforeAfter, PMU_VISUALS } from './BeforeAfter';

/* ── Stars/sparkle particles ── */
interface Star { left: number; top: number; size: number; opacity: number; delay: number; dur: number; }
function SpaceParticles({ count = 60 }: { count?: number }) {
  const stars = useMemo<Star[]>(() =>
    Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      opacity: 0.15 + Math.random() * 0.65,
      delay: Math.random() * 8,
      dur: 4 + Math.random() * 6,
    })), [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animation: `pulse ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      {/* Larger glow stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={`big-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 3) * 28}%`,
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            background: i % 2 === 0 ? 'rgba(225,207,124,0.7)' : 'rgba(255,255,255,0.6)',
            boxShadow: i % 2 === 0 ? '0 0 6px 2px rgba(225,207,124,0.4)' : '0 0 6px 2px rgba(255,255,255,0.3)',
            animation: `pulse ${6 + i}s ease-in-out ${i * 1.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Per-treatment meta ── */
const TREATMENT_META: Record<string, { icon: string; tagline: string; desc: string; benefits: string[]; idealFor?: string[]; idealForLabel?: string; techniques?: string[]; price: string; priceNote: string; offer?: string }> = {
  'Lip Blush': {
    icon: 'mood',
    tagline: 'Enhance Natural Lip Colour & Definition',
    desc: 'Lip Blush is a semi-permanent cosmetic treatment designed to enhance the natural appearance of your lips. It can help improve lip definition, create a more balanced appearance, and provide a soft tint that looks fresh and natural. The goal is not to create heavily coloured lips but to enhance what is already there.',
    benefits: ['Enhanced lip definition', 'Improved lip symmetry', 'Soft, natural-looking colour', 'Fresher appearance', 'Reduced need for daily lip products'],
    idealFor: ['Pale lips', 'Uneven lip tone', 'Loss of lip definition', 'Individuals seeking subtle enhancement'],
    idealForLabel: 'Suitable For',
    price: '₹20,000 – ₹40,000',
    priceNote: 'Based on pigmentation correction and technique',
    offer: 'Up To 25% OFF',
  },
  'Eyeliner PMU': {
    icon: 'remove_red_eye',
    tagline: 'Long-Lasting Definition for Beautifully Framed Eyes',
    desc: 'Eyeliner PMU enhances the natural beauty of the eyes by creating subtle definition along the lash line. The treatment is customized to suit your eye shape and desired style while maintaining a soft and elegant appearance. Ideal for individuals who regularly wear eyeliner and want to simplify their beauty routine.',
    benefits: ['Defined eyes', 'Enhanced lash line appearance', 'Reduced daily makeup application', 'Long-lasting results', 'Natural-looking enhancement'],
    price: '₹15,000 – ₹30,000',
    priceNote: 'Based on style and thickness',
  },
  'Brow Correction': {
    icon: 'auto_fix_high',
    tagline: 'Improve Previous PMU Brow Work',
    desc: 'Not all permanent makeup results meet expectations. Brow Correction treatments are designed to improve previous brow procedures by adjusting shape, colour, symmetry, or overall appearance. Our specialists carefully assess existing brow work before recommending the most appropriate correction approach.',
    benefits: ['Improved symmetry', 'Better colour balance', 'Enhanced brow shape', 'More natural-looking results'],
    idealFor: ['Uneven brows', 'Shape concerns', 'Colour inconsistencies', 'Faded pigment', 'Previous PMU dissatisfaction'],
    idealForLabel: 'Can Help Address',
    price: '₹10,000 – ₹25,000',
    priceNote: 'Based on correction complexity',
  },
};

export function Results() {
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);
  const active = PMU_VISUALS[activeTab];
  const meta = TREATMENT_META[active.label];

  return (
    <section
      id="results"
      className="relative overflow-hidden px-4 py-24 md:px-8"
      style={{ background: 'linear-gradient(145deg, #0a1f12 0%, #1d4631 40%, #163826 100%)', opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
    >
      {/* ── Space / star particles ── */}
      <SpaceParticles count={65} />

      {/* ── Liquid glow blobs ── */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-[100px]" style={{ background: 'rgba(29,70,49,0.6)' }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full blur-[100px]" style={{ background: 'rgba(225,207,124,0.06)' }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[130px]" style={{ background: 'rgba(42,89,56,0.35)' }} />

      <div className="relative mx-auto max-w-6xl">

        {/* ── Header ── */}
        <div className="fade-in-up text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            <span>✦</span> Before &amp; After Results
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-snug text-white md:text-5xl">
            Real Beauty{' '}
            <span style={{ background: 'linear-gradient(90deg, #f2e3a3, #e1cf7c, #c8b55a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Transformations
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-forest-100/70">
            Drag the slider to reveal the natural difference our PMU treatments make.
          </p>
        </div>

        {/* ── Treatment Tabs ── */}
        <div className="fade-in-up-delay-1 mt-10 flex flex-wrap justify-center gap-3">
          {PMU_VISUALS.map((v, i) => {
            const m = TREATMENT_META[v.label];
            return (
              <button
                key={v.label}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-gold-gradient text-ink-900 shadow-gold scale-105'
                    : 'border border-white/15 bg-white/8 text-white/80 hover:bg-white/15 hover:text-white backdrop-blur'
                }`}
                style={activeTab !== i ? { background: 'rgba(255,255,255,0.06)' } : undefined}
              >
                <span className="material-symbols-outlined text-sm">{m.icon}</span>
                {v.label}
              </button>
            );
          })}
        </div>

        {/* ── Main Two-Column Layout: Slider + Info ── */}
        <div className="fade-in-up-delay-2 mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">

          {/* Left — Slider */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:p-6" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
            <div className="mb-4 flex items-center justify-center gap-2 text-xs text-white/50">
              <span className="material-symbols-outlined text-base text-gold-400">swipe</span>
              Drag the slider left or right to compare
            </div>
            <BeforeAfter visual={active} />
            <div className="mt-4 flex justify-between text-[11px] font-semibold uppercase tracking-widest">
              <span className="text-white/40">Before</span>
              <span className="text-gold-400">After ✦</span>
            </div>
          </div>

          {/* Right — Treatment Info */}
          <div className="flex flex-col gap-4">
            {/* Tagline + Title */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{meta.tagline}</span>
              <h3 className="mt-1 font-display text-2xl font-semibold text-white md:text-3xl">{active.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-forest-100/70">{meta.desc}</p>
            </div>

            {/* Benefits */}
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {meta.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="material-symbols-outlined flex-shrink-0 text-base text-gold-400">check_circle</span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Ideal For */}
            {meta.idealFor && (
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-2">
                  {meta.idealForLabel ?? 'Ideal For'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {meta.idealFor.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/75" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Techniques */}
            {meta.techniques && (
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-2">Techniques</div>
                <div className="flex flex-wrap gap-2">
                  {meta.techniques.map((tc) => (
                    <span key={tc} className="rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs font-medium text-gold-300">
                      {tc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Price + CTA */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 px-4 py-3 mt-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div>
                {meta.offer && (
                  <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-forest-gradient px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md">
                    <span className="material-symbols-outlined text-xs">local_offer</span> {meta.offer}
                  </span>
                )}
                <div className="text-lg font-bold text-gold-400">{meta.price}</div>
                {meta.priceNote && <div className="text-[10px] text-white/40">{meta.priceNote}</div>}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-5 py-2.5 text-xs font-semibold text-ink-900 transition-transform hover:scale-105 ml-auto"
              >
                Enquire <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Thumbnail quick-switch ── */}
        <div className="fade-in-up-delay-3 mt-8 grid grid-cols-4 gap-3">
          {PMU_VISUALS.map((v, i) => (
            <button
              key={v.label}
              onClick={() => setActiveTab(i)}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                activeTab === i ? 'border-gold-400 shadow-gold scale-[1.03]' : 'border-white/10 hover:border-gold-400/40'
              }`}
            >
              <img src={v.after} alt={v.label} className="h-20 w-full object-cover sm:h-28" />
              <div className={`absolute inset-0 flex items-end p-2 transition-all duration-300 ${activeTab === i ? 'bg-ink-900/50' : 'bg-ink-900/40 group-hover:bg-ink-900/30'}`}>
                <span className="text-[10px] font-semibold text-white leading-tight">{v.label}</span>
              </div>
              {activeTab === i && (
                <div className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500">
                  <span className="material-symbols-outlined text-[11px] text-ink-900">check</span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="fade-in-up-delay-3 mt-12 text-center">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold tracking-wide text-ink-900 shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-luxury">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            Book Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}
