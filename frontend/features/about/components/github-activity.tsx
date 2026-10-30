"use client"

import { useEffect, useState } from "react"
import { GitHubCalendar } from "react-github-calendar"

const calendarTheme = {
  light: ["oklch(0.93 0.02 145)", "oklch(0.43 0.12 145)"],
  dark: ["oklch(0.27 0.02 145)", "oklch(0.7 0.14 145)"],
}

export function GithubActivity() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="min-h-45 min-w-0 overflow-x-auto pb-2" aria-busy={!mounted}>
      {mounted && (
        <GitHubCalendar
          username="Tarikul3639"
          year="last"
          theme={calendarTheme}
          blockSize={12}
          blockMargin={4}
          blockRadius={2}
          fontSize={12}
          showWeekdayLabels={["mon", "wed", "fri"]}
          errorMessage="GitHub activity is unavailable right now."
          className="mx-auto min-w-165"
        />
      )}
    </div>
  )
}
