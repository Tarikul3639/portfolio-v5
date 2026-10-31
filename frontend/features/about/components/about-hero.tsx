import { Container } from "@/components/container"

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-125 w-125 rounded-full opacity-20 blur-[105px] sm:right-[10%]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.62 0.13 178) 38%, var(--primary)), transparent 72%)",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-28 z-0 h-95 w-95 rounded-full opacity-12 blur-[95px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.65 0.13 230) 28%, var(--ring)), transparent 70%)",
        }}
      />
      <Container className="relative z-10 pt-[clamp(4.8rem,9vw,8rem)] pb-12">
        <p className="mb-4 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
          About · A short introduction
        </p>
        <h1 className="max-w-222.5 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]">
          A developer with a <em className="text-primary">systems</em> mindset.
        </h1>
      </Container>
    </section>
  )
}
