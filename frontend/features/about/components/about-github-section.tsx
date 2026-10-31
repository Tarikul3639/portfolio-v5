"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { GitHubCalendar } from "react-github-calendar"
import { useResponsive } from "@/hooks/use-media-query"

import { Container } from "@/components/container"

const calendarTheme = {
  light: ["oklch(0.93 0.02 145)", "oklch(0.43 0.12 145)"],
  dark: ["oklch(0.27 0.02 145)", "oklch(0.7 0.14 145)"],
}

export function AboutGithubSection() {
  const { isPhone, isTablet } = useResponsive()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="border-t border-border py-[clamp(5rem,9vw,8rem)]">
      <Container>
        <div className="mb-10 grid gap-4 md:grid-cols-[.8fr_1fr] md:gap-12">
          <div>
            <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
              Open source activity
            </p>

            <h2 className="mt-3 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-.055em]">
              A year of <em className="text-primary">building.</em>
            </h2>
          </div>

          <p className="max-w-120 text-base leading-[1.8] text-muted-foreground">
            A live view of my public GitHub contributions. The calendar is
            loaded directly from GitHub&apos;s public contribution data.
          </p>
        </div>

        <div className="flex min-h-60 items-center border-y border-border py-6 sm:min-h-72 sm:py-8">
          <div
            className="w-full overflow-x-auto pb-2 h-full"
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
        </div>

        <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Contribution counts and dates reflect public activity only.</p>

          <a
            className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            href="https://github.com/Tarikul3639"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub profile
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}
