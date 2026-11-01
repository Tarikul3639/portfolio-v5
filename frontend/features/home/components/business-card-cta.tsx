"use client"

import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"

import { Link } from "@/i18n/navigation"
import { Container } from "@/components/container"
import { FlipWords } from "@/components/ui/flip-words"

export function BusinessCardCta() {
  const t = useTranslations("businessCard")
  const reduceMotion = useReducedMotion() ?? false
  const words = t.raw("cta.words") as string[]

  const reveal = (delay = 0, y = 12, duration = 0.55) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <section className="relative isolate py-[clamp(4.5rem,9vw,7.5rem)]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-32 z-0 h-120 w-120 rounded-full opacity-20 blur-[105px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.58 0.16 285) 30%, var(--primary)), transparent 72%)",
        }}
      />

      <Container className="relative z-10 flex flex-col items-start justify-between gap-8 border border-border bg-card p-[clamp(1.5rem,4vw,3rem)] md:flex-row md:items-end">
        <div className="relative pl-5 sm:pl-7">
          <span
            aria-hidden="true"
            className="absolute inset-y-1 left-0 w-px bg-primary/70"
          />

          <motion.p
            {...reveal(0, 8, 0.45)}
            className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
          >
            {t("cta.eyebrow")}
          </motion.p>

          <motion.h2
            {...reveal(0.08, 16, 0.6)}
            className="mt-3 min-h-[2.05em] max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] tracking-[-.06em]"
          >
            {t("cta.title")}{" "}
            <span className="inline-block text-primary">
              {reduceMotion ? (
                words[0]
              ) : (
                <FlipWords
                  words={words}
                  duration={4200}
                  className="px-0 text-inherit!"
                />
              )}
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.14, 10, 0.5)}
            className="mt-4 max-w-xl text-sm leading-[1.8] text-muted-foreground sm:text-base"
          >
            {t("cta.description")}
          </motion.p>
        </div>

        <motion.div {...reveal(0.2, 10, 0.5)} className="md:justify-self-end">
          <Link
            href="/business-card"
            className="group relative inline-flex min-h-11 items-center gap-3 border-b border-border pb-2 text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 after:ease-out hover:border-primary hover:text-primary hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {t("cta.button")}
            <span className="flex size-8 items-center justify-center border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
