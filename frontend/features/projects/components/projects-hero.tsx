"use client"

import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/container"
import { EncryptedText } from "@/components/ui/encrypted-text"
import { FlipWords } from "@/components/ui/flip-words"

export function ProjectsHero() {
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
    <section className="relative isolate overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 -right-32 z-0 h-125 w-125 rounded-full opacity-18 blur-[105px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.58 0.18 255) 34%, var(--primary)), transparent 72%)",
        }}
      />

      <Container className="relative z-10 pt-[clamp(4.8rem,9vw,8rem)] pb-12">
        <motion.p
          {...reveal(0, 8, 0.45)}
          className="mb-4 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
        >
          <EncryptedText text="SELECTED WORK · 2026" />
        </motion.p>

        <motion.h1
          {...reveal(0.08, 20, 0.7)}
          className="max-w-222.5 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]"
        >
          Projects with a{" "}
          <em className="inline-block min-w-[8ch] text-primary">
            <FlipWords
              words={["purpose.", "workflow.", "direction."]}
              duration={4000}
              className="px-0 text-inherit!"
            />
          </em>
        </motion.h1>

        <motion.p
          {...reveal(0.16, 14, 0.6)}
          className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground"
        >
          A collection of products I&apos;ve worked on, from class coordination
          and online learning to media and community platforms.
        </motion.p>
      </Container>
    </section>
  )
}
