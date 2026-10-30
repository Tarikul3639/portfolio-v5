import { Container } from "@/components/container"
import { AboutTechGrid } from "@/features/about/components/about-tech-grid"

export function AboutTechStack() {
  return (
    <section className="border-t border-border py-[clamp(3.5rem,6vw,5.5rem)]">
      <Container>
        <div className="mb-7 grid gap-3 md:grid-cols-[.8fr_1fr] md:gap-12">
          <div>
            <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
              Skills and tools
            </p>
            <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.1rem)] leading-none tracking-[-.055em]">
              Technologies I <em className="text-primary">work with.</em>
            </h2>
          </div>
          <p className="max-w-120 text-sm leading-[1.7] text-muted-foreground">
            A compact overview of the tools behind my work and the topics I am
            currently exploring.
          </p>
        </div>
        <AboutTechGrid />
      </Container>
    </section>
  )
}
