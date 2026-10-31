"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/container"
import { ProjectArtwork } from "@/features/projects/components/project-artwork"
import { getProject } from "@/features/projects/data/projects"

type Project = NonNullable<ReturnType<typeof getProject>>

type Props = {
  project: Project
}

export function ProjectDetailHero({ project }: Props) {
  const reduceMotion = useReducedMotion() ?? false

  const reveal = (delay = 0, y = 14, duration = 0.6) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <Container className="pt-[clamp(4rem,7vw,6.5rem)]">
      <motion.nav
        {...reveal(0, 8, 0.45)}
        className="mb-11 flex flex-wrap items-center gap-2.5 font-mono text-[.65rem] text-muted-foreground"
        aria-label="Breadcrumb"
      >
        <Link className="transition-colors hover:text-foreground" href="/">
          Home
        </Link>

        <span aria-hidden="true">/</span>

        <Link
          className="transition-colors hover:text-foreground"
          href="/projects"
        >
          Projects
        </Link>

        <span aria-hidden="true">/</span>

        <span className="text-foreground">{project.title}</span>
      </motion.nav>

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-8">
        <div>
          <motion.p
            {...reveal(0.04, 8, 0.45)}
            className="mb-3 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
          >
            {project.category}
          </motion.p>

          <motion.h1
            {...reveal(0.12, 20, 0.7)}
            className="font-serif text-[clamp(3.2rem,8vw,7rem)] leading-[.9] tracking-[-.085em]"
          >
            {project.title}
          </motion.h1>
        </div>

        <motion.p
          {...reveal(0.2, 12, 0.55)}
          className="flex items-center gap-2 pb-1 font-mono text-xs text-muted-foreground"
        >
          <span>{project.year}</span>
          <span aria-hidden="true">/</span>
          <span>{project.role}</span>
        </motion.p>
      </div>

      <motion.div {...reveal(0.12, 18, 0.7)}>
        <ProjectArtwork project={project} detail className="mt-12" />
      </motion.div>
    </Container>
  )
}
