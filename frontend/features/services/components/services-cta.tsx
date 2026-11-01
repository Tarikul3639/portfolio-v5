"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { AngularLink } from "@/components/angular-link"
import { Container } from "@/components/container"
import { useTranslations } from "next-intl"

export function ServicesCta() {
  const t = useTranslations("services.cta")
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
    <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
      <Container className="flex flex-col items-start justify-between gap-8 border border-border bg-card p-[clamp(1.5rem,4vw,3rem)] md:flex-row md:items-end">
        <div>
          <motion.p
            {...reveal(0, 8, 0.45)}
            className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h2
            {...reveal(0.08, 18, 0.65)}
            className="mt-3 max-w-162.5 font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[.98] tracking-[-.065em]"
          >
            {t("titleStart")} <em className="text-primary">{t("titleEnd")}</em>
          </motion.h2>
        </div>

        <motion.div {...reveal(0.16, 12, 0.55)}>
          <AngularLink href="/contact">
            {t("button")}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </AngularLink>
        </motion.div>
      </Container>
    </section>
  )
}
