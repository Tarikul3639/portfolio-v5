
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/container"

export function WorkApproach() {
  return (
    <section className="border-y border-border bg-muted/50 py-[clamp(5.5rem,10vw,9rem)]">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-12">
        <div>
          <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
            How I think about the work
          </p>

          <h2 className="mt-4 max-w-88 font-serif text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.04] tracking-[-.06em]">
            Good software has a{" "}
            <em className="text-primary">quiet</em> kind of clarity.
          </h2>
        </div>

        <div className="max-w-172 text-base leading-[1.85] text-muted-foreground">
          <p>
            I enjoy taking a workflow with a lot of moving parts and giving it a
            dependable shape: clear boundaries, useful APIs, thoughtful
            interfaces, and room to grow.
          </p>

          <p className="mt-4">
            My work often sits close to the backend, while keeping the whole
            product experience in view.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            <div className="group/skill border-t border-border pt-3 transition-colors duration-300 hover:border-primary">
              <h3 className="mb-2 font-mono text-[.67rem] font-normal text-foreground transition-colors duration-300 group-hover/skill:text-primary">
                BACKEND
              </h3>
              <p className="text-[.8rem] leading-[1.7]">
                Node.js, NestJS, REST APIs, authentication
              </p>
            </div>

            <div className="group/skill border-t border-border pt-3 transition-colors duration-300 hover:border-primary">
              <h3 className="mb-2 font-mono text-[.67rem] font-normal text-foreground transition-colors duration-300 group-hover/skill:text-primary">
                PRODUCT UI
              </h3>
              <p className="text-[.8rem] leading-[1.7]">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>

            <div className="group/skill border-t border-border pt-3 transition-colors duration-300 hover:border-primary">
              <h3 className="mb-2 font-mono text-[.67rem] font-normal text-foreground transition-colors duration-300 group-hover/skill:text-primary">
                DATA
              </h3>
              <p className="text-[.8rem] leading-[1.7]">
                MongoDB, PostgreSQL, Prisma, Mongoose
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              className="group/link inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors duration-300 hover:border-primary hover:text-primary"
              href="/about"
            >
              More about me
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </Link>

            <Link
              className="group/link inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors duration-300 hover:border-primary hover:text-primary"
              href="/services"
            >
              Services
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
