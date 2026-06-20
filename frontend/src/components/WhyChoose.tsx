import { useEffect } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { useRef, useState } from 'react';

const FEATURES = [
  { icon: 'calendar_today', label: '10+ Years Experience' },
  { icon: 'verified', label: 'Certified PMU Specialist' },
  { icon: 'face', label: 'Personalized Facial Mapping' },
  { icon: 'diamond', label: 'Natural-Looking Results' },
  { icon: 'biotech', label: 'Advanced Aesthetic Techniques' },
  { icon: 'reward', label: 'Premium Pigments & Safety Standards' },
];

const STATS = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'PMU Procedures' },
  { value: 40, suffix: '%', label: 'Selected Offers' },
  { value: 5, suffix: '', label: 'Core PMU Treatments' },
];

function StatBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => e.isIntersecting && (setStart(true), o.disconnect()), { threshold: 0.3 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {STATS.map((s) => (
        <Stat key={s.label} {...s} start={start} />
      ))}
    </div>
  );
}

function Stat({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const n = useCountUp(value, 1800, start);
  return (
    <div className="glass-card p-5 text-center">
      <div className="font-display text-4xl font-semibold gold-text">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium text-ink-600">{label}</div>
    </div>
  );
}

export function WhyChoose() {
  return (
    <section id="why" className="relative px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center">
          <span className="section-eyebrow">✦ Why Choose Our PMU Clinic</span>
          <h2 className="mt-3 section-title">Premium Permanent Makeup <span className="gold-text">Clinic In Vijayawada</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-600">
            Micropigmentation designed to enhance your natural features through precise facial mapping, advanced aesthetic
            techniques, and premium pigments. Every procedure is customized to create balanced, natural-looking, and
            long-lasting results while maintaining the highest safety standards.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.label}
              className="rounded-2xl border border-white/70 bg-white/70 p-5 text-center shadow-luxury backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-champagne-300 hover:shadow-luxury-lg"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-champagne-50 text-champagne-600 transition-colors hover:bg-gold-gradient hover:text-white">
                <span className="material-symbols-outlined text-xl">{f.icon}</span>
              </div>
              <div className="mt-3 text-sm font-medium leading-snug text-ink-800">{f.label}</div>
            </div>
          ))}
        </div>

        <StatBar />

        <div className="reveal mt-14 grid items-center gap-6 rounded-3xl border border-champagne-200 bg-gradient-to-r from-champagne-50 to-champagne-100 p-7 md:grid-cols-[1fr_auto_1fr] md:p-9">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 text-champagne-600 md:justify-start">
              <span className="material-symbols-outlined text-base">pin_drop</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Vijayawada</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">Moghalrajpuram · 3rd Floor, Above Apollo Pharmacy</h3>
          </div>
          <div className="hidden h-px w-full bg-champagne-200 md:block md:h-16 md:w-px" />
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center gap-2 text-champagne-600 md:justify-end">
              <span className="material-symbols-outlined text-base">schedule</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Open Daily</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">10:00 AM – 8:00 PM</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
