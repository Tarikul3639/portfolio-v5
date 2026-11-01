"use client"

import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"
import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/container"
import { EncryptedText } from "@/components/ui/encrypted-text"
import { Link } from "@/i18n/navigation"
import { HomeTechGrid } from "@/features/home/components/home-tech-grid"

export function HomeTechStack() {
  const t = useTranslations("home.skills")
  const reduceMotion = useReducedMotion() ?? false

  const reveal = (delay = 0, y = 14, duration = 0.6) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { amount: 0.2, once: true },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <section className="border-t border-border py-[clamp(3.5rem,6vw,5.5rem)]">
      <Container>
        <div className="mb-7 grid gap-5 md:grid-cols-[.8fr_1fr] md:gap-12">
          {/* Heading */}
          <div>
            <motion.p
              className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
              {...reveal(0, 8, 0.45)}
            >
              <EncryptedText text={t("eyebrow")} />
            </motion.p>

            <motion.h2
              className="mt-2 font-serif text-[clamp(2rem,4vw,3.1rem)] leading-none tracking-[-.055em]"
              {...reveal(0.08, 18, 0.65)}
            >
              {t("headline")} <em className="text-primary">{t("accent")}</em>
            </motion.h2>
          </div>

          {/* Button and description */}
          <div className="flex min-w-0 flex-col gap-5 md:items-end">
            <motion.div className="md:self-end" {...reveal(0.08, 8, 0.45)}>
              <Link
                href="/tech-stack"
                className="group relative inline-flex min-h-10 items-center gap-2 border-b border-border pb-2 text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 after:ease-out hover:border-primary hover:text-primary hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {t("viewAll")}

                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            <motion.p
              className="max-w-120 text-sm leading-[1.7] text-muted-foreground md:self-end"
              {...reveal(0.16, 12, 0.55)}
            >
              {t("description")}
            </motion.p>
          </div>
        </div>

        {/* Technology grid */}
        <HomeTechGrid />
      </Container>
    </section>
  )
}
