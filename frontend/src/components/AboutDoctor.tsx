

const EXPERTISE = ['10+ Years Experience', 'Certified PMU Specialist', 'Personalized Facial Mapping', 'Natural-Looking Results', 'Advanced Aesthetic Techniques', 'Premium Pigments & Safety Standards'];

export function AboutDoctor() {
  return (
    <section id="about-doctor" className="relative overflow-hidden bg-white px-4 py-20 md:px-8">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-rosegold-100/50 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal relative mx-auto max-w-sm">
          <div className="absolute -inset-3 rounded-[2.3rem] bg-gold-gradient opacity-20 blur-2xl" />
          <img src="/cosmetologist-yamini.jpg" alt="Dr. Yamini Kiran Pasupuleti" className="relative h-[480px] w-full rounded-[2.3rem] object-cover shadow-luxury-lg sm:h-[520px]" />
          <div className="absolute -bottom-4 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/70 bg-white/90 p-4 text-center shadow-luxury backdrop-blur-md">
            <div className="font-script text-3xl text-champagne-600 leading-none">Dr. Yamini</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-600">PMU Specialist</div>
          </div>
        </div>

        <div className="reveal">
          <span className="section-eyebrow">✦ About The Doctor</span>
          <h2 className="mt-3 section-title">Dr. Yamini Kiran <span className="emerald-text">Pasupuleti</span></h2>
          <p className="mt-3 font-display text-xl italic text-ink-700">
            PG Diploma in Cosmetology & Aesthetics · 10+ Years Experience
          </p>
          <p className="mt-4 leading-relaxed text-ink-600">
            Dr. Yamini specializes in aesthetic enhancement procedures and personalized beauty solutions that enhance
            facial harmony while maintaining a natural appearance. Each treatment blends artistic precision with
            advanced PMU techniques and premium pigments.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {EXPERTISE.map((e) => (
              <div key={e} className="flex items-center gap-3 rounded-2xl border border-champagne-200 bg-champagne-50/60 p-4">
                <span className="material-symbols-outlined text-champagne-600 text-xl">check_circle</span>
                <div className="text-sm font-semibold text-ink-800">{e}</div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
