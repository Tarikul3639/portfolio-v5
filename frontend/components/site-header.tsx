"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, SunMoon, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Container } from "@/components/container"
import { AngularLink } from "@/components/angular-link"

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
]

const navLinkClass =
  "relative py-2 text-[.82rem] text-muted-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-foreground hover:after:scale-x-100 aria-[current=page]:text-foreground aria-[current=page]:after:scale-x-100"

export function SiteHeader() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-20 border-b border-border bg-background/95">
      <Container className="flex min-h-19 items-center justify-between gap-8 max-md:min-h-[67px]">
        <Link
          className="inline-flex items-center gap-2.5 text-[.87rem] font-semibold tracking-[-.02em]"
          href="/"
          aria-label="Tarikul Islam, home"
        >
          <span className="grid size-[31px] place-items-center border border-border font-serif text-xl leading-none">
            T<span className="text-primary">.</span>
          </span>
          <span>Tarikul Islam</span>
        </Link>

        <nav
          className="flex items-center gap-[clamp(1.2rem,3vw,2.6rem)] max-md:hidden"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
              className={navLinkClass}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle color theme"
            className="grid size-9 place-items-center border border-transparent bg-transparent text-foreground transition-colors hover:border-border hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            type="button"
          >
            <SunMoon size={17} />
          </button>
          <AngularLink
            className="hidden md:inline-flex"
            size="compact"
            href="/contact"
          >
            Hire me{" "}
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </AngularLink>
          <button
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="grid size-9 place-items-center border border-transparent bg-transparent text-foreground transition-colors hover:border-border hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </Container>
      {menuOpen && (
        <nav
          className="border-t border-border px-5 pb-4 sm:px-[5.3vw]"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
              className="flex items-center justify-between border-b border-border py-3 font-serif text-[1.45rem]"
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <span
                className="font-mono text-sm text-muted-foreground"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          ))}
          <Link
            className="flex items-center justify-between border-b border-border py-3 font-serif text-[1.45rem]"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Hire me
            <span
              className="font-mono text-sm text-muted-foreground"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </nav>
      )}
    </header>
  )
}
