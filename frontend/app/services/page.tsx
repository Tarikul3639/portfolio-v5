import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  Check,
  Code2,
  Layers,
  RefreshCw,
  Workflow,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"
import { AngularLink } from "@/components/angular-link"
import { SectionHeading } from "@/components/section-heading"
import { getProject } from "@/features/projects/data/projects"
import { services } from "@/features/services/data/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web application, backend API, and responsive frontend development from Tarikul Islam, a backend-focused full-stack developer.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Development Services — Tarikul Islam",
    description:
      "Full-stack web applications, backend APIs, and responsive product interfaces.",
    url: "/services",
  },
}

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

export default function ServicesPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-[clamp(4.8rem,9vw,8rem)]">
          <Container className="grid grid-cols-1 items-end gap-9 md:grid-cols-[1.25fr_.75fr] md:gap-16">
            <div>
              <p className="mb-5 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                Services · Development
              </p>

              <h1 className="max-w-205 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]">
                Thoughtful software,{" "}
                <em className="text-primary">built end to end.</em>
              </h1>
            </div>

            <div className="max-w-md md:pb-2">
              <p className="text-base leading-[1.8] text-muted-foreground">
                I work across the frontend and backend to turn a clear problem
                into a focused web product, from responsive interfaces to the
                APIs and data workflows behind them.
              </p>

              <AngularLink className="mt-6" href="/contact">
                Talk about a project
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </AngularLink>
            </div>
          </Container>
        </section>

        <section className="border-t border-border py-[clamp(5rem,9vw,8rem)]">
          <Container>
            <SectionHeading
              eyebrow="What I can help build"
              title="A few connected disciplines."
              note="The areas below reflect the kinds of work represented in my public projects. The right scope depends on what you are trying to make."
            />

            <div className="divide-y divide-border border-y border-border">
              {services.map((service) => {
                const evidence = service.projectSlugs
                  .map((slug) => getProject(slug))
                  .filter((project) => project !== undefined)

                return (
                  <article
                    className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[.65fr_1.35fr] md:gap-12 md:py-10"
                    key={service.number}
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
                          {service.scope.map((item) => (
                            <li
                              className="flex items-start gap-3"
                              key={item}
                            >
                              <Check
                                aria-hidden="true"
                                className="mt-0.5 size-4 shrink-0 text-primary"
                                strokeWidth={1.7}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-border pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                        <p className="mb-3 font-mono text-[.62rem] tracking-widest text-muted-foreground uppercase">
                          Related work
                        </p>

                        <ul className="grid gap-2.5">
                          {evidence.map((project) => (
                            <li key={project.slug}>
                              <Link
                                className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                                href={`/projects/${project.slug}`}
                              >
                                {project.title}

                                <ArrowUpRight
                                  aria-hidden="true"
                                  className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-muted/50 py-[clamp(4.5rem,8vw,7rem)]">
          <Container className="grid grid-cols-1 gap-10 md:grid-cols-[.7fr_1.3fr] md:gap-16">
            <div>
              <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                A practical starting point
              </p>

              <h2 className="mt-3 max-w-sm font-serif text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-.06em]">
                Clear scope, steady{" "}
                <em className="text-primary">progress.</em>
              </h2>
            </div>

            <ol className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {processSteps.map((step) => {
                const Icon = step.icon

                return (
                  <li
                    className="border-t border-border pt-4"
                    key={step.number}
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
                  </li>
                )
              })}
            </ol>
          </Container>
        </section>

        <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
          <Container className="flex flex-col items-start justify-between gap-8 border border-border bg-card p-[clamp(1.5rem,4vw,3rem)] md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                Have a project in mind?
              </p>

              <h2 className="mt-3 max-w-162.5 font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[.98] tracking-[-.065em]">
                Let&apos;s talk about{" "}
                <em className="text-primary">what you need.</em>
              </h2>
            </div>

            <AngularLink href="/contact">
              Get in touch
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </AngularLink>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}