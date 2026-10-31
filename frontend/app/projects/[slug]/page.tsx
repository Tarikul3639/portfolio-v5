import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Check, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"
import { GitHubIcon as Github } from "@/components/icons/GitHubIcon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"
import { ProjectArtwork } from "@/features/projects/components/project-artwork"
import { ProjectCard } from "@/features/projects/components/project-card"
import { projects, getProject } from "@/features/projects/data/projects"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: "Project not found",
      robots: { index: false, follow: true },
    }
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} — Tarikul Islam`,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2)

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: project.category,
    url: `https://tarikul-islam.me/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Tarikul Islam",
      url: "https://tarikul-islam.me/",
    },
    codeRepository: project.repos.map((repository) => repository.href),
  }

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectSchema),
          }}
        />

        <Container className="pt-[clamp(4rem,7vw,6.5rem)]">
          <nav
            className="mb-11 flex flex-wrap items-center gap-2.5 font-mono text-[.65rem] text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link className="transition-colors hover:text-foreground" href="/">
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              className="transition-colors hover:text-foreground"
              href="/projects"
            >
              Projects
            </Link>

            <span aria-hidden="true">/</span>

            <span className="text-foreground">{project.title}</span>
          </nav>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-8">
            <div>
              <p className="mb-3 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                {project.category}
              </p>

              <h1 className="font-serif text-[clamp(3.2rem,8vw,7rem)] leading-[.9] tracking-[-.085em]">
                {project.title}
              </h1>
            </div>

            <p className="flex items-center gap-2 pb-1 font-mono text-xs text-muted-foreground">
              <span>{project.year}</span>
              <span aria-hidden="true">/</span>
              <span>{project.role}</span>
            </p>
          </div>

          <ProjectArtwork project={project} detail className="mt-12" />
        </Container>

        <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[.55fr_1.45fr] md:gap-[clamp(3rem,10vw,10rem)] md:pb-32">
          <aside
            className="grid content-start gap-7"
            aria-label="Project information"
          >
            <dl className="border-t border-border pt-3">
              <dt className="mb-3 font-mono text-[.61rem] tracking-[.09em] text-muted-foreground uppercase">
                Role
              </dt>

              <dd className="text-sm leading-[1.75]">{project.role}</dd>
            </dl>

            <dl className="border-t border-border pt-3">
              <dt className="mb-3 font-mono text-[.61rem] tracking-[.09em] text-muted-foreground uppercase">
                Stack
              </dt>

              <dd>
                <ul className="m-0 flex flex-wrap gap-x-3 gap-y-2 p-0 font-mono text-[.69rem] text-muted-foreground">
                  {project.stack.map((item) => (
                    <li className="list-none" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>

            <div className="border-t border-border pt-3">
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
            </div>
          </aside>

          <article>
            <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
              Overview
            </p>

            <h2 className="mt-2 mb-4 font-serif text-[clamp(2rem,4vw,3.1rem)] tracking-[-.055em]">
              Designed around the way people work.
            </h2>

            <p className="max-w-188 text-base leading-[1.85] text-muted-foreground">
              {project.description}
            </p>

            <h3 className="mt-11 mb-4 font-serif text-2xl tracking-[-.04em]">
              What it brings together
            </h3>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <li
                  className="flex items-baseline gap-3 text-sm leading-[1.7] text-muted-foreground"
                  key={highlight}
                >
                  <Check
                    aria-hidden="true"
                    className="relative top-0.5 size-3.5 shrink-0 text-primary"
                  />

                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        </Container>

        <section className="border-t border-border py-16">
          <Container>
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                  Keep exploring
                </p>

                <h2 className="mt-3 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-.055em]">
                  More selected work.
                </h2>
              </div>

              <Link
                className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                href="/projects"
              >
                All projects
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-16 md:grid-cols-2">
              {relatedProjects.map((item, index) => (
                <ProjectCard index={index} key={item.slug} project={item} />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
