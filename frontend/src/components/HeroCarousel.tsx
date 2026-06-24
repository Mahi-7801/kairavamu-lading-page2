import { useEffect, useState, useRef, useCallback } from 'react';


const SLIDES = [
  {
    label: 'PMU Brows',
    desc: 'Microblading · Ombre · Combination',
    images: ['/pmu-eyebrows1.jpg', '/pmu-eyebrows2.jpg'],
  },
  {
    label: 'Lip Blush',
    desc: 'Permanent Lip Color Enhancement',
    images: ['/pmu-lip1.jpg', '/pmu-lip2.jpg', '/pmu_lips_after.png'],
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setImgIdx(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % SLIDES.length);
    setImgIdx(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length);
    setImgIdx(0);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(next, 4500);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const slide = SLIDES[current];
  const hasGallery = slide.images.length > 1;

  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-3 rounded-[2.5rem] bg-gold-gradient opacity-20 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxury-lg">
        <div className="relative h-[440px] w-full sm:h-[480px] md:h-[560px]">
          {slide.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${slide.label} ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === imgIdx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-5 pt-12">
          <div className="text-center text-white">
            <div className="font-display text-xl font-semibold sm:text-2xl">{slide.label}</div>
            <div className="mt-0.5 text-xs uppercase tracking-[0.15em] text-white/70">{slide.desc}</div>
          </div>
        </div>

        {hasGallery && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slide.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                className={`rounded-full transition-all ${
                  i === imgIdx ? 'h-2 w-6 bg-white' : 'h-2 w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}


      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.label}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'h-2.5 w-8 bg-gold-600'
                : 'h-2.5 w-2.5 bg-cream-300 hover:bg-gold-400'
            }`}
            aria-label={`Go to ${s.label}`}
          />
        ))}
      </div>
    </div>
  );
}
