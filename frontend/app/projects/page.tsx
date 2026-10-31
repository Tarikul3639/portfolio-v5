import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"
import { ProjectsHero } from "@/features/projects/components/projects-hero"
import { ProjectCard } from "@/features/projects/components/project-card"
import { projects } from "@/features/projects/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore full-stack web development projects by Tarikul Islam, featuring web applications, education platforms, community software, and projects built with Next.js, React, TypeScript, and Node.js.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    type: "website",
    title: "Projects — Tarikul Islam",
    description:
      "Explore selected web development projects by Tarikul Islam, including full-stack applications, education platforms, and community software.",
    url: "/projects",
    siteName: "Tarikul Islam",
    images: [
      {
        url: "/images/profile/tarikul-islam.webp",
        alt: "Tarikul Islam — Full-Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects — Tarikul Islam",
    description:
      "Selected full-stack web development projects by Tarikul Islam, built with modern web technologies.",
    images: ["/images/profile/tarikul-islam.webp"],
  },
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <ProjectsHero />

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
