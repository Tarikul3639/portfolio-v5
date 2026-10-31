"use client"

import { useMemo } from "react"
import { motion, useReducedMotion } from "motion/react"
import AutoScroll from "embla-carousel-auto-scroll"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { TECH_STACK, type TechItem } from "@/features/home/data/tech-stack"

function TechCard({
  item,
  index,
  reduceMotion,
}: {
  item: TechItem
  index: number
  reduceMotion: boolean
}) {
  const reveal = (delay = 1, y = 14, duration = 0.6) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <motion.div
      {...reveal(index * 0.07, 12, 0.4)}
      className="group/card mr-3 flex h-24 w-28 shrink-0 cursor-crosshair flex-col items-center justify-center gap-2 rounded-3xl border-none bg-card/70 px-2 py-3 shadow-sm transition-colors duration-300 select-none sm:h-28 sm:w-32"
    >
      <div className="relative text-4xl" style={{ color: item.color }}>
        <div
          className="absolute inset-0 opacity-0 blur-2xl transition-opacity group-hover/card:opacity-30"
          style={{ backgroundColor: item.color }}
        />

        <motion.div
          whileHover={reduceMotion ? undefined : { rotate: 15, scale: 1.1 }}
          className="relative z-10"
        >
          {item.icon}
        </motion.div>
      </div>

      <span className="text-center text-[9px] font-bold tracking-[0.12em] text-muted-foreground uppercase transition-colors duration-300 group-hover/card:text-foreground sm:text-[10px] sm:tracking-[0.15em]">
        {item.label}
      </span>
    </motion.div>
  )
}

export function HomeTechGrid() {
  const reduceMotion = useReducedMotion() ?? false

  const plugins = useMemo(
    () =>
      reduceMotion
        ? []
        : [
          AutoScroll({
            speed: 0.7,
            startDelay: 0,
            direction: "forward",
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            playOnInit: true,
          }),
        ],
    [reduceMotion]
  )

  return (
    <div className="relative -mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: false,
        }}
        plugins={plugins}
        className="w-full cursor-grab active:cursor-grabbing"
      >
        <CarouselContent className="ml-0">
          {TECH_STACK.map((item, index) => (
            <CarouselItem key={item.label} className="basis-auto pl-0">
              <TechCard
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Left fade */}
      <div className="backdrop pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-background to-transparent sm:w-16 md:w-28" />
      <div className="backdrop pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-background to-transparent sm:w-16 md:w-28" />
      <div className="backdrop pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-background to-transparent sm:w-16 md:w-28" />

      {/* Right fade */}
      <div className="backdrop pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-background to-transparent sm:w-16 md:w-28" />
      <div className="backdrop pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-background to-transparent sm:w-16 md:w-28" />
      <div className="backdrop pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-background to-transparent sm:w-16 md:w-28" />
    </div>
  )
}