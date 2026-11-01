export function BusinessCardFrontParticles() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 700 400"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full -translate-y-5 text-foreground"
    >
      <defs>
        <pattern
          id="front-card-particle-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.8" fill="currentColor" opacity="0.12" />
        </pattern>

        <radialGradient id="front-card-particle-glow">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle background texture */}
      <rect width="700" height="400" fill="url(#front-card-particle-grid)" />

      {/* Glow behind the profile */}
      <ellipse
        cx="350"
        cy="190"
        rx="145"
        ry="130"
        fill="url(#front-card-particle-glow)"
      />

      {/* Fine connection lines */}
      <g stroke="currentColor" strokeWidth="0.8" opacity="0.12">
        <path d="M175 115L225 145L260 125" />
        <path d="M440 120L480 145L525 115" />
        <path d="M190 265L230 245L260 270" />
        <path d="M445 265L485 240L520 265" />
      </g>

      {/* Neutral particles */}
      <g fill="currentColor">
        <circle cx="175" cy="115" r="1.8" opacity="0.4" />
        <circle cx="260" cy="125" r="1.5" opacity="0.3" />
        <circle cx="525" cy="115" r="1.8" opacity="0.4" />
        <circle cx="190" cy="265" r="1.8" opacity="0.35" />
        <circle cx="520" cy="265" r="1.8" opacity="0.35" />
      </g>

      {/* Primary accents */}
      <g fill="var(--primary)">
        <circle cx="225" cy="145" r="2" />
        <circle cx="480" cy="145" r="2" />
        <circle cx="230" cy="245" r="1.8" />
        <circle cx="485" cy="240" r="1.8" />
      </g>

      {/* Small sparkles */}
      <g
        stroke="var(--primary)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      >
        <path d="M205 185v7m-3.5-3.5h7" />
        <path d="M500 195v7m-3.5-3.5h7" />
      </g>
    </svg>
  )
}
