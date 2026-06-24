interface GreenGlowAnimationProps {
  opacityClass?: string;
}

export function GreenGlowAnimation({ opacityClass = 'opacity-100' }: GreenGlowAnimationProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${opacityClass}`} aria-hidden="true">
      {/* Dynamic Green Glow Blob 1 - Top Left Liquid Morph */}
      <div
        className="absolute -top-[10%] -left-[15%] h-[60vw] w-[60vw] min-w-[320px] max-w-[650px] rounded-full blur-[80px] md:blur-[120px] animate-liquid-1"
        style={{
          background: 'rgba(29, 70, 49, 0.10)',
          willChange: 'transform, border-radius',
        }}
      />

      {/* Dynamic Green Glow Blob 2 - Middle Right Liquid Morph */}
      <div
        className="absolute top-[20%] -right-[15%] h-[55vw] w-[55vw] min-w-[300px] max-w-[600px] rounded-full blur-[90px] md:blur-[130px] animate-liquid-2"
        style={{
          background: 'rgba(42, 89, 56, 0.08)',
          willChange: 'transform, border-radius',
        }}
      />

      {/* Dynamic Green Glow Blob 3 - Bottom Center/Left Liquid Morph */}
      <div
        className="absolute -bottom-[15%] left-[10%] h-[50vw] w-[50vw] min-w-[280px] max-w-[550px] rounded-full blur-[85px] md:blur-[115px] animate-liquid-1"
        style={{
          background: 'rgba(22, 56, 38, 0.08)',
          animationDelay: '-6s',
          willChange: 'transform, border-radius',
        }}
      />

      {/* Subtle center gold accent glow to harmonize warmth */}
      <div
        className="absolute top-[35%] left-[25%] h-[40vw] w-[40vw] min-w-[220px] max-w-[450px] rounded-full blur-[100px] animate-pulse"
        style={{
          background: 'rgba(228, 204, 142, 0.05)',
          animationDuration: '14s',
        }}
      />
    </div>
  );
}
