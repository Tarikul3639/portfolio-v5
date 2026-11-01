export function BusinessCardBackParticles() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 700 400"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            className="pointer-events-none absolute inset-0 z-0 size-full text-foreground"
        >
            <defs>
                <pattern
                    id="card-particle-grid"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                >
                    <circle
                        cx="1"
                        cy="1"
                        r="0.8"
                        fill="currentColor"
                        opacity="0.16"
                    />
                </pattern>

                <radialGradient id="card-particle-glow">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="700" height="400" fill="url(#card-particle-grid)" />

            <ellipse
                cx="380"
                cy="185"
                rx="220"
                ry="180"
                fill="url(#card-particle-glow)"
            />

            <g stroke="currentColor" strokeWidth="0.8" opacity="0.16">
                <path d="M275 92L342 130L400 105" />
                <path d="M342 130L365 194L428 225" />
                <path d="M365 194L300 250L325 305" />
            </g>

            <g fill="currentColor">
                <circle cx="275" cy="92" r="2" opacity="0.45" />
                <circle cx="400" cy="105" r="1.5" opacity="0.35" />
                <circle cx="428" cy="225" r="2" opacity="0.4" />
                <circle cx="300" cy="250" r="1.5" opacity="0.35" />
                <circle cx="325" cy="305" r="2" opacity="0.3" />
            </g>

            <g fill="var(--primary)">
                <circle cx="342" cy="130" r="2.5" />
                <circle cx="365" cy="194" r="2" />
                <circle cx="325" cy="305" r="1.8" />
            </g>

            <g
                stroke="var(--primary)"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.65"
            >
                <path d="M385 145v7m-3.5-3.5h7" />
                <path d="M260 275v6m-3-3h6" />
                <path d="M445 270v6m-3-3h6" />
            </g>
        </svg>
    )
}