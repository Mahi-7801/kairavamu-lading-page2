
import { useRef, useState, useEffect } from 'react';

interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  idealFor?: string[];
  price?: string;
  priceNote?: string;
  offer?: string;
  accent: 'gold' | 'rose';
}

const SERVICES: ServiceItem[] = [
  {
    id: 'pmu-brows',
    name: 'PMU Brows',
    tagline: 'Fuller, Well-Defined Brows Designed Around You',
    description: 'Brows play a significant role in framing the face and enhancing overall appearance. PMU Brows help create naturally fuller, more defined eyebrows while reducing the need for daily brow makeup.',
    benefits: ['Better brow definition', 'Fuller-looking eyebrows', 'Improved symmetry', 'Natural-looking enhancement', 'Reduced daily makeup effort'],
    idealFor: ['Sparse brows', 'Uneven brows', 'Over-plucked brows', 'Individuals seeking long-lasting brow definition'],
    price: '₹20,000 – ₹40,000',
    priceNote: 'Microblading / Ombre / Combination',
    offer: 'Up To 25% OFF',
    accent: 'gold',
  },
  {
    id: 'lip-blush',
    name: 'Lip Blush',
    tagline: 'Enhance Natural Lip Colour & Definition',
    description: 'Lip Blush is a semi-permanent cosmetic treatment designed to enhance the natural appearance of your lips. It can help improve lip definition, create a more balanced appearance, and provide a soft tint that looks fresh and natural.',
    benefits: ['Enhanced lip definition', 'Improved lip symmetry', 'Soft, natural-looking colour', 'Fresher appearance', 'Reduced need for daily lip products'],
    idealFor: ['Pale lips', 'Uneven lip tone', 'Loss of lip definition', 'Individuals seeking subtle enhancement'],
    price: '₹20,000 – ₹40,000',
    priceNote: 'Based on pigmentation correction and technique',
    offer: 'Up To 25% OFF',
    accent: 'rose',
  },
  {
    id: 'scalp-micropigmentation',
    name: 'Scalp Micropigmentation (SMP)',
    tagline: 'Create the Appearance of Fuller Hair Density',
    description: 'Scalp Micropigmentation (SMP) is a non-surgical cosmetic procedure designed to create the appearance of increased hair density by depositing pigment into the scalp.',
    benefits: ['Non-surgical solution', 'Natural-looking appearance', 'Improved visual density', 'Low maintenance', 'Long-lasting results'],
    idealFor: ['Hair thinning', 'Visible scalp areas', 'Receding hairlines', 'Reduced hair density', 'Hair loss concerns'],
    price: '₹20,000 – ₹1,00,000',
    priceNote: 'Pricing varies based on technique, area and customization',
    accent: 'gold',
  },
  {
    id: 'eyeliner-pmu',
    name: 'Eyeliner PMU',
    tagline: 'Long-Lasting Definition for Beautifully Framed Eyes',
    description: 'Eyeliner PMU enhances the natural beauty of the eyes by creating subtle definition along the lash line. The treatment is customized to suit your eye shape and desired style.',
    benefits: ['Defined eyes', 'Enhanced lash line appearance', 'Reduced daily makeup application', 'Long-lasting results', 'Natural-looking enhancement'],
    price: '₹15,000 – ₹30,000',
    accent: 'rose',
  },
  {
    id: 'brow-correction',
    name: 'Brow Correction',
    tagline: 'Improve Previous PMU Brow Work',
    description: 'Not all permanent makeup results meet expectations. Brow Correction treatments are designed to improve previous brow procedures by adjusting shape, colour, symmetry, or overall appearance.',
    benefits: ['Improved symmetry', 'Better colour balance', 'Enhanced brow shape', 'More natural-looking results'],
    idealFor: ['Uneven brows', 'Shape concerns', 'Colour inconsistencies', 'Faded pigment', 'Previous PMU dissatisfaction'],
    price: '₹10,000 – ₹30,000',
    priceNote: 'Depends on correction complexity',
    accent: 'gold',
  },
  {
    id: 'carbon-laser',
    name: 'Carbon Laser',
    tagline: 'Deep Cleansing · Glow · Pore Refinement',
    description: 'Advanced carbon peel laser treatment for deep cleansing, oil control and instant skin brightening.',
    benefits: ['Deep Cleansing & Oil Control', 'Instant Glow & Skin Brightening', 'Minimizes Pores', 'Improves Skin Texture'],
    price: '₹3,000 – ₹7,000/session',
    offer: 'Up To 40% OFF',
    accent: 'gold',
  },
  {
    id: 'laser-toning',
    name: 'Laser Toning',
    tagline: 'Pigmentation · Brightening · Even Tone',
    description: 'Reduce pigmentation, uneven skin tone and acne marks with advanced laser toning for a natural glow.',
    benefits: ['Reduces Pigmentation & Uneven Tone', 'Improves Acne Marks & Texture', 'Brightens Skin', 'Adds Natural Glow'],
    price: '₹3,000 – ₹7,000/session',
    offer: 'Up To 40% OFF',
    accent: 'rose',
  },
  {
    id: 'laser-hair-reduction',
    name: 'Laser Hair Reduction',
    tagline: 'Long Term · Smooth Skin · No Ingrown',
    description: 'Permanent hair reduction solution — no ingrown hairs, no skin darkening, saves time and effort.',
    benefits: ['Long Term Hair Reduction', 'No Ingrown Hair', 'No Skin Darkening', 'Saves Time & Effort'],
    price: '₹1,000 – ₹30,000/session',
    priceNote: 'pricing varies based on treatment area',
    offer: 'Up To 40% OFF',
    accent: 'gold',
  },
  {
    id: 'hair-gfc',
    name: 'Hair GFC',
    tagline: 'Hair Fall Control · Regrowth · Density',
    description: 'Safe and natural treatment that reduces hair fall, promotes regrowth and improves hair density.',
    benefits: ['Reduces Hair Fall', 'Promotes Hair Regrowth & Density', 'Safe & Natural Treatment', 'Visible Results'],
    price: '₹5,000 – ₹10,000/session',
    offer: 'Up To 40% OFF',
    accent: 'rose',
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant',
    tagline: 'Permanent Growth · Natural Hairline',
    description: 'Permanent and natural hair growth solution that restores your hairline and confidence.',
    benefits: ['Permanent & Natural Hair Growth', 'Restores Hairline & Confidence', 'Low Maintenance Solution', 'Life Changing Results'],
    price: 'Contact for pricing',
    accent: 'gold',
  },
];

export function Services() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => e.isIntersecting && (setVisible(true), o.disconnect()), { threshold: 0.05 });
    o.observe(el);
    return () => o.disconnect();
  }, []);

  return (
    <section id="services" className="relative bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center">
          <span className="section-eyebrow">✦ Our Services</span>
          <h2 className="mt-3 section-title">Complete Range of <span className="gold-text">Aesthetic Services</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-600">
            From permanent makeup to laser treatments — explore our full range of aesthetic services designed to enhance your natural beauty.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const isGold = s.accent === 'gold';
            const borderColor = isGold ? 'border-champagne-200 hover:border-champagne-400' : 'border-rosegold-200 hover:border-rosegold-400';
            const badgeColor = isGold ? 'bg-champagne-50 text-champagne-700' : 'bg-rosegold-50 text-rosegold-700';
            const iconColor = isGold ? 'text-champagne-600' : 'text-rosegold-500';

            return (
              <div
                key={s.id}
                className={`group rounded-2xl border ${borderColor} bg-white/80 p-5 shadow-luxury backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury-lg`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s, border-color 0.3s',
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                {s.offer && (
                  <span className={`inline-flex items-center gap-1 rounded-full ${badgeColor} px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider`}>
                    <span className="material-symbols-outlined text-xs">local_offer</span> {s.offer}
                  </span>
                )}

                <h3 className={`mt-2 font-display text-lg font-semibold text-ink-900 ${!s.offer ? 'mt-0' : ''}`}>{s.name}</h3>
                <div className={`mt-1 text-[11px] font-medium uppercase tracking-[0.15em] ${iconColor}`}>{s.tagline}</div>
                <p className="mt-2 text-xs leading-relaxed text-ink-500">{s.description}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.benefits.slice(0, 3).map((b) => (
                    <span key={b} className="flex items-center gap-0.5 rounded-full bg-champagne-50/60 px-2 py-0.5 text-[10px] text-ink-600">
                      <span className={`material-symbols-outlined text-[10px] ${iconColor}`}>check_circle</span> {b}
                    </span>
                  ))}
                  {s.benefits.length > 3 && (
                    <span className="text-[10px] text-ink-400">+{s.benefits.length - 3} more</span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 border-t border-champagne-100 pt-3">
                  <div>
                    {s.price && <span className={`text-sm font-bold ${iconColor}`}>{s.price}</span>}
                    {s.priceNote && <div className="text-[9px] text-ink-400">{s.priceNote}</div>}
                  </div>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1 rounded-full border ${isGold ? 'border-champagne-300 text-champagne-700 hover:bg-champagne-50' : 'border-rosegold-300 text-rosegold-700 hover:bg-rosegold-50'} px-3 py-1.5 text-[10px] font-semibold transition-colors`}
                  >
                    Enquire <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
