import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/container"
import { MotionReveal } from "@/components/motion"

export function AboutIntroduction() {
  return (
    <Container>
      <MotionReveal className="grid grid-cols-1 items-start gap-12 border-t border-border py-[clamp(3.5rem,7vw,6rem)] md:grid-cols-[.85fr_1.15fr] md:gap-[clamp(3rem,8vw,8rem)]">
        <figure className="relative mx-auto w-full max-w-105 md:mx-0">
          <div
            aria-hidden="true"
            className="absolute top-5 right-0 bottom-5 left-5 border border-border"
          />
          <Image
            className="relative z-10 block aspect-[.79] h-auto w-full object-cover object-[center_20%] filter-[saturate(.78)]"
            src="/images/profile/tarikul-islam.webp"
            alt="Tarikul Islam, full-stack web developer"
            width={1120}
            height={1488}
            sizes="(max-width: 760px) 88vw, 420px"
          />
          <figcaption className="absolute right-0 -bottom-4 z-20 flex gap-2 bg-background px-2 font-mono text-[.62rem] text-muted-foreground">
            <span className="text-primary">02</span>
            <span>DHAKA, BANGLADESH</span>
          </figcaption>
        </figure>
        <div className="max-w-165 pb-3 md:pt-1">
          <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
            A little about me
          </p>
          <div className="mt-7 space-y-5 text-base leading-[1.85] text-muted-foreground">
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
              community administration. Away from the code, I&apos;m studying at
              Bangladesh University of Business &amp; Technology.
            </p>
          </div>
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 border-y border-border py-5 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                Based in
              </dt>
              <dd className="text-sm">Dhaka, Bangladesh</dd>
            </div>
            <div className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                Focus
              </dt>
              <dd className="text-sm">Backend-focused full stack</dd>
            </div>
            <div className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                Core tools
              </dt>
              <dd className="text-sm">TypeScript · Node.js · NestJS</dd>
            </div>
            <div className="grid gap-1.5">
              <dt className="font-mono text-[.6rem] tracking-[.09em] text-muted-foreground uppercase">
                Currently studying
              </dt>
              <dd className="text-sm">
                Bangladesh University of Business &amp; Technology
              </dd>
            </div>
          </dl>
          <Link
            className="mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary capitalize"
            href="/contact"
          >
            Say hello <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </MotionReveal>
    </Container>
  )
}
