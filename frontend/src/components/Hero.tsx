import { BeautyParticles } from './BeautyParticles';
import { HeroCarousel } from './HeroCarousel';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '../utils';
import { GreenGlowAnimation } from './GreenGlowAnimation';

const BADGES = [
  { icon: 'diamond', label: 'Natural Looking Results' },
  { icon: 'reward', label: 'Premium Pigments' },
  { icon: 'verified', label: 'Safe Procedures' },
  { icon: 'verified', label: 'Experienced Specialists' },
];

const SOLUTIONS = ['PMU Brows', 'Lip Blush', 'Eyeliner PMU', 'Brow Correction', 'Scalp Micropigmentation', 'Personalized Design'];

export function Hero() {
  return (
    <>
    <section id="home" className="relative overflow-hidden bg-cream-radial pt-28 md:pt-32">
      {/* Premium Green Liquid Glow Animation */}
      <GreenGlowAnimation />
      <BeautyParticles count={22} />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cream-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cream-200/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-white/70 px-4 py-1.5 text-xs font-medium text-gold-700 backdrop-blur animate-fade-in">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            Kairavam PMU Academy & Aesthetic Studio · Vijayawada
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.08] text-ink-900 sm:text-6xl lg:text-[4rem] animate-fade-up">
            Wake Up Beautiful
            <br />
            <span className="shimmer-text">Every Day</span>
            <br />
            With Permanent Makeup
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-600 lg:mx-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Wake up to effortlessly beautiful brows, lips, and eyeliner — expertly crafted permanent makeup designed to enhance your natural features with long-lasting, natural-looking results at Vijayawada's premier aesthetic studio.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {SOLUTIONS.map((s) => (
              <span key={s} className="rounded-full border border-cream-200 bg-white/70 px-3 py-1 text-xs font-medium text-ink-700 backdrop-blur">
                ✔ {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="btn-gold w-full sm:w-auto">Book Consultation</a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener" className="btn-whatsapp w-full sm:w-auto">
              <WhatsAppIcon className="text-base" /> WhatsApp Now
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {BADGES.map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-2 rounded-2xl border border-white/70 bg-white/55 p-3 text-center backdrop-blur">
                <span className="material-symbols-outlined text-gold-600 text-xl">{b.icon}</span>
                <span className="text-[11px] font-medium leading-tight text-ink-700">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <HeroCarousel />
          <div className="absolute -right-2 top-4 z-10 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 shadow-luxury backdrop-blur-md animate-float sm:-right-4 sm:top-6 sm:px-4 sm:py-2">
            <span className="text-gold-500 text-sm sm:text-base">★★★★★</span>
            <span className="text-[11px] font-semibold text-ink-800 sm:text-xs">5.0 Rated</span>
          </div>
        </div>
      </div>

      <a href="#why" className="mx-auto mb-6 flex w-fit flex-col items-center gap-1 text-gold-600 animate-fade-in" aria-label="Scroll down">
        <span className="text-[10px] uppercase tracking-[0.25em]">Discover</span>
        <span className="material-symbols-outlined text-xl animate-bounce">expand_more</span>
      </a>
    </section>

    {/* ── Good Candidate? Section ─────────────────────────────────── */}
    <section id="good-candidate" className="relative overflow-hidden bg-forest-600 px-4 py-20 md:px-8">
      {/* Animated subtle forest glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-forest-400/20 blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl animate-pulse" style={{ animationDuration: '13s' }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-forest-500/30 blur-[100px] animate-liquid-1" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            <span className="text-base">✦</span> Good Candidate?
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-snug text-white md:text-5xl">
            Who Is A{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #f2e3a3 0%, #e1cf7c 50%, #c8b55a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Good Candidate?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-forest-100/80">
            Our treatments are ideal for anyone seeking advanced aesthetic solutions with natural-looking results.
          </p>
        </div>

        {/* Candidate cards grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { icon: 'face', label: 'Sparse Eyebrows' },
            { icon: 'edit', label: 'Uneven Brows' },
            { icon: 'colorize', label: 'Lip Pigmentation' },
            { icon: 'water_drop', label: 'Pale Lips' },
            { icon: 'healing', label: 'Hair Thinning' },
            { icon: 'visibility', label: 'Visible Scalp' },
            { icon: 'arrow_back', label: 'Receding Hairline' },
            { icon: 'auto_fix_high', label: 'Previous PMU Concerns' },
            { icon: 'work', label: 'Busy Professionals' },
            { icon: 'spa', label: 'Low Maintenance Beauty' },
            { icon: 'remove_red_eye', label: 'Eye Definition Seekers' },
            { icon: 'self_improvement', label: 'Natural Look Lovers' },
          ].map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-white/10 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            >
              <span className="material-symbols-outlined text-2xl text-gold-400 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <span className="text-[13px] font-medium leading-tight text-forest-50">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold tracking-wide text-ink-900 shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-luxury"
          >
            Book Free Consultation
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
          <a
            href="#treatments"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15"
          >
            Explore Treatments
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
