

const EXPERTISE = ['10+ Years Experience', '15K+ Happy Clients', '50+ Treatments Offered'];

export function AboutDoctor() {
  return (
    <section id="about-doctor" className="relative overflow-hidden bg-white px-4 py-20 md:px-8">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-forest-100/50 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal relative mx-auto max-w-sm">
          <div className="absolute -inset-3 rounded-[2.3rem] bg-gold-gradient opacity-20 blur-2xl" />
          <img src="/cosmetologist-yamini.jpg" alt="Yamini Kiran Pasupuleti" className="relative h-[480px] w-full rounded-[2.3rem] object-cover shadow-luxury-lg sm:h-[520px]" />
          <div className="absolute -bottom-4 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/70 bg-white/90 p-4 text-center shadow-luxury backdrop-blur-md">
            <div className="font-script text-3xl text-gold-600 leading-none">Yamini</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-600">Cosmetologist & Aesthetic</div>
          </div>
        </div>

        <div className="reveal">
          <span className="section-eyebrow">✦ About The Doctor</span>
          <h2 className="mt-3 section-title">Yamini Kiran <span className="forest-text">Pasupuleti</span></h2>
          <p className="mt-3 font-display text-xl italic text-ink-700">
            Cosmetologist & Aesthetic
          </p>
          <p className="mt-4 leading-relaxed text-ink-600">
            With over a decade of experience in aesthetic skincare and cosmetic treatments, Yamini specializes in advanced laser treatments, skin rejuvenation, and personalized beauty solutions. Her client-focused approach helps individuals achieve healthy, radiant, and natural-looking results tailored to their unique skin concerns.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {EXPERTISE.map((e) => (
              <div key={e} className="flex items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50/60 p-4">
                <span className="material-symbols-outlined text-gold-600 text-xl">check_circle</span>
                <div className="text-sm font-semibold text-ink-800">{e}</div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
