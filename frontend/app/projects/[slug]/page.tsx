import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"
import { ProjectCard } from "@/features/projects/components/project-card"
import { ProjectDetailHero } from "@/features/projects/components/project-detail-hero"
import { ProjectDetailOverview } from "@/features/projects/components/project-detail-overview"
import { projects, getProject } from "@/features/projects/data/projects"
import { siteConfig } from "@/config/site"

type Props = {
  params: Promise<{ slug: string }>
}

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
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Tarikul Islam",
      url: `${siteConfig.url}/`,
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

        <section>
          <ProjectDetailHero project={project} />
        </section>

        <Container>
          <ProjectDetailOverview project={project} />
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
