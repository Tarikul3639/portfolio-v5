"use client"

import { motion, useReducedMotion } from "motion/react"

import { Container } from "@/components/container"
import { EncryptedText } from "@/components/ui/encrypted-text"
import { FlipWords } from "@/components/ui/flip-words"

export function AboutHero() {
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
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-125 w-125 rounded-full opacity-20 blur-[105px] sm:right-[10%]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.62 0.13 178) 38%, var(--primary)), transparent 72%)",
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-28 z-0 h-95 w-95 rounded-full opacity-12 blur-[95px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.65 0.13 230) 28%, var(--ring)), transparent 70%)",
        }}
      />

      <Container className="relative z-10 pt-[clamp(4.8rem,9vw,8rem)] pb-12">
        <motion.p
          {...reveal(0, 8, 0.45)}
          className="mb-4 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
        >
          <EncryptedText text="ABOUT · A SHORT INTRODUCTION" />
        </motion.p>

        <motion.h1
          {...reveal(0.1, 18, 0.7)}
          className="max-w-222.5 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]"
        >
          A developer with a{" "}
          <em className="inline-block min-w-[7ch] text-primary">
            <FlipWords
              words={["systems", "product", "backend"]}
              duration={3800}
              className="px-0 text-inherit!"
            />
          </em>{" "}
          mindset.
        </motion.h1>
      </Container>
    </section>
  )
}
