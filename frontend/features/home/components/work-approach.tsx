
"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/container"

export function WorkApproach() {
  const reduceMotion = useReducedMotion() ?? false

  const reveal = (delay = 1, y = 14, duration = 0.6) => ({
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
    <section className="border-y border-border bg-muted/50 py-[clamp(5.5rem,10vw,9rem)]">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-12">
        <div>
          <motion.p
            className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
            {...reveal(0, 8, 0.45)}
          >
            How I think about the work
          </motion.p>

          <motion.h2
            className="mt-4 max-w-88 font-serif text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.04] tracking-[-.06em]"
            {...reveal(0.08, 20, 0.7)}
          >
            Good software has a <em className="text-primary">quiet</em> kind
            of clarity.
          </motion.h2>
        </div>

        <div className="max-w-172 text-base leading-[1.85] text-muted-foreground">
          <motion.p {...reveal(0.12, 14, 0.6)}>
            I enjoy taking a workflow with a lot of moving parts and giving it
            a dependable shape: clear boundaries, useful APIs, thoughtful
            interfaces, and room to grow.
          </motion.p>

          <motion.p
            className="mt-4"
            {...reveal(0.2, 14, 0.6)}
          >
            My work often sits close to the backend, while keeping the whole
            product experience in view.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            <motion.div
              className="group/skill border-t border-border pt-3 transition-colors duration-300 hover:border-primary"
              {...reveal(0.08, 12, 0.55)}
            >
              <h3 className="mb-2 font-mono text-[.67rem] font-normal text-foreground transition-colors duration-300 group-hover/skill:text-primary">
                BACKEND
              </h3>
              <p className="text-[.8rem] leading-[1.7]">
                Node.js, NestJS, REST APIs, authentication
              </p>
            </motion.div>

            <motion.div
              className="group/skill border-t border-border pt-3 transition-colors duration-300 hover:border-primary"
              {...reveal(0.16, 12, 0.55)}
            >
              <h3 className="mb-2 font-mono text-[.67rem] font-normal text-foreground transition-colors duration-300 group-hover/skill:text-primary">
                PRODUCT UI
              </h3>
              <p className="text-[.8rem] leading-[1.7]">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </motion.div>

            <motion.div
              className="group/skill border-t border-border pt-3 transition-colors duration-300 hover:border-primary"
              {...reveal(0.24, 12, 0.55)}
            >
              <h3 className="mb-2 font-mono text-[.67rem] font-normal text-foreground transition-colors duration-300 group-hover/skill:text-primary">
                DATA
              </h3>
              <p className="text-[.8rem] leading-[1.7]">
                MongoDB, PostgreSQL, Prisma, Mongoose
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
            {...reveal(0.28, 8, 0.5)}
          >
            <Link
              className="group/link inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors duration-300 hover:border-primary hover:text-primary"
              href="/about"
            >
              More about me
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </Link>

            <Link
              className="group/link inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors duration-300 hover:border-primary hover:text-primary"
              href="/services"
            >
              Services
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
