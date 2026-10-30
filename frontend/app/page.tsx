import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"
import { AngularLink } from "@/components/angular-link"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { featuredProjects } from "@/data/projects"

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tarikul Islam",
  url: "https://tarikul-islam.me/",
  image: "https://tarikul-islam.me/images/profile/tarikul-islam.webp",
  jobTitle: "Full-Stack Web Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://github.com/Tarikul3639",
    "https://www.linkedin.com/in/tarikul-islam-a439a0253",
  ],
}

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <section className="relative isolate overflow-hidden py-[clamp(4.2rem,9vw,8.2rem)]">
          <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1.25fr)_minmax(260px,.75fr)] md:gap-[clamp(2rem,6vw,6.5rem)]">
            <div className="relative z-10">
              <p className="mb-6 flex items-center gap-3 font-mono text-[.69rem] tracking-[.04em] text-muted-foreground before:h-px before:w-[30px] before:bg-primary before:content-['']">
                Full-stack developer · Dhaka, Bangladesh
              </p>
              <h1 className="max-w-[790px] text-[clamp(3.4rem,7vw,6.8rem)] leading-[.98] font-normal tracking-[-.075em] max-md:text-[clamp(3.2rem,12vw,5.5rem)]">
                I build the <em className="font-serif text-primary">systems</em>
                <br />
                behind useful
                <br />
                digital products.
              </h1>
              <p className="mt-7 max-w-lg text-[clamp(1rem,1.4vw,1.12rem)] leading-[1.8] text-muted-foreground">
                I&apos;m Tarikul Islam, a backend-focused full-stack developer
                working across TypeScript, Node.js, NestJS, React, and Next.js.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5 max-[420px]:flex-col max-[420px]:items-start">
                <AngularLink href="/projects">
                  Explore selected work <span aria-hidden="true">↗</span>
                </AngularLink>
                <Link
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="/services"
                >
                  See how I can help
                </Link>
              </div>
            </div>
            <figure className="relative mx-auto w-[74%] max-w-85 p-[15px] md:mx-0 md:ml-auto md:w-full md:max-w-[390px]">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 bottom-6 left-6 border border-border"
              />
              <span
                aria-hidden="true"
                className="absolute -top-2.5 right-1 size-17 border-t border-r border-primary"
              />
              <Image
                className="relative z-10 block aspect-[.79] h-auto w-full object-cover [object-position:center_25%] [filter:saturate(.78)]"
                src="/images/profile/tarikul-islam.webp"
                alt="Portrait of Tarikul Islam"
                width={1120}
                height={1488}
                priority
                sizes="(max-width: 760px) 74vw, 390px"
              />
              <figcaption className="absolute right-0 -bottom-4 z-20 flex gap-2 font-mono text-[.62rem] text-muted-foreground">
                <span className="text-primary">01</span>
                <span>A little about the person behind the code</span>
              </figcaption>
            </figure>
          </Container>
          <span
            aria-hidden="true"
            className="absolute right-[5.3vw] bottom-8 hidden font-mono text-[.64rem] text-muted-foreground [writing-mode:vertical-rl] md:block"
          >
            PORTFOLIO / 2026
          </span>
        </section>

        <section className="border-t border-border py-[clamp(5.5rem,10vw,9rem)]">
          <Container>
            <SectionHeading
              eyebrow="Selected work · 01—03"
              title="A few things I've made."
              note="A selection of full-stack products shaped around clear workflows and the people who use them."
            />
            <div className="grid grid-cols-1 gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-16 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  index={index}
                  key={project.slug}
                  project={project}
                />
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <Link
                className="inline-flex w-fit items-center gap-3 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                href="/projects"
              >
                View all projects <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-muted/50 py-[clamp(5.5rem,10vw,9rem)]">
          <Container className="grid grid-cols-1 gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-12">
            <div>
              <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                How I think about the work
              </p>
              <h2 className="mt-4 max-w-88 font-serif text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.04] tracking-[-.06em]">
                Good software has a <em className="text-primary">quiet</em> kind
                of clarity.
              </h2>
            </div>
            <div className="max-w-172 text-base leading-[1.85] text-muted-foreground">
              <p>
                I enjoy taking a workflow with a lot of moving parts and giving
                it a dependable shape: clear boundaries, useful APIs, thoughtful
                interfaces, and room to grow.
              </p>
              <p className="mt-4">
                My work often sits close to the backend, while keeping the whole
                product experience in view.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                <div className="border-t border-border pt-3">
                  <h3 className="mb-2 font-mono text-[.67rem] font-normal text-foreground">
                    BACKEND
                  </h3>
                  <p className="text-[.8rem] leading-[1.7]">
                    Node.js, NestJS, REST APIs, authentication
                  </p>
                </div>
                <div className="border-t border-border pt-3">
                  <h3 className="mb-2 font-mono text-[.67rem] font-normal text-foreground">
                    PRODUCT UI
                  </h3>
                  <p className="text-[.8rem] leading-[1.7]">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div className="border-t border-border pt-3">
                  <h3 className="mb-2 font-mono text-[.67rem] font-normal text-foreground">
                    DATA
                  </h3>
                  <p className="text-[.8rem] leading-[1.7]">
                    MongoDB, PostgreSQL, Prisma, Mongoose
                  </p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  href="/about"
                >
                  More about me <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  href="/services"
                >
                  Services <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
          <Container className="flex flex-col items-start justify-between gap-8 border border-border bg-card p-[clamp(1.5rem,4vw,3rem)] md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                Have something in mind?
              </p>
              <h2 className="mt-3 max-w-[650px] font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[.98] tracking-[-.065em]">
                Let&apos;s make it <em className="text-primary">work well.</em>
              </h2>
            </div>
            <AngularLink href="/contact">
              Get in touch <span aria-hidden="true">↗</span>
            </AngularLink>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
