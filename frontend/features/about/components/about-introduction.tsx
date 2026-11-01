"use client"

import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { Container } from "@/components/container"
import { useTranslations } from "next-intl"

export function AboutIntroduction() {
  const t = useTranslations("about.intro")
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
    <Container>
      <div className="grid grid-cols-1 items-start gap-12 border-t border-border py-[clamp(3.5rem,7vw,6rem)] md:grid-cols-[.85fr_1.15fr] md:gap-[clamp(3rem,8vw,8rem)]">
        {/* Profile image */}
        <motion.figure
          {...reveal(0, 14, 0.65)}
          className="relative mx-auto w-full max-w-105 md:mx-0"
        >
          <div
            aria-hidden="true"
            className="absolute top-5 right-0 bottom-5 left-5 border border-border"
          />

          <Image
            className="relative z-10 block aspect-[.79] h-auto w-full object-cover object-[center_20%] filter-[saturate(.78)]"
            src="/images/profile/tarikul-islam.webp"
            alt={t("alt")}
            width={1120}
            height={1488}
            sizes="(max-width: 760px) 88vw, 420px"
          />

          <motion.figcaption
            {...reveal(0.12, 8, 0.45)}
            className="absolute right-0 -bottom-4 z-20 flex gap-2 bg-background px-2 font-mono text-[.62rem] text-muted-foreground"
          >
            <span className="text-primary">02</span>
            <span>{t("caption")}</span>
          </motion.figcaption>
        </motion.figure>

        {/* Introduction content */}
        <div className="max-w-165 pb-3 md:pt-1">
          <motion.p
            {...reveal(0, 8, 0.45)}
            className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
          >
            {t("eyebrow")}
          </motion.p>

          <div className="mt-7 space-y-5 text-base leading-[1.85] text-muted-foreground">
            <motion.p {...reveal(0.06, 12, 0.55)}>
              {t("p1").split("|||")[0]}
              <strong className="font-medium text-foreground">
                {t("name")}
              </strong>
              {t("p1").split("|||")[1]}
            </motion.p>

            <motion.p {...reveal(0.12, 12, 0.55)}>{t("p2")}</motion.p>

            <motion.p {...reveal(0.18, 12, 0.55)}>{t("p3")}</motion.p>
          </div>

          {/* Personal details */}
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 border-y border-border py-5 sm:grid-cols-2">
            <motion.div {...reveal(0, 8, 0.4)} className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                {t("based")}
              </dt>
              <dd className="text-sm">{t("location")}</dd>
            </motion.div>

            <motion.div {...reveal(0.05, 8, 0.4)} className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                {t("focus")}
              </dt>
              <dd className="text-sm">{t("focusValue")}</dd>
            </motion.div>

            <motion.div {...reveal(0.1, 8, 0.4)} className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                {t("tools")}
              </dt>
              <dd className="text-sm">TypeScript · Node.js · NestJS</dd>
            </motion.div>

            <motion.div {...reveal(0.15, 8, 0.4)} className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                {t("studying")}
              </dt>
              <dd className="text-sm">{t("school")}</dd>
            </motion.div>
          </dl>

          {/* Contact link */}
          <motion.div {...reveal(0.2, 8, 0.45)}>
            <Link
              className="mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium capitalize transition-colors hover:border-primary hover:text-primary"
              href="/contact"
            >
              {t("contact")}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
