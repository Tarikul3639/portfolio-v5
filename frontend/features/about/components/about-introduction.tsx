"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { Container } from "@/components/container"

export function AboutIntroduction() {
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

  return (
    <Container>
      <div className="grid grid-cols-1 items-start gap-12 border-t border-border py-[clamp(3.5rem,7vw,6rem)] md:grid-cols-[.85fr_1.15fr] md:gap-[clamp(3rem,8vw,8rem)]">
        {/* Profile image */}
        <motion.figure
          {...reveal(0, 14, 0.65)}
          className="relative mx-auto w-full max-w-105 md:mx-0"
        >
          <div
            aria-hidden="true"
            className="absolute top-5 right-0 bottom-5 left-5 border border-border"
          />

          <Image
            className="relative z-10 block aspect-[.79] h-auto w-full object-cover object-[center_20%] filter-[saturate(.78)]"
            src="/images/profile/tarikul-islam.webp"
            alt="Tarikul Islam, full-stack web developer"
            width={1120}
            height={1488}
            sizes="(max-width: 760px) 88vw, 420px"
          />

          <motion.figcaption
            {...reveal(0.12, 8, 0.45)}
            className="absolute right-0 -bottom-4 z-20 flex gap-2 bg-background px-2 font-mono text-[.62rem] text-muted-foreground"
          >
            <span className="text-primary">02</span>
            <span>DHAKA, BANGLADESH</span>
          </motion.figcaption>
        </motion.figure>

        {/* Introduction content */}
        <div className="max-w-165 pb-3 md:pt-1">
          <motion.p
            {...reveal(0, 8, 0.45)}
            className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
          >
            A little about me
          </motion.p>

          <div className="mt-7 space-y-5 text-base leading-[1.85] text-muted-foreground">
            <motion.p {...reveal(0.06, 12, 0.55)}>
              I&apos;m{" "}
              <strong className="font-medium text-foreground">
                Tarikul Islam
              </strong>
              , a full-stack web developer from Dhaka, Bangladesh. I focus on
              backend development with Node.js, NestJS, and TypeScript, and
              build product interfaces with React and Next.js.
            </motion.p>

            <motion.p {...reveal(0.12, 12, 0.55)}>
              I like working on applications where the details connect:
              designing a data model, shaping an API, and making the interface
              feel straightforward for the person using it.
            </motion.p>

            <motion.p {...reveal(0.18, 12, 0.55)}>
              My recent work includes tools for education, streaming, and
              community administration. Away from the code, I&apos;m studying at
              Bangladesh University of Business &amp; Technology.
            </motion.p>
          </div>

          {/* Personal details */}
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 border-y border-border py-5 sm:grid-cols-2">
            <motion.div {...reveal(0, 8, 0.4)} className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                Based in
              </dt>
              <dd className="text-sm">Dhaka, Bangladesh</dd>
            </motion.div>

            <motion.div {...reveal(0.05, 8, 0.4)} className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                Focus
              </dt>
              <dd className="text-sm">Backend-focused full stack</dd>
            </motion.div>

            <motion.div {...reveal(0.1, 8, 0.4)} className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                Core tools
              </dt>
              <dd className="text-sm">TypeScript · Node.js · NestJS</dd>
            </motion.div>

            <motion.div {...reveal(0.15, 8, 0.4)} className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                Currently studying
              </dt>
              <dd className="text-sm">
                Bangladesh University of Business &amp; Technology
              </dd>
            </motion.div>
          </dl>

          {/* Contact link */}
          <motion.div {...reveal(0.2, 8, 0.45)}>
            <Link
              className="mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium capitalize transition-colors hover:border-primary hover:text-primary"
              href="/contact"
            >
              Say hello
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
