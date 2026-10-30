import { cn } from "@/lib/utils"
import type { PortfolioProject } from "@/data/projects"

const tones: Record<PortfolioProject["visual"], string> = {
  classflow: "bg-[#d4dde0] text-[#16272d]",
  deenseries: "bg-[#d8d2c8] text-[#291c17]",
  mosque: "bg-[#d6dcd4] text-[#192c26]",
  academy: "bg-[#ded7c5] text-[#352914]",
}

export function ProjectArtwork({
  project,
  index,
  detail = false,
  className,
}: {
  project: PortfolioProject
  index?: number
  detail?: boolean
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "group/art relative isolate flex min-h-[clamp(230px,29vw,360px)] items-end overflow-hidden p-5 sm:p-6",
        tones[project.visual],
        detail && "min-h-[clamp(280px,42vw,510px)]",
        className
      )}
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_80%_25%,rgba(255,255,255,.6),transparent_49%)]" />
      <svg
        className="absolute inset-0 -z-10 size-full opacity-30"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`grid-${project.slug}`}
            width="58"
            height="58"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 58 0 L 0 0 0 58"
              fill="none"
              stroke="currentColor"
              strokeOpacity=".38"
            />
          </pattern>
          <linearGradient
            id={`fade-${project.slug}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id={`mask-${project.slug}`}>
            {/* Fade the background grid diagonally so the project title remains the focal point. */}
            <rect
              width="100%"
              height="100%"
              fill={`url(#fade-${project.slug})`}
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-${project.slug})`}
          mask={`url(#mask-${project.slug})`}
        />
      </svg>
      <span className="absolute top-5 left-5 font-mono text-[.59rem] tracking-[.1em] opacity-70 sm:top-6 sm:left-6">
        {detail
          ? `SELECTED PROJECT · ${project.year}`
          : `0${(index ?? 0) + 1} / PROJECT`}
      </span>
      <span
        className={cn(
          "absolute top-[22%] right-[12%] font-serif text-[clamp(7rem,16vw,13rem)] leading-[.8] tracking-[-.13em] text-black/10",
          detail && "text-[clamp(10rem,27vw,24rem)]"
        )}
      >
        {project.monogram}
      </span>
      <span className="relative z-10 font-serif text-[clamp(1.8rem,4vw,3.4rem)] leading-[.95] tracking-[-.07em]">
        {project.title}
      </span>
      {!detail && (
        <span className="absolute right-5 bottom-5 grid size-9 place-items-center border border-current/30 text-base transition-transform group-hover/art:translate-x-0.5 group-hover/art:-translate-y-0.5 sm:right-6 sm:bottom-6">
          ↗
        </span>
      )}
    </div>
  )
}
