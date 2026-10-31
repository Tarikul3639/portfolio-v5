"use client"

import { motion, useReducedMotion } from "motion/react"
import { usePathname } from "next/navigation"
import type { MouseEvent } from "react"
import { useEffect, useState } from "react"

const TARGET_ID = "experience-highlight"

export function ScrollDownIndicator() {
  const reduceMotion = useReducedMotion() ?? false
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.getElementById("home-hero")
      setIsVisible(Boolean(hero && window.scrollY < 5))
    }

    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })

    return () => window.removeEventListener("scroll", updateVisibility)
  }, [pathname])

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(TARGET_ID)

    if (!target) return

    event.preventDefault()
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    })
  }

  if (!isVisible) return null

  return (
    <motion.a
      href={`#${TARGET_ID}`}
      aria-label="Scroll to the experience section"
      onClick={handleClick}
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      animate={reduceMotion ? undefined : { y: [0, 3, 0] }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 2.8, ease: "easeInOut", repeat: Infinity }
      }
    >
      <span
        aria-hidden="true"
        className="relative h-9 w-5 rounded-full border border-muted-foreground/70"
      >
        <motion.span
          className="absolute top-1.5 left-1/2 h-1.5 w-0.5 -translate-x-1/2 rounded-full bg-primary"
          animate={
            reduceMotion ? undefined : { y: [0, 7, 0], opacity: [1, 0.45, 1] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.8, ease: "easeInOut", repeat: Infinity }
          }
        />
      </span>
      <span className="font-mono text-[.52rem] tracking-[.14em] uppercase sm:text-[.58rem] sm:tracking-[.16em]">
        SCROLL TO EXPLORE
      </span>
    </motion.a>
  )
}
