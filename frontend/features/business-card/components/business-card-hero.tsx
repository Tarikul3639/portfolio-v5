"use client"

import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"

import { Container } from "@/components/container"
import { EncryptedText } from "@/components/ui/encrypted-text"

export function BusinessCardHero() {
  const t = useTranslations("businessCard")
  const reduceMotion = useReducedMotion() ?? false

  const reveal = (delay = 0, y = 12, duration = 0.55) => ({
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
    <header className="relative isolate pt-6 pb-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <Container className="relative z-10 text-center">
        <motion.p
          {...reveal(0, 8, 0.45)}
          className="mb-4 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
        >
          <EncryptedText text={t("hero.eyebrow")} />
        </motion.p>

        <motion.h1
          {...reveal(0.08, 18, 0.65)}
          className="mx-auto max-w-4xl font-serif text-[clamp(2.5rem,6vw,5.25rem)] leading-[.98] tracking-[-.065em]"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          {...reveal(0.16, 12, 0.55)}
          className="mx-auto mt-5 max-w-2xl text-sm leading-[1.8] text-muted-foreground sm:text-base"
        >
          {t("hero.description")}
        </motion.p>
      </Container>
    </header>
  )
}
