"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/container"

export function ExperienceHighlight() {
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
    <section
      id="experience-highlight"
      className="border-y border-border py-[clamp(3.5rem,7vw,6rem)]"
      aria-labelledby="experience-highlight-title"
    >
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[.7fr_1.3fr] md:gap-12">
          <motion.div
            className="flex items-baseline gap-3 border-l-2 border-primary pl-5 sm:pl-6"
            {...reveal(0.04, 16, 0.7)}
          >
            <p
              className="font-serif text-[clamp(4.5rem,10vw,8rem)] leading-none tracking-[-.09em] text-primary"
              aria-label="More than two years"
            >
              2+
            </p>
            <span className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
              years
            </span>
          </motion.div>

          <div className="max-w-148">
            <motion.p
              className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
              {...reveal(0, 8, 0.45)}
            >
              Experience
            </motion.p>

            <motion.h2
              id="experience-highlight-title"
              className="mt-3 max-w-140 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] tracking-[-.06em]"
              {...reveal(0.08, 20, 0.7)}
            >
              Building dependable products with a{" "}
              <em className="text-primary">full view</em> of the work.
            </motion.h2>

            <motion.p
              className="mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground sm:text-base"
              {...reveal(0.16, 14, 0.6)}
            >
              I bring more than two years of hands-on experience across backend
              systems, product interfaces, and the details that connect them.
            </motion.p>

            <motion.div {...reveal(0.24, 8, 0.5)} className="mt-6">
              <Link
                className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                href="/about"
              >
                More about my approach
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
