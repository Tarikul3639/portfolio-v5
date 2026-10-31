import { Container } from "@/components/container"
import { principles } from "@/features/about/data/principles"

export function AboutPrinciples() {
  return (
    <section className="mt-[clamp(10vw,9rem)] border-t border-border py-[clamp(5rem,9vw,8rem)]">
      <Container>
        <div className="mb-10">
          <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
            What matters to me
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-.055em]">
            How I approach building.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
          {principles.map((principle) => (
            <article
              className="border-t border-border pt-4"
              key={principle.number}
            >
              <span className="font-mono text-[.68rem] text-primary">
                {principle.number}
              </span>
              <h3 className="mt-5 font-serif text-[1.7rem] tracking-[-.04em]">
                {principle.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-[1.75] text-muted-foreground">
                {principle.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
