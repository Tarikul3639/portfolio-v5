
"use client"

import {
    Code2,
    Layers,
    RefreshCw,
    Workflow,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { Container } from "@/components/container"

const processSteps = [
    {
        number: "01",
        title: "Understand the workflow",
        description:
            "Start with the people, tasks, and constraints the product needs to support.",
        icon: Workflow,
    },
    {
        number: "02",
        title: "Agree on the shape",
        description:
            "Clarify the first useful scope, the main interfaces, and the system boundaries.",
        icon: Layers,
    },
    {
        number: "03",
        title: "Build in slices",
        description:
            "Work through connected pieces so interface and backend decisions stay aligned.",
        icon: Code2,
    },
    {
        number: "04",
        title: "Review and refine",
        description:
            "Walk through the result, gather feedback, and identify the next useful improvement.",
        icon: RefreshCw,
    },
]

export function ServicesProcess() {
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
        <section className="border-y border-border bg-muted/50 py-[clamp(4.5rem,8vw,7rem)]">
            <Container className="grid grid-cols-1 gap-10 md:grid-cols-[.7fr_1.3fr] md:gap-16">
                <div>
                    <motion.p
                        {...reveal(0, 8, 0.45)}
                        className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
                    >
                        A practical starting point
                    </motion.p>

                    <motion.h2
                        {...reveal(0.08, 18, 0.65)}
                        className="mt-3 max-w-sm font-serif text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-.06em]"
                    >
                        Clear scope, steady{" "}
                        <em className="text-primary">progress.</em>
                    </motion.h2>
                </div>

                <ol className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon

                        return (
                            <li key={`process-step-${step.number}`}>
                                <motion.div
                                    {...reveal(index * 0.08, 12, 0.55)}
                                    className="border-t border-border pt-4"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="font-mono text-[.65rem] text-primary">
                                            {step.number}
                                        </p>

                                        <Icon
                                            aria-hidden="true"
                                            className="size-4 text-muted-foreground"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h3 className="mt-3 font-serif text-xl tracking-[-.03em]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 max-w-92 text-sm leading-[1.7] text-muted-foreground">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </li>
                        )
                    })}
                </ol>
            </Container>
        </section>
    )
}
