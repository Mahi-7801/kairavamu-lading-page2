import { BeautyParticles } from './BeautyParticles';
import { HeroCarousel } from './HeroCarousel';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '../utils';

const BADGES = [
  { icon: 'diamond', label: 'Natural Looking Results' },
  { icon: 'reward', label: 'Premium Pigments' },
  { icon: 'verified', label: 'Safe Procedures' },
  { icon: 'verified', label: 'Experienced Specialists' },
];

const SOLUTIONS = ['PMU Brows', 'Lip Blush', 'Eyeliner PMU', 'Brow Correction', 'Scalp Micropigmentation', 'Personalized Design'];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-champagne-radial pt-28 md:pt-32">
      <BeautyParticles count={22} />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-champagne-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-champagne-200/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-champagne-300 bg-white/70 px-4 py-1.5 text-xs font-medium text-champagne-700 backdrop-blur animate-fade-in">
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
              <span key={s} className="rounded-full border border-champagne-200 bg-white/70 px-3 py-1 text-xs font-medium text-ink-700 backdrop-blur">
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
                <span className="material-symbols-outlined text-champagne-600 text-xl">{b.icon}</span>
                <span className="text-[11px] font-medium leading-tight text-ink-700">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <HeroCarousel />
          <div className="absolute -right-2 top-4 z-10 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 shadow-luxury backdrop-blur-md animate-float sm:-right-4 sm:top-6 sm:px-4 sm:py-2">
            <span className="text-champagne-500 text-sm sm:text-base">★★★★★</span>
            <span className="text-[11px] font-semibold text-ink-800 sm:text-xs">5.0 Rated</span>
          </div>
        </div>
      </div>

      <a href="#why" className="mx-auto mb-6 flex w-fit flex-col items-center gap-1 text-champagne-600 animate-fade-in" aria-label="Scroll down">
        <span className="text-[10px] uppercase tracking-[0.25em]">Discover</span>
        <span className="material-symbols-outlined text-xl animate-bounce">expand_more</span>
      </a>
    </section>
  );
}
