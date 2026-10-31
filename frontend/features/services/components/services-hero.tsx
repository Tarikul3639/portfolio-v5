
"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/container"
import { AngularLink } from "@/components/angular-link"

export function ServicesHero() {
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
        <section className="relative isolate overflow-hidden py-[clamp(4.8rem,9vw,8rem)]">
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-36 -left-32 z-0 h-130 w-130 rounded-full opacity-16 blur-[115px]"
                style={{
                    background:
                        "radial-gradient(circle, color-mix(in oklab, oklch(0.58 0.16 270) 30%, var(--primary)), transparent 72%)",
                }}
            />

            <Container className="relative z-10 grid grid-cols-1 items-end gap-9 md:grid-cols-[1.25fr_.75fr] md:gap-16">
                <div>
                    <motion.p
                        {...reveal(0, 8, 0.45)}
                        className="mb-5 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
                    >
                        Services · Development
                    </motion.p>

                    <motion.h1
                        {...reveal(0.08, 20, 0.7)}
                        className="max-w-205 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]"
                    >
                        Thoughtful software,{" "}
                        <em className="text-primary">built end to end.</em>
                    </motion.h1>
                </div>

                <div className="max-w-md md:pb-2">
                    <motion.p
                        {...reveal(0.16, 12, 0.55)}
                        className="text-base leading-[1.8] text-muted-foreground"
                    >
                        I work across the frontend and backend to turn a clear problem
                        into a focused web product, from responsive interfaces to the
                        APIs and data workflows behind them.
                    </motion.p>

                    <motion.div {...reveal(0.24, 10, 0.5)}>
                        <AngularLink className="mt-6" href="/contact">
                            <span className="group inline-flex items-center gap-1.5">
                                Talk about a project
                                <ArrowUpRight
                                    aria-hidden="true"
                                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110"
                                />
                            </span>
                        </AngularLink>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
