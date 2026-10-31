import { ArrowUpRight } from "lucide-react"
import { AngularLink } from "@/components/angular-link"
import { Container } from "@/components/container"

export function HomeCta() {
  return (
    <section className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,7.5rem)]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-32 z-0 h-120 w-120 rounded-full opacity-20 blur-[105px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.58 0.16 285) 30%, var(--primary)), transparent 72%)",
        }}
      />
      <Container className="relative z-10 flex flex-col items-start justify-between gap-8 border border-border bg-card p-[clamp(1.5rem,4vw,3rem)] md:flex-row md:items-end">
        <div>
          <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
            Have something in mind?
          </p>

          <h2 className="mt-3 max-w-162.5 font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[.98] tracking-[-.065em]">
            Let&apos;s make it <em className="text-primary">work well.</em>
          </h2>
        </div>

        <AngularLink href="/contact">
          <span className="group inline-flex items-center gap-1.5">
            Get in touch
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </AngularLink>
      </Container>
    </section>
  )
}
