"use client"

import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react"
import Link from "next/link"

export function MotionLink({
  children,
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link className={className} {...props}>
        {children}
      </Link>
    </motion.div>
  )
}

export function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-primary"
      style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
    />
  )
}
