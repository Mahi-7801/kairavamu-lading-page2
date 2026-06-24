

const STEPS = [
  { icon: 'checklist', title: 'Consultation & Facial Assessment', desc: 'Understand your goals, assess features and skin.' },
  { icon: 'draw', title: 'Custom Design Mapping', desc: 'Personalized symmetry analysis and shape design.' },
  { icon: 'palette', title: 'Color Selection', desc: 'Premium pigment selection matching your tone.' },
  { icon: 'brush', title: 'PMU Procedure', desc: 'Precise, hygienic procedure with advanced techniques.' },
  { icon: 'favorite', title: 'Healing & Follow-Up', desc: 'Guided aftercare and healing monitoring.' },
  { icon: 'refresh', title: 'Touch-Up Session', desc: 'Refinement touch-up if required for perfect results.' },
];

export function Procedure() {
  return (
    <section id="procedure" className="relative overflow-hidden bg-white px-4 py-20 md:px-8">
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-cream-100/50 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center">
          <span className="section-eyebrow">✦ PMU Process</span>
          <h2 className="mt-3 section-title">Your Journey To <span className="gold-text">Effortless Beauty</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-600">A meticulous, six-step process designed for safety, comfort and stunning results.</p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cream-300 via-gold-400 to-cream-300 md:block" />
          <div className="grid gap-6 md:grid-cols-2">
            {STEPS.map((s, i) => (
              <div key={s.title} className={`reveal flex gap-4 ${i % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`} style={{ transitionDelay: `${i * 0.25}s` }}>
                <div className="relative flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-white shadow-gold">
                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                  </div>
                  <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-gold-700 shadow">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1 rounded-2xl border border-white/70 bg-white/70 p-5 shadow-luxury backdrop-blur transition-all hover:-translate-y-1 hover:border-cream-300">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gold-600">Step {i + 1}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
