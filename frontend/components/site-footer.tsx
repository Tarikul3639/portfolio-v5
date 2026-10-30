import Link from "next/link"
import { Container } from "@/components/container"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="grid min-h-[86px] grid-cols-1 items-center gap-4 py-5 sm:grid-cols-[1fr_auto] md:grid-cols-3 md:gap-6 md:py-0">
        <Link href="/" className="w-fit text-[.77rem] font-semibold">
          Tarikul Islam
          <span className="ml-1.5 font-mono text-[.62rem] font-normal text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </Link>
        <p className="text-[.69rem] text-muted-foreground md:text-center">
          A personal portfolio for Tarikul Islam.
        </p>
        <div className="flex items-center justify-start gap-4 text-[.68rem] text-muted-foreground md:justify-end">
          <a
            className="transition-colors hover:text-foreground"
            href="https://github.com/Tarikul3639"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <Link
            className="transition-colors hover:text-foreground"
            href="/services"
          >
            Services
          </Link>
          <a
            className="transition-colors hover:text-foreground"
            href="https://www.linkedin.com/in/tarikul-islam-a439a0253"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <Link
            className="transition-colors hover:text-foreground"
            href="/contact"
          >
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Container>
    </footer>
  )
}
