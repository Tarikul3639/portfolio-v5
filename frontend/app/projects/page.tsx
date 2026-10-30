import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"
import { ProjectCard } from "@/features/projects/components/project-card"
import { projects } from "@/features/projects/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack projects by Tarikul Islam, from education platforms to community software.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Tarikul Islam",
    description: "Selected full-stack projects by Tarikul Islam.",
    url: "/projects",
  },
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Container className="pt-[clamp(4.8rem,9vw,8rem)] pb-12">
          <p className="mb-4 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
            Selected work · 2026
          </p>
          <h1 className="max-w-222.5 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]">
            Projects with a <em className="text-primary">purpose.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground">
            A collection of products I&apos;ve worked on, from class
            coordination and online learning to media and community platforms.
          </p>
        </Container>
        <Container className="pb-[clamp(6rem,10vw,9rem)]">
          <div className="grid grid-cols-1 gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-18 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}
