interface PortraitVisualProps {
  className?: string;
}

export function PortraitVisual({ className }: PortraitVisualProps) {
  const skinA = '#f7e6d8';
  return (
    <svg viewBox="0 0 400 560" className={className} role="img" aria-label="Aesthetic PMU specialist portrait illustration">
      <defs>
        <linearGradient id="bgP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf4e8" />
          <stop offset="50%" stopColor="#f3e6cf" />
          <stop offset="100%" stopColor="#eeb0a7" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="scrub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0eeea" />
        </linearGradient>
        <linearGradient id="browP" x1="1" x2="0" y1="0" y2="0">
          <stop offset="0%" stopColor="#9f6837" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#5e3e26" />
        </linearGradient>
        <linearGradient id="lipP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eeb0a7" />
          <stop offset="100%" stopColor="#d4645a" />
        </linearGradient>
        <radialGradient id="goldHalo" cx="50%" cy="35%" r="45%">
          <stop offset="0%" stopColor="#e0b87a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e0b87a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* background */}
      <rect width="400" height="560" fill="url(#bgP)" />
      <rect width="400" height="560" fill="url(#goldHalo)" />

      {/* floating sparkles */}
      <g fill="#e0b87a" opacity="0.5">
        <circle cx="60" cy="80" r="2.5" />
        <circle cx="330" cy="120" r="3" />
        <circle cx="350" cy="320" r="2" />
        <circle cx="40" cy="280" r="2" />
        <circle cx="70" cy="440" r="2.5" />
        <circle cx="340" cy="460" r="2" />
      </g>

      {/* decorative frame */}
      <rect x="14" y="14" width="372" height="532" rx="28" fill="none" stroke="#e0b87a" strokeWidth="1.5" opacity="0.5" />

      {/* neck */}
      <path d="M 175 380 Q 175 430 165 460 L 235 460 Q 225 430 225 380 Z" fill={skinA} />

      {/* shoulders / coat */}
      <path d="M 90 560 Q 95 470 175 455 Q 200 470 225 455 Q 305 470 310 560 Z" fill="url(#scrub)" stroke="#ebd2a8" strokeWidth="1.5" />
      {/* coat lapel */}
      <path d="M 175 455 L 165 560 M 225 455 L 235 560" stroke="#d4a055" strokeWidth="2" fill="none" opacity="0.6" />
      {/* button */}
      <circle cx="200" cy="500" r="4" fill="#d4a055" opacity="0.8" />

      {/* face */}
      <ellipse cx="200" cy="260" rx="78" ry="100" fill={skinA} stroke="#e0b87a" strokeWidth="1.2" opacity="0.98" />

      {/* ears */}
      <ellipse cx="122" cy="265" rx="10" ry="18" fill={skinA} stroke="#e0b87a" strokeWidth="1" />
      <ellipse cx="278" cy="265" rx="10" ry="18" fill={skinA} stroke="#e0b87a" strokeWidth="1" />

      {/* hair (dark elegant) */}
      <path d="M 110 230 Q 95 150 175 130 Q 200 118 225 130 Q 305 150 290 230 Q 300 280 285 320 L 310 340 Q 295 240 290 200 Q 285 150 230 138 Q 200 126 170 138 Q 115 150 110 230 Z" fill="#3d372f" opacity="0.95" />
      <path d="M 110 230 Q 108 300 130 360 L 100 380 Q 90 300 95 240 Z" fill="#3d372f" opacity="0.9" />
      <path d="M 290 230 Q 292 300 270 360 L 300 380 Q 310 300 305 240 Z" fill="#3d372f" opacity="0.9" />

      {/* eyebrows (PMU-enhanced) */}
      <path d="M 150 232 Q 175 222 205 228 Q 202 236 170 240 Z" fill="url(#browP)" />
      <path d="M 250 232 Q 225 222 205 228" fill="none" />
      <path d="M 195 228 Q 225 222 250 232 Q 232 240 200 236 Z" fill="url(#browP)" transform="scale(1,1)" />

      {/* eyes */}
      <ellipse cx="172" cy="265" rx="16" ry="8" fill="white" stroke="#c5bfb3" strokeWidth="1" />
      <ellipse cx="228" cy="265" rx="16" ry="8" fill="white" stroke="#c5bfb3" strokeWidth="1" />
      <circle cx="172" cy="265" r="5" fill="#3d372f" />
      <circle cx="228" cy="265" r="5" fill="#3d372f" />
      {/* eyeliner */}
      <path d="M 156 267 Q 172 273 188 267" fill="none" stroke="#16110f" strokeWidth="2" strokeLinecap="round" />
      <path d="M 156 266 L 152 261 L 158 264 Z" fill="#16110f" />
      <path d="M 212 267 Q 228 273 244 267" fill="none" stroke="#16110f" strokeWidth="2" strokeLinecap="round" />
      <path d="M 244 266 L 248 261 L 242 264 Z" fill="#16110f" />
      {/* lashes */}
      <g stroke="#16110f" strokeWidth="1" strokeLinecap="round">
        <line x1="160" y1="258" x2="158" y2="252" />
        <line x1="172" y1="256" x2="172" y2="250" />
        <line x1="184" y1="258" x2="186" y2="252" />
        <line x1="240" y1="258" x2="242" y2="252" />
        <line x1="228" y1="256" x2="228" y2="250" />
        <line x1="216" y1="258" x2="214" y2="252" />
      </g>

      {/* nose */}
      <path d="M 200 278 Q 196 305 188 318 Q 200 324 212 318 Q 204 305 200 278" fill="none" stroke="#c08442" strokeWidth="1.2" opacity="0.5" />

      {/* lips (lip blush) */}
      <path d="M 178 338 Q 192 328 199 334 Q 201 328 208 334 Q 216 328 222 338 Q 208 350 200 352 Q 192 350 178 338 Z" fill="url(#lipP)" />
      <path d="M 182 340 Q 200 343 218 340" fill="none" stroke="#9c3a39" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}
