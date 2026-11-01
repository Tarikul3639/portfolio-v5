"use client"

import { Link } from "@/i18n/navigation"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import type { PortfolioProject } from "@/features/projects/data/projects"
import { ProjectArtwork } from "@/features/projects/components/project-artwork"
import { useTranslations } from "next-intl"

export function ProjectCard({
  project,
  index = 0,
  viewLabel,
  category,
  summary,
}: {
  project: PortfolioProject
  index?: number
  viewLabel?: string
  category?: string
  summary?: string
}) {
  const t = useTranslations("common.project")
  const projectT = useTranslations("projects.items")
  const translatedCategory =
    category ??
    ((projectT.raw as (key: string) => unknown)(
      `${project.slug}.category`
    ) as string)
  const translatedSummary =
    summary ??
    ((projectT.raw as (key: string) => unknown)(
      `${project.slug}.summary`
    ) as string)
  const reduceMotion = useReducedMotion() ?? false

  const reveal = (delay = 1, y = 14, duration = 0.6) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { amount: 0.2, once: true },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <div className={index % 2 === 0 ? "md:pt-10" : undefined}>
      <motion.div {...reveal(0, 14, 0.6)}>
        <Link
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          href={`/projects/${project.slug}`}
          aria-label={t("viewAria", { title: project.title })}
        >
          <ProjectArtwork
            project={project}
            index={index}
            className="transition-[filter] duration-300 group-hover:brightness-[.97]"
          />
        </Link>
      </motion.div>

      <div className="flex flex-col justify-between gap-4 pt-5 md:flex-row md:items-end md:gap-6">
        <div>
          <motion.p
            className="mb-2 font-mono text-[.59rem] tracking-[.11em] text-muted-foreground uppercase"
            {...reveal(0.04, 8, 0.45)}
          >
            {translatedCategory}
          </motion.p>

          <motion.h3
            className="font-serif text-[clamp(1.55rem,2.4vw,2.1rem)] leading-[1.1] tracking-[-.055em]"
            {...reveal(0.08, 14, 0.6)}
          >
            <Link
              className="transition-colors hover:text-primary"
              href={`/projects/${project.slug}`}
            >
              {project.title}
            </Link>
          </motion.h3>

          <motion.p
            className="mt-2 max-w-120 text-[.88rem] leading-[1.65] text-muted-foreground"
            {...reveal(0.14, 12, 0.55)}
          >
            {translatedSummary}
          </motion.p>
        </div>

        <motion.div {...reveal(0.18, 8, 0.5)}>
          <Link
            className="group/link inline-flex w-fit min-w-24 shrink-0 items-center gap-2 border-b border-foreground pb-1 text-xs transition-colors hover:border-primary hover:text-primary"
            href={`/projects/${project.slug}`}
          >
            {viewLabel ?? t("view")}
            <span
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            >
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </Link>
        </motion.div>
      </div>

      <motion.ul
        className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[.62rem] text-muted-foreground"
        aria-label={t("technologies")}
        {...reveal(0.22, 10, 0.5)}
      >
        {project.stack.slice(0, 4).map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </motion.ul>
    </div>
  )
}
