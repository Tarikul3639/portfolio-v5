
"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { GitHubCalendar } from "react-github-calendar"
import { motion, useReducedMotion } from "motion/react"

import { useResponsive } from "@/hooks/use-media-query"
import { Container } from "@/components/container"

const calendarTheme = {
  light: ["oklch(0.93 0.02 145)", "oklch(0.43 0.12 145)"],
  dark: ["oklch(0.27 0.02 145)", "oklch(0.7 0.14 145)"],
}

export function AboutGithubSection() {
  const { isPhone, isTablet } = useResponsive()
  const [mounted, setMounted] = useState(false)
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

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="border-t border-border py-[clamp(5rem,9vw,8rem)]">
      <Container>
        <div className="mb-10 grid gap-4 md:grid-cols-[.8fr_1fr] md:gap-12">
          <div>
            <motion.p
              {...reveal(0, 8, 0.45)}
              className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
            >
              Open source activity
            </motion.p>

            <motion.h2
              {...reveal(0.08, 16, 0.65)}
              className="mt-3 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-.055em]"
            >
              A year of <em className="text-primary">building.</em>
            </motion.h2>
          </div>

          <motion.p
            {...reveal(0.14, 12, 0.55)}
            className="max-w-120 text-base leading-[1.8] text-muted-foreground"
          >
            A live view of my public GitHub contributions. The calendar is
            loaded directly from GitHub&apos;s public contribution data.
          </motion.p>
        </div>

        <motion.div
          {...reveal(0.08, 14, 0.65)}
          className="flex min-h-60 items-center border-y border-border py-6 sm:min-h-72 sm:py-8"
        >
          <div
            className="h-full w-full overflow-x-auto pb-2"
            aria-busy={!mounted}
          >
            {mounted && (
              <GitHubCalendar
                username="Tarikul3639"
                year="last"
                theme={calendarTheme}
                blockSize={isPhone ? 10 : isTablet ? 12 : 14}
                blockMargin={isPhone ? 3 : 4}
                fontSize={isPhone ? 9 : 12}
                showWeekdayLabels={["mon", "wed", "fri"]}
                errorMessage="GitHub activity is unavailable right now."
                className="mx-auto"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.12, 8, 0.45)}
          className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            Contribution counts and dates reflect public activity only.
          </p>

          <a
            className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            href="https://github.com/Tarikul3639"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub profile
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
