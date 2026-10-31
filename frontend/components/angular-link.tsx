"use client"

import Link from "next/link"
import type { ComponentProps } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type AngularLinkProps = ComponentProps<typeof Link> & {
  size?: "compact" | "regular"
}

const sizeClasses = {
  compact: "min-h-10 gap-2 px-4 py-2 text-xs",
  regular: "min-h-12 gap-3 px-5 py-3 text-[.82rem]",
}

export function AngularLink({
  className,
  size = "regular",
  ...props
}: AngularLinkProps) {
  return (
    <motion.span
      className="inline-flex"
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      <Link
        className={cn(
          "group/angular group relative isolate inline-flex shrink-0 items-center justify-center overflow-hidden bg-primary font-medium text-primary-foreground transition-colors duration-300 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "before:pointer-events-none before:absolute before:inset-0 before:translate-x-[-130%] before:skew-x-[-20deg] before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-[130%]",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    </motion.span>
  )
}
