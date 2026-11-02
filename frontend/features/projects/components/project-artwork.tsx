import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { PortfolioProject } from "@/features/projects/data/projects"

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
        project.theme.background,
        project.theme.foreground,
        detail && "min-h-[clamp(280px,42vw,510px)]",
        className
      )}
    >
      {project.image && (
        <Image
          src={project.image}
          alt=""
          fill
          sizes={
            detail
              ? "(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 3rem), 1200px"
              : "(max-width: 768px) calc(100vw - 2rem), (max-width: 1280px) calc((100vw - 4rem) / 2), 600px"
          }
          quality={90}
          className="object-cover transition-transform duration-700 group-hover/art:scale-[1.02]"
        />
      )}

      {project.image && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-black/25 group-hover:from-black/80 group-hover/art:via-black/20"
        />
      )}

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

      <span className="absolute top-5 left-5 font-mono text-[.59rem] tracking-widest opacity-70 sm:top-6 sm:left-6">
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

      {!project.image && (
        <span className="relative z-10 font-serif text-[clamp(1.8rem,4vw,3.4rem)] leading-[.95] font-black tracking-[-.07em]">
          {project.title}
        </span>
      )}

      {!detail && (
        <span className="group/arrow absolute right-5 bottom-5 z-10 grid size-9 place-items-center overflow-hidden border border-current/30 transition-colors duration-300 group-hover/art:border-current/70 sm:right-6 sm:bottom-6">
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover/arrow:scale-x-100" />

          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover/arrow:rotate-45"
          />
        </span>
      )}
    </div>
  )
}
