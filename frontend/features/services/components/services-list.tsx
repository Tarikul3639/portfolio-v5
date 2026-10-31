
"use client"

import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { getProject } from "@/features/projects/data/projects"
import { services } from "@/features/services/data/services"

export function ServicesList() {
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
        <section className="border-t border-border py-[clamp(5rem,9vw,8rem)]">
            <Container>
                <SectionHeading
                    eyebrow="What I can help build"
                    title="A few connected disciplines."
                    note="The areas below reflect the kinds of work represented in my public projects. The right scope depends on what you are trying to make."
                />

                <div className="divide-y divide-border border-y border-border">
                    {services.map((service, index) => {
                        const evidence = service.projectSlugs
                            .map((slug) => getProject(slug))
                            .filter((project) => project !== undefined)

                        return (
                            <motion.article
                                key={`service-${service.number}-${service.title}`}
                                {...reveal(index * 0.06, 14, 0.55)}
                                className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[.65fr_1.35fr] md:gap-12 md:py-10"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="pt-1 font-mono text-xs text-primary">
                                        {service.number}
                                    </span>

                                    <h2 className="max-w-xs font-serif text-[clamp(1.75rem,3.1vw,2.65rem)] leading-[1.05] tracking-tighter">
                                        {service.title}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_.9fr] lg:gap-10">
                                    <div>
                                        <p className="max-w-152 text-[.96rem] leading-[1.8] text-muted-foreground">
                                            {service.summary}
                                        </p>

                                        <ul className="mt-5 grid gap-2.5 text-sm text-muted-foreground">
                                            {service.scope.map((item, itemIndex) => (
                                                <li key={`service-${service.number}-scope-${itemIndex}`}>
                                                    <motion.div
                                                        {...reveal(itemIndex * 0.04, 8, 0.4)}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <Check
                                                            aria-hidden="true"
                                                            className="mt-0.5 size-4 shrink-0 text-primary"
                                                            strokeWidth={1.7}
                                                        />
                                                        <span>{item}</span>
                                                    </motion.div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="border-t border-border pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                                        <p className="mb-3 font-mono text-[.62rem] tracking-widest text-muted-foreground uppercase">
                                            Related work
                                        </p>

                                        <ul className="grid gap-2.5">
                                            {evidence.map((project, projectIndex) => (
                                                <li key={`service-${service.number}-project-${project.slug}`}>
                                                    <motion.div
                                                        {...reveal(projectIndex * 0.06, 8, 0.4)}
                                                    >
                                                        <Link
                                                            href={`/projects/${project.slug}`}
                                                            className="group flex items-center justify-between gap-3 border-b border-transparent py-1 text-sm transition-colors hover:border-border hover:text-primary"
                                                        >
                                                            <span>{project.title}</span>
                                                            <ArrowUpRight
                                                                aria-hidden="true"
                                                                className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                                strokeWidth={1.6}
                                                            />
                                                        </Link>
                                                    </motion.div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
