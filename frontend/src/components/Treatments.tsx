
import { useRef, useState, useEffect } from 'react';
import { TreatmentVisual } from './TreatmentVisual';

type VisualType = 'brows' | 'lips' | 'eyeliner' | 'correction' | 'smp' | 'carbon' | 'laser' | 'hair' | 'gfc' | 'transplant';

interface Treatment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  visual: VisualType;
  image: string;
  benefits: string[];
  techniques?: string[];
  offer?: string;
  accent: 'gold' | 'rose';
  reverse?: boolean;
}

const TREATMENTS: Treatment[] = [
  {
    id: 'carbon-laser',
    name: 'Carbon Laser',
    tagline: 'Deep Cleansing · Glow · Pore Refinement',
    description: 'Advanced carbon peel laser treatment for deep cleansing, oil control and instant skin brightening.',
    visual: 'carbon',
    image: '/carbon-peel.jpg',
    benefits: ['Deep Cleansing & Oil Control', 'Instant Glow & Skin Brightening', 'Minimizes Pores', 'Improves Skin Texture'],
    offer: 'Up To 40% OFF',
    accent: 'gold',
  },
  {
    id: 'laser-toning',
    name: 'Laser Toning',
    tagline: 'Pigmentation · Brightening · Even Tone',
    description: 'Reduce pigmentation, uneven skin tone and acne marks with advanced laser toning for a natural glow.',
    visual: 'laser',
    image: '/laser-toning.jpg',
    benefits: ['Reduces Pigmentation & Uneven Tone', 'Improves Acne Marks & Texture', 'Brightens Skin', 'Adds Natural Glow'],
    offer: 'Up To 40% OFF',
    accent: 'rose',
    reverse: true,
  },
  {
    id: 'laser-hair-reduction',
    name: 'Laser Hair Reduction',
    tagline: 'Long Term · Smooth Skin · No Ingrown',
    description: 'Permanent hair reduction solution — no ingrown hairs, no skin darkening, saves time and effort.',
    visual: 'hair',
    image: '/laser-uhr1.jpg',
    benefits: ['Long Term Hair Reduction', 'No Ingrown Hair', 'No Skin Darkening', 'Saves Time & Effort'],
    offer: 'Up To 40% OFF',
    accent: 'gold',
  },
  {
    id: 'hair-gfc',
    name: 'Hair GFC',
    tagline: 'Hair Fall Control · Regrowth · Density',
    description: 'Safe and natural treatment that reduces hair fall, promotes regrowth and improves hair density.',
    visual: 'gfc',
    image: '/Hair%20GFC.webp',
    benefits: ['Reduces Hair Fall', 'Promotes Hair Regrowth & Density', 'Safe & Natural Treatment', 'Visible Results'],
    offer: 'Up To 40% OFF',
    accent: 'rose',
    reverse: true,
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant',
    tagline: 'Permanent Growth · Natural Hairline',
    description: 'Permanent and natural hair growth solution that restores your hairline and confidence.',
    visual: 'transplant',
    image: '/hair-transplant.jpg',
    benefits: ['Permanent & Natural Hair Growth', 'Restores Hairline & Confidence', 'Low Maintenance Solution', 'Life Changing Results'],
    accent: 'gold',
  },
  {
    id: 'pmu-brows',
    name: 'PMU Brows',
    tagline: 'Microblading · Ombre · Combination',
    description: 'Perfectly shaped brows designed to complement your facial features — natural definition that frames your face beautifully.',
    visual: 'brows',
    image: '/pmu-eyebrows1.jpg',
    benefits: ['Saves Time Everyday', 'Perfect Shape & Symmetry', 'Long Lasting & Smudgeproof', 'Natural Looking Results'],
    techniques: ['Microblading', 'Ombre Brows', 'Combination Brows'],
    offer: 'Up To 25% OFF',
    accent: 'gold',
  },
  {
    id: 'lip-blush',
    name: 'PMU Lip Blush',
    tagline: 'Permanent Lip Color',
    description: 'Enhance your natural lip color and definition with advanced PMU lip blush techniques for a soft, youthful pout.',
    visual: 'lips',
    image: '/pmu-lip1.jpg',
    benefits: ['Defines Lip Borders', 'Enhances Natural Lip Color', 'Long Lasting & Low Maintenance', 'Beautiful Natural Tint'],
    offer: 'Up To 25% OFF',
    accent: 'rose',
    reverse: true,
  },
  {
    id: 'scalp-micropigmentation',
    name: 'Scalp Micropigmentation (SMP)',
    tagline: 'Non-Surgical · Instant Density',
    description: 'Instant fuller hair look with non-surgical scalp pigmentation — quick results, low maintenance, long lasting.',
    visual: 'smp',
    image: '/SMP-Scalp-Micro-Pigmentation.webp',
    benefits: ['Instant Fuller Hair Look', 'Quick Results, Non-Surgical', 'Low Maintenance & Long Lasting', 'Boosts Confidence'],
    accent: 'gold',
  },
];

const CANDIDATES = [
  'Sparse Eyebrows', 'Uneven Brows', 'Light Colored Lips', 'Lip Pigmentation Concerns',
  'Hair Thinning', 'Bald Patches', 'Busy Professionals', 'Low Maintenance Beauty Seekers',
];

function TreatmentCard({ t, delay, visible }: { t: Treatment; delay: number; visible: boolean }) {
  const accentText = t.accent === 'gold' ? 'text-champagne-600' : 'text-rosegold-500';
  const accentBg = t.accent === 'gold' ? 'bg-gold-gradient' : 'bg-emerald-gradient';

  return (
    <div
      id={t.id}
      className="grid items-center gap-6 rounded-3xl border border-white/70 bg-white/70 p-5 shadow-luxury backdrop-blur transition-all md:grid-cols-2 md:gap-10 md:p-8"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(34px)',
        transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Visual */}
      <div className={t.reverse ? 'md:order-2' : ''}>
        <div className="relative overflow-hidden rounded-2xl border border-champagne-100 bg-champagne-50/40 shadow-luxury">
          {t.offer && (
            <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md">
              <span className="material-symbols-outlined text-xs">local_offer</span> {t.offer}
            </span>
          )}
          <img src={t.image} alt={t.name} className="h-[260px] w-full object-cover sm:h-[300px] md:h-[360px]" />
        </div>
      </div>

      {/* Content */}
      <div className={t.reverse ? 'md:order-1' : ''}>
        <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${accentText}`}>{t.tagline}</span>
        <h3 className="mt-1 font-display text-2xl font-semibold text-ink-900 md:text-3xl">{t.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{t.description}</p>

        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {t.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-ink-700">
              <span className={`material-symbols-outlined text-base flex-shrink-0 ${accentText}`}>check_circle</span> {b}
            </li>
          ))}
        </ul>

        {t.techniques && (
          <div className="mt-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">Techniques</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.techniques.map((tc) => (
                <span key={tc} className="rounded-full border border-champagne-200 bg-champagne-50/60 px-3 py-1 text-xs font-medium text-ink-800">{tc}</span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-champagne-100 bg-champagne-50/50 px-4 py-3">
          <a
            href="#contact"
            className={`inline-flex items-center gap-1.5 rounded-full ${accentBg} px-5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-105`}
          >
            Enquire <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Treatments() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => e.isIntersecting && (setStarted(true), o.disconnect()), { threshold: 0.1 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!started || visibleCount >= TREATMENTS.length) return;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 150);
    return () => clearTimeout(t);
  }, [started, visibleCount]);

  return (
    <section id="treatments" className="relative bg-champagne-radial px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center">
          <span className="section-eyebrow">✦ Treatments We Offer</span>
          <h2 className="mt-3 section-title">Advanced <span className="gold-text">Aesthetic Treatments</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-600">
            From laser and carbon treatments to PMU brows and scalp micropigmentation — each procedure is performed with
            advanced technology and a fully personalized plan.
          </p>
        </div>

        <div ref={cardRef} className="mt-14 flex flex-col gap-8 md:gap-10">
          {TREATMENTS.map((t, i) => (
            <TreatmentCard key={t.id} t={t} delay={i * 0.15} visible={visibleCount > i} />
          ))}
        </div>

        {/* Candidate grid */}
        <div className="reveal mt-16 rounded-3xl border border-champagne-200 bg-white/70 p-6 backdrop-blur md:p-10">
          <div className="text-center">
            <span className="section-eyebrow">✦ Good Candidate?</span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900 md:text-3xl">Who Is A Good Candidate?</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-600">
              Our treatments are ideal for anyone seeking advanced aesthetic solutions with natural-looking results.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CANDIDATES.map((c) => (
              <div key={c} className="rounded-2xl border border-champagne-100 bg-champagne-50/40 px-3 py-4 text-center text-sm font-medium text-ink-800 transition-all hover:-translate-y-1 hover:border-champagne-300 hover:bg-white">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
