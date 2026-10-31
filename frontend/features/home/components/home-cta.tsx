"use client"

import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { AngularLink } from "@/components/angular-link"
import { Container } from "@/components/container"

export function HomeCta() {
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
    <section className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,7.5rem)]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-32 z-0 h-120 w-120 rounded-full opacity-20 blur-[105px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.58 0.16 285) 30%, var(--primary)), transparent 72%)",
        }}
      />

      <Container className="relative z-10 flex flex-col items-start justify-between gap-8 border border-border bg-card p-[clamp(1.5rem,4vw,3rem)] md:flex-row md:items-end">
        <div>
          <motion.p
            className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
            {...reveal(0, 8, 0.45)}
          >
            Have something in mind?
          </motion.p>

          <motion.h2
            className="mt-3 max-w-162.5 font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[.98] tracking-[-.065em]"
            {...reveal(0.08, 18, 0.65)}
          >
            Let&apos;s make it <em className="text-primary">work well.</em>
          </motion.h2>
        </div>

        <motion.div {...reveal(0.16, 10, 0.5)}>
          <AngularLink href="/contact">
            <span className="group inline-flex items-center gap-1.5">
              Get in touch
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </AngularLink>
        </motion.div>
      </Container>
    </section>
  )
}
