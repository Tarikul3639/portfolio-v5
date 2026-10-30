import { Container } from "@/components/container"

export function AboutHero() {
  return (
    <Container className="pt-[clamp(4.8rem,9vw,8rem)] pb-12">
      <p className="mb-4 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
        About · A short introduction
      </p>
      <h1 className="max-w-222.5 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]">
        A developer with a <em className="text-primary">systems</em> mindset.
      </h1>
    </Container>
  )
}
