"use client"

import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/container"
import { HomeTechGrid } from "@/features/home/components/home-tech-grid"

export function HomeTechStack() {
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
    <section className="border-t border-border py-[clamp(3.5rem,6vw,5.5rem)]">
      <Container>
        <div className="mb-7 grid gap-3 md:grid-cols-[.8fr_1fr] md:gap-12">
          <div>
            <motion.p
              className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
              {...reveal(0, 8, 0.45)}
            >
              Skills and tools
            </motion.p>

            <motion.h2
              className="mt-2 font-serif text-[clamp(2rem,4vw,3.1rem)] leading-none tracking-[-.055em]"
              {...reveal(0.08, 18, 0.65)}
            >
              Technologies I <em className="text-primary">work with.</em>
            </motion.h2>
          </div>

          <motion.p
            className="max-w-120 text-sm leading-[1.7] text-muted-foreground"
            {...reveal(0.16, 12, 0.55)}
          >
            A compact overview of the tools behind my work and the topics I am
            currently exploring.
          </motion.p>
        </div>

        <HomeTechGrid />
      </Container>
    </section>
  )
}