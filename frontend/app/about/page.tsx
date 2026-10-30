import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Tarikul Islam, a backend-focused full-stack web developer based in Dhaka, Bangladesh.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Tarikul Islam",
    description:
      "A little about Tarikul Islam and how he approaches software development.",
    url: "/about",
  },
}

const principles = [
  {
    number: "01 / STRUCTURE",
    title: "Make complexity legible.",
    text: "Good boundaries and a clear data model make a product easier to build on and easier to trust.",
  },
  {
    number: "02 / USEFULNESS",
    title: "Start with the workflow.",
    text: "Features should help people complete real tasks, with fewer confusing steps and fewer loose ends.",
  },
  {
    number: "03 / CRAFT",
    title: "Care about the details.",
    text: "Thoughtful copy, steady interactions, and responsive layouts make technical work feel complete.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Container className="pt-[clamp(4.8rem,9vw,8rem)] pb-12">
          <p className="mb-4 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
            About · A short introduction
          </p>
          <h1 className="max-w-222.5 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]">
            A developer with a <em className="text-primary">systems</em>{" "}
            mindset.
          </h1>
        </Container>
        <Container className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.05fr_.95fr] md:gap-[clamp(3rem,8vw,8rem)]">
          <figure className="relative mx-auto mt-1 w-full max-w-105 md:mx-0">
            <Image
              className="block h-auto w-full filter-[saturate(.78)]"
              src="/images/profile/tarikul-islam.webp"
              alt="Tarikul Islam, full-stack web developer"
              width={1120}
              height={1488}
              sizes="(max-width: 760px) 80vw, 420px"
            />
            <figcaption className="absolute -right-3 -bottom-3 bg-background px-3 py-2 font-mono text-[.57rem] tracking-[.08em] text-muted-foreground">
              DHAKA, BANGLADESH
            </figcaption>
          </figure>
          <div className="pb-3">
            <div className="space-y-5 text-base leading-[1.9] text-muted-foreground">
              <p>
                I&apos;m{" "}
                <strong className="font-medium text-foreground">
                  Tarikul Islam
                </strong>
                , a full-stack web developer from Dhaka, Bangladesh. I focus on
                backend development with Node.js, NestJS, and TypeScript, and
                build product interfaces with React and Next.js.
              </p>
              <p>
                I like working on applications where the details connect:
                designing a data model, shaping an API, and making the interface
                feel straightforward for the person using it.
              </p>
              <p>
                My recent work includes tools for education, streaming, and
                community administration. Away from the code, I&apos;m studying
                at Bangladesh University of Business &amp; Technology.
              </p>
            </div>
            <dl className="mt-9 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-border pt-6 sm:grid-cols-2">
              <div className="grid gap-2">
                <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                  Based in
                </dt>
                <dd className="text-sm">Dhaka, Bangladesh</dd>
              </div>
              <div className="grid gap-2">
                <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                  Focus
                </dt>
                <dd className="text-sm">Backend-focused full stack</dd>
              </div>
              <div className="grid gap-2">
                <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                  Core tools
                </dt>
                <dd className="text-sm">TypeScript · Node.js · NestJS</dd>
              </div>
              <div className="grid gap-2">
                <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                  Currently studying
                </dt>
                <dd className="text-sm">
                  Bangladesh University of Business &amp; Technology
                </dd>
              </div>
            </dl>
            <Link
              className="mt-7 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              href="/contact"
            >
              Say hello <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Container>
        <section className="mt-[clamp(5.5rem,10vw,9rem)] border-t border-border py-[clamp(5rem,9vw,8rem)]">
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
      </main>
      <SiteFooter />
    </div>
  )
}
