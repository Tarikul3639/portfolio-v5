import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/container"

export function AboutIntroduction() {
  return (
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
            backend development with Node.js, NestJS, and TypeScript, and build
            product interfaces with React and Next.js.
          </p>
          <p>
            I like working on applications where the details connect: designing
            a data model, shaping an API, and making the interface feel
            straightforward for the person using it.
          </p>
          <p>
            My recent work includes tools for education, streaming, and
            community administration. Away from the code, I&apos;m studying at
            Bangladesh University of Business &amp; Technology.
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
          Say hello <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </Container>
  )
}
