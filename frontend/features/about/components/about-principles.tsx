"use client"

import { motion, useReducedMotion } from "motion/react"

import { Container } from "@/components/container"
import { principles } from "@/features/about/data/principles"
import { useTranslations } from "next-intl"

export function AboutPrinciples() {
  const t = useTranslations("about.principles")
  const keys = ["structure", "usefulness", "craft"] as const
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
    <section className="mt-[clamp(10vw,9rem)] border-t border-border py-[clamp(5rem,9vw,8rem)]">
      <Container>
        <div className="mb-10">
          <motion.p
            {...reveal(0, 8, 0.45)}
            className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h2
            {...reveal(0.08, 16, 0.65)}
            className="mt-3 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-.055em]"
          >
            {t("title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.number}
              {...reveal(index * 0.08, 14, 0.55)}
              className="border-t border-border pt-4"
            >
              <span className="font-mono text-[.68rem] text-primary">
                {t(`items.${keys[index]}.number`)}
              </span>

              <h3 className="mt-5 font-serif text-[1.7rem] tracking-[-.04em]">
                {t(`items.${keys[index]}.title`)}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-[1.75] text-muted-foreground">
                {t(`items.${keys[index]}.text`)}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
