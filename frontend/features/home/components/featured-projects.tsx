"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/features/projects/components/project-card"
import { featuredProjects } from "@/features/projects/data/projects"

export function FeaturedProjects() {
  const reduceMotion = useReducedMotion() ?? false

  const reveal = (delay = 1, y = 14, duration = 0.6) => ({
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
    <section className="border-t border-border py-[clamp(5.5rem,10vw,9rem)]">
      <Container>
        <SectionHeading
          eyebrow="Selected work · 01—03"
          title="A few things I've made."
          note="A selection of full-stack products shaped around clear workflows and the people who use them."
        />

        <div className="grid grid-cols-1 gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-16 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              {...reveal(0.08 + index * 0.1, 20, 0.65)}
            >
              <ProjectCard index={index} project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          {...reveal(0.12, 10, 0.5)}
        >
          <Link
            className="inline-flex w-fit items-center gap-3 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            href="/projects"
          >
            View all projects{" "}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}