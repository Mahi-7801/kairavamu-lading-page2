
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
  idealFor?: string[];
  idealForLabel?: string;
  techniques?: string[];
  price?: string;
  priceNote?: string;
  offer?: string;
  accent: 'gold' | 'rose';
  reverse?: boolean;
}

const TREATMENTS: Treatment[] = [
  {
    id: 'pmu-brows',
    name: 'PMU Brows',
    tagline: 'Fuller, Well-Defined Brows Designed Around You',
    description: 'Brows play a significant role in framing the face and enhancing overall appearance. PMU Brows help create naturally fuller, more defined eyebrows while reducing the need for daily brow makeup. Every brow design is customized to complement your facial structure, natural brow pattern, and personal preferences.',
    visual: 'brows',
    image: '/pmu-brows.png',
    benefits: ['Better brow definition', 'Fuller-looking eyebrows', 'Improved symmetry', 'Natural-looking enhancement', 'Reduced daily makeup effort'],
    idealFor: ['Sparse brows', 'Uneven brows', 'Over-plucked brows', 'Individuals seeking long-lasting brow definition'],
    techniques: ['Microblading', 'Ombre Brows', 'Combination Brows'],
    price: '₹20,000 – ₹40,000',
    priceNote: 'Microblading / Ombre / Combination',
    offer: 'Up To 25% OFF',
    accent: 'gold',
  },
  {
    id: 'lip-blush',
    name: 'Lip Blush',
    tagline: 'Enhance Natural Lip Colour & Definition',
    description: 'Lip Blush is a semi-permanent cosmetic treatment designed to enhance the natural appearance of your lips. It can help improve lip definition, create a more balanced appearance, and provide a soft tint that looks fresh and natural. The goal is not to create heavily coloured lips but to enhance what is already there while improving overall lip appearance.',
    visual: 'lips',
    image: '/pmu-lips.png',
    benefits: ['Enhanced lip definition', 'Improved lip symmetry', 'Soft, natural-looking colour', 'Fresher appearance', 'Reduced need for daily lip products'],
    idealFor: ['Pale lips', 'Uneven lip tone', 'Loss of lip definition', 'Individuals seeking subtle enhancement'],
    idealForLabel: 'Suitable For',
    price: '₹20,000 – ₹40,000',
    priceNote: 'Based on pigmentation correction and technique',
    offer: 'Up To 25% OFF',
    accent: 'rose',
    reverse: true,
  },
  {
    id: 'eyeliner-pmu',
    name: 'Eyeliner PMU',
    tagline: 'Long-Lasting Definition for Beautifully Framed Eyes',
    description: 'Eyeliner PMU enhances the natural beauty of the eyes by creating subtle definition along the lash line. The treatment is customized to suit your eye shape and desired style while maintaining a soft and elegant appearance. It is an ideal option for individuals who regularly wear eyeliner and want to simplify their beauty routine.',
    visual: 'eyeliner',
    image: '/pmu-eyeliner.png',
    benefits: ['Defined eyes', 'Enhanced lash line appearance', 'Reduced daily makeup application', 'Long-lasting results', 'Natural-looking enhancement'],
    price: '₹15,000 – ₹30,000',
    priceNote: 'Based on style and thickness',
    accent: 'rose',
    reverse: true,
  },
  {
    id: 'brow-correction',
    name: 'Brow Correction',
    tagline: 'Improve Previous PMU Brow Work',
    description: 'Not all permanent makeup results meet expectations. Brow Correction treatments are designed to improve previous brow procedures by adjusting shape, colour, symmetry, or overall appearance. Our specialists carefully assess existing brow work before recommending the most appropriate correction approach.',
    visual: 'correction',
    image: '/pmu-correction.png',
    benefits: ['Improved symmetry', 'Better colour balance', 'Enhanced brow shape', 'More natural-looking results'],
    idealFor: ['Uneven brows', 'Shape concerns', 'Colour inconsistencies', 'Faded pigment', 'Previous PMU dissatisfaction'],
    idealForLabel: 'Can Help Address',
    price: '₹10,000 – ₹25,000',
    priceNote: 'Based on correction complexity',
    accent: 'gold',
  },
  {
    id: 'scalp-micropigmentation',
    name: 'Scalp Micropigmentation (SMP)',
    tagline: 'Create the Appearance of Fuller Hair Density',
    description: 'Scalp Micropigmentation (SMP) is a non-surgical cosmetic procedure designed to create the appearance of increased hair density by depositing pigment into the scalp. It is a highly effective solution for hair thinning, receding hairlines, and visible scalp areas.',
    visual: 'smp',
    image: '/pmu-smp.png',
    benefits: ['Non-surgical solution', 'Natural-looking appearance', 'Improved visual density', 'Low maintenance', 'Long-lasting results'],
    idealFor: ['Hair thinning', 'Visible scalp areas', 'Receding hairlines', 'Reduced hair density', 'Hair loss concerns'],
    price: '₹20,000 – ₹1,00,000',
    priceNote: 'Pricing varies based on technique, area and customization',
    accent: 'gold',
    reverse: true,
  },
];

const CANDIDATES = [
  'Sparse Eyebrows', 'Uneven Brows', 'Lip Pigmentation Concerns', 'Pale Lips',
  'Hair Thinning', 'Visible Scalp', 'Receding Hairline', 'Previous PMU Concerns',
  'Busy Professionals', 'Low Maintenance Beauty Seekers', 'Eye Definition Seekers', 'Natural Look Lovers',
];

function TreatmentCard({ t, delay, visible }: { t: Treatment; delay: number; visible: boolean }) {
  const accentText = t.accent === 'gold' ? 'text-gold-600' : 'text-forest-500';
  const accentBg = t.accent === 'gold' ? 'bg-gold-gradient' : 'bg-forest-gradient';

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
        <div className="relative overflow-hidden rounded-2xl border border-cream-100 bg-cream-50/40 shadow-luxury">
          {t.offer && (
            <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-forest-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md">
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

        {t.idealFor && (
          <div className="mt-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">{t.idealForLabel ?? 'Ideal For'}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.idealFor.map((item) => (
                <span key={item} className="rounded-full border border-cream-200 bg-cream-50/60 px-3 py-1 text-xs font-medium text-ink-800">{item}</span>
              ))}
            </div>
          </div>
        )}

        {t.techniques && (
          <div className="mt-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">Techniques</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.techniques.map((tc) => (
                <span key={tc} className="rounded-full border border-cream-200 bg-cream-50/60 px-3 py-1 text-xs font-medium text-ink-800">{tc}</span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cream-100 bg-cream-50/50 px-4 py-3">
          {t.price && (
            <div className="text-left">
              <div className={`text-lg font-bold ${accentText}`}>{t.price}</div>
              {t.priceNote && <div className="text-[10px] text-ink-500">{t.priceNote}</div>}
            </div>
          )}
          <a
            href="#contact"
            className={`inline-flex items-center gap-1.5 rounded-full ${accentBg} px-5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-105 ml-auto`}
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
    <section id="treatments" className="relative bg-cream-radial px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center">
          <span className="section-eyebrow">✦ Permanent Makeup Solutions</span>
          <h2 className="mt-3 section-title">Our <span className="gold-text">Permanent Makeup</span> Solutions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-600">
            From brows and lips to scalp micropigmentation — each PMU procedure is performed with advanced technology and a fully personalized plan.
          </p>
        </div>

        <div ref={cardRef} className="mt-14 flex flex-col gap-8 md:gap-10">
          {TREATMENTS.map((t, i) => (
            <TreatmentCard key={t.id} t={t} delay={i * 0.15} visible={visibleCount > i} />
          ))}
        </div>

        {/* Candidate grid */}
        <div className="reveal mt-16 rounded-3xl border border-cream-200 bg-white/70 p-6 backdrop-blur md:p-10">
          <div className="text-center">
            <span className="section-eyebrow">✦ Good Candidate?</span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900 md:text-3xl">Who Is A Good Candidate?</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-600">
              Our treatments are ideal for anyone seeking advanced aesthetic solutions with natural-looking results.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {CANDIDATES.map((c) => (
              <div key={c} className="rounded-2xl border border-cream-100 bg-cream-50/40 px-3 py-4 text-center text-sm font-medium text-ink-800 transition-all hover:-translate-y-1 hover:border-cream-300 hover:bg-white">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
