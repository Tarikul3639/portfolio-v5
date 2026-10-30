import Link from "next/link"
import type { PortfolioProject } from "@/data/projects"
import { ProjectArtwork } from "@/components/project-artwork"

export function ProjectCard({
  project,
  index = 0,
}: {
  project: PortfolioProject
  index?: number
}) {
  return (
    <article className={index % 2 === 0 ? "md:pt-10" : undefined}>
      <Link
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project`}
      >
        <ProjectArtwork
          project={project}
          index={index}
          className="transition-[filter] duration-300 group-hover:brightness-[.97]"
        />
      </Link>
      <div className="flex flex-col justify-between gap-4 pt-5 md:flex-row md:items-end md:gap-6">
        <div>
          <p className="mb-2 font-mono text-[.59rem] tracking-[.11em] text-muted-foreground uppercase">
            {project.category}
          </p>
          <h3 className="font-serif text-[clamp(1.55rem,2.4vw,2.1rem)] leading-[1.1] tracking-[-.055em]">
            <Link
              className="transition-colors hover:text-primary"
              href={`/projects/${project.slug}`}
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 max-w-120 text-[.88rem] leading-[1.65] text-muted-foreground">
            {project.summary}
          </p>
        </div>
        <Link
          className="group/link inline-flex w-fit shrink-0 items-center gap-2 border-b border-foreground pb-1 text-xs transition-colors hover:border-primary hover:text-primary"
          href={`/projects/${project.slug}`}
        >
          View project{" "}
          <span
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            aria-hidden="true"
          >
            ↗
          </span>
        </Link>
      </div>
      <ul
        className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[.62rem] text-muted-foreground"
        aria-label="Technologies"
      >
        {project.stack.slice(0, 4).map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  )
}
