import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/container"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/features/projects/components/project-card"
import { featuredProjects } from "@/features/projects/data/projects"

export function FeaturedProjects() {
  return (
    <section className="border-t border-border py-[clamp(5.5rem,10vw,9rem)]">
      <Container>
        <SectionHeading
          eyebrow="Selected work · 01—03"
          title="A few things I've made."
          note="A selection of full-stack products shaped around clear workflows and the people who use them."
        />
        <div className="grid grid-cols-1 gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-16 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            className="inline-flex w-fit items-center gap-3 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            href="/projects"
          >
            View all projects{" "}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
