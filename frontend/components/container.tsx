import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Keep the page gutter fluid until it reaches five rem on wide screens.
        "mx-auto w-[calc(100%-2.4rem)] max-w-295 sm:w-[calc(100%-10.6vw)] xl:w-[calc(100%-10rem)]",
        className
      )}
      {...props}
    />
  )
}
