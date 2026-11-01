"use client"

import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"

import { Container } from "@/components/container"
import { BusinessCardControls } from "./business-card-controls"
import { BusinessCardHero } from "./business-card-hero"
import { BusinessCardFront } from "./business-card-front"
import { BusinessCardBack } from "./business-card-back"

const easeOut = [0.22, 1, 0.36, 1] as const

export function BusinessCard() {
  const t = useTranslations("businessCard")
  const reduceMotion = useReducedMotion() ?? false

  const cardAnimation = (delay: number) =>
    reduceMotion
      ? {}
      : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.55,
          delay,
          ease: easeOut,
        },
      }

  return (
    <section className="flex flex-1 items-center bg-background py-[clamp(2.5rem,5vw,4rem)]">
      <Container className="max-w-6xl">
        <BusinessCardHero />

        <article aria-label={t("cardTitle")} className="mx-auto w-full min-w-0">
          <BusinessCardControls />

          <div className="mx-auto grid w-full min-w-0 grid-cols-1 justify-items-center gap-8 sm:gap-10 min-[1200px]:grid-cols-2 min-[1200px]:gap-6">
            <motion.div
              {...cardAnimation(0)}
              className="w-full min-w-0 rounded-sm drop-shadow-[0_12px_24px_rgba(0,0,0,0.24)]"
            >
              <BusinessCardFront />
            </motion.div>

            <motion.div
              {...cardAnimation(0.12)}
              className="w-full min-w-0 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
            >
              <BusinessCardBack />
            </motion.div>
          </div>
        </article>
      </Container>
    </section>
  )
}