import Link from "next/link"
import type { ComponentProps } from "react"
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
    <Link
      className={cn(
        // Share the clipped corner across primary actions so it reads as a deliberate part of the visual system.
        "inline-flex shrink-0 items-center justify-center bg-primary font-medium text-primary-foreground transition-transform [clip-path:polygon(0_0,calc(100%_-_12px)_0,100%_12px,100%_100%,0_100%)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
}
