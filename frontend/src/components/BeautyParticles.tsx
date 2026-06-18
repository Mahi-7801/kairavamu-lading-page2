import { useMemo } from 'react';

interface Particle {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  hue: 'gold' | 'rose';
}

export function BeautyParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 4 + Math.random() * 10,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 8,
      opacity: 0.25 + Math.random() * 0.5,
      hue: i % 3 === 0 ? 'rose' : 'gold',
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            background:
              p.hue === 'gold'
                ? 'radial-gradient(circle, #e0b87a 0%, transparent 70%)'
                : 'radial-gradient(circle, #eeb0a7 0%, transparent 70%)',
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
