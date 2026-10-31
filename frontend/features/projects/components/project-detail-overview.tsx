
"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, Check, ExternalLink } from "lucide-react"
import { GitHubIcon as Github } from "@/components/icons/GitHubIcon"
import { getProject } from "@/features/projects/data/projects"

type Project = NonNullable<ReturnType<typeof getProject>>

type Props = {
    project: Project
}

export function ProjectDetailOverview({ project }: Props) {
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
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[.55fr_1.45fr] md:gap-[clamp(3rem,10vw,10rem)] md:pb-32">
            <aside
                className="grid content-start gap-7"
                aria-label="Project information"
            >
                <motion.dl
                    {...reveal(0, 12, 0.55)}
                    className="border-t border-border pt-3"
                >
                    <dt className="mb-3 font-mono text-[.61rem] tracking-[.09em] text-muted-foreground uppercase">
                        Role
                    </dt>
                    <dd className="text-sm leading-[1.75]">{project.role}</dd>
                </motion.dl>

                <motion.dl
                    {...reveal(0.07, 12, 0.55)}
                    className="border-t border-border pt-3"
                >
                    <dt className="mb-3 font-mono text-[.61rem] tracking-[.09em] text-muted-foreground uppercase">
                        Stack
                    </dt>

                    <dd>
                        <ul className="m-0 flex flex-wrap gap-x-3 gap-y-2 p-0 font-mono text-[.69rem] text-muted-foreground">
                            {project.stack.map((item, index) => (
                                <motion.li
                                    key={item}
                                    {...reveal(0.1 + index * 0.035, 8, 0.4)}
                                    className="list-none"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </dd>
                </motion.dl>

                <motion.div
                    {...reveal(0.14, 12, 0.55)}
                    className="border-t border-border pt-3"
                >
                    <p className="mb-3 font-mono text-[.61rem] tracking-[.09em] text-muted-foreground uppercase">
                        Links
                    </p>

                    <ul className="grid gap-2">
                        {project.repos.map((repository) => {
                            const isGitHub = /github\.com/i.test(repository.href)
                            const RepositoryIcon = isGitHub ? Github : ExternalLink

                            return (
                                <li key={repository.href}>
                                    <a
                                        className="group inline-flex w-fit items-center gap-2 py-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                                        href={repository.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <RepositoryIcon
                                            aria-hidden="true"
                                            className="size-4 shrink-0"
                                        />

                                        <span>{repository.label}</span>

                                        <ArrowUpRight
                                            aria-hidden="true"
                                            className="size-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                        />
                                    </a>
                                </li>
                            )
                        })}

                        {project.demo && (
                            <li>
                                <a
                                    className="group inline-flex w-fit items-center gap-2 py-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ExternalLink
                                        aria-hidden="true"
                                        className="size-4 shrink-0"
                                    />

                                    <span>Live demo</span>

                                    <ArrowUpRight
                                        aria-hidden="true"
                                        className="size-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    />
                                </a>
                            </li>
                        )}
                    </ul>
                </motion.div>
            </aside>

            <article>
                <motion.p
                    {...reveal(0.04, 8, 0.45)}
                    className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
                >
                    Overview
                </motion.p>

                <motion.h2
                    {...reveal(0.1, 18, 0.65)}
                    className="mt-2 mb-4 font-serif text-[clamp(2rem,4vw,3.1rem)] tracking-[-.055em]"
                >
                    Designed around the way people work.
                </motion.h2>

                <motion.p
                    {...reveal(0.17, 12, 0.55)}
                    className="max-w-188 text-base leading-[1.85] text-muted-foreground"
                >
                    {project.description}
                </motion.p>

                <motion.h3
                    {...reveal(0.08, 14, 0.55)}
                    className="mt-11 mb-4 font-serif text-2xl tracking-[-.04em]"
                >
                    What it brings together
                </motion.h3>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {project.highlights.map((highlight, index) => (
                        <motion.li
                            key={highlight}
                            {...reveal(0.12 + index * 0.06, 10, 0.45)}
                            className="flex items-baseline gap-3 text-sm leading-[1.7] text-muted-foreground"
                        >
                            <Check
                                aria-hidden="true"
                                className="relative top-0.5 size-3.5 shrink-0 text-primary"
                            />
                            {highlight}
                        </motion.li>
                    ))}
                </ul>
            </article>
        </div>
    )
}
