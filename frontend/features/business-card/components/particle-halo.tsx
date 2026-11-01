
export function ParticleHalo() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 180 180"
            fill="none"
            className="pointer-events-none absolute inset-[-24%] z-0 h-[148%] w-[148%] overflow-visible"
        >
            {/* Orbit rings */}
            <g stroke="currentColor" strokeWidth="1.5" opacity=".58">
                <circle cx="53" cy="28" r="7.5" />
                <circle cx="132" cy="37" r="10" />
                <circle cx="20" cy="119" r="7" />
            </g>

            {/* Subtle orbit arc */}
            <ellipse
                cx="90"
                cy="90"
                rx="66"
                ry="53"
                transform="rotate(-34 90 90)"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 8"
                opacity=".18"
            />

            {/* Cyan diagonal particle streaks */}
            <g
                stroke="var(--primary)"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity=".9"
            >
                <path d="M35 39l8-12" />
                <path d="M40 40l8-12" />
                <path d="M45 41l8-12" />
                <path d="M50 42l8-12" />

                <path d="M124 151l8-12" />
                <path d="M129 152l8-12" />
                <path d="M134 153l8-12" />
                <path d="M139 154l8-12" />
            </g>

            {/* Four-point sparkles */}
            <g fill="currentColor" opacity=".8">
                <path d="M29 79l2.5 6.5L38 88l-6.5 2.5L29 97l-2.5-6.5L20 88l6.5-2.5Z" />
                <path d="M148 76l2 5L155 83l-5 2-2 5-2-5-5-2 5-2Z" />
                <path d="M153 12l2.5 6.5L162 21l-6.5 2.5L153 30l-2.5-6.5L144 21l6.5-2.5Z" />
                <path d="M107 17l2 5L114 24l-5 2-2 5-2-5-5-2 5-2Z" />
            </g>

            {/* Tiny floating particles */}
            <g fill="currentColor" opacity=".7">
                <circle cx="42" cy="52" r="1.2" />
                <circle cx="137" cy="55" r="1.4" />
                <circle cx="150" cy="111" r="1.2" />
                <circle cx="39" cy="135" r="1.4" />
                <circle cx="70" cy="19" r="1" />
                <circle cx="113" cy="145" r="1.1" />
            </g>

            {/* Accent particles */}
            <g fill="var(--primary)">
                <circle cx="39" cy="68" r="1.8" />
                <circle cx="143" cy="92" r="1.8" />
                <circle cx="116" cy="132" r="1.6" />
            </g>
        </svg>
    )
}
