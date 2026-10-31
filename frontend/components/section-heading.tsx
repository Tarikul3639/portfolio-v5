"use client"

import { motion, useReducedMotion } from "motion/react"

export function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string
  title: string
  note?: string
}) {
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
    <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
      <div>
        <motion.p
          className="font-mono text-[.68rem] leading-snug tracking-[.11em] text-muted-foreground uppercase"
          {...reveal(0, 8, 0.45)}
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          className="mt-3 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-.055em]"
          {...reveal(0.08, 18, 0.65)}
        >
          {title}
        </motion.h2>
      </div>

      {note && (
        <motion.p
          className="max-w-88 text-[.94rem] leading-[1.7] text-muted-foreground"
          {...reveal(0.16, 12, 0.55)}
        >
          {note}
        </motion.p>
      )}
    </div>
  )
}