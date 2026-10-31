"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { ArrowUpRight, Menu, SunMoon, X, Terminal } from "lucide-react"
import { useCallback, useRef, useState } from "react"

import { AngularLink } from "@/components/angular-link"
import { Container } from "@/components/container"
import { MobileNav } from "@/components/mobile-nav"

const links = [
  { href: "/projects", label: "Projects", code: "01" },
  { href: "/services", label: "Services", code: "02" },
  { href: "/about", label: "About", code: "03" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Close the mobile menu and return focus to its toggle button.
  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    requestAnimationFrame(() => menuButtonRef.current?.focus())
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  return (
    <header className="group/header sticky top-0 z-50 border-b border-primary/20 bg-background/90 backdrop-blur-md">
      {/* Subtle animated accent along the top edge. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-primary/70 shadow-[0_0_12px_var(--primary)] transition-transform duration-500 group-hover/header:scale-x-100" />

      <Container className="flex min-h-16 items-center justify-between gap-5 max-md:min-h-14">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Tarikul Islam, home"
          className="group/brand flex shrink-0 items-center gap-3"
        >
          <span className="relative grid size-8.5 shrink-0 place-items-center border-2 border-dashed border-primary/40 transition-all duration-300 group-hover/brand:border-primary group-hover/brand:bg-primary/5 group-hover/brand:shadow-[0_0_15px_color-mix(in_srgb,var(--primary)_15%,transparent)]">
            <Terminal
              aria-hidden="true"
              className="size-5 text-primary transition-transform duration-300 group-hover/brand:scale-110 group-hover/brand:-rotate-3"
              strokeWidth={1.6}
            />
          </span>

          <span className="flex flex-col gap-1">
            <span className="text-[.95rem] leading-none font-bold tracking-[-.035em]">
              TARIKUL
              <span className="text-primary transition-colors duration-300 group-hover/brand:text-foreground">
                .
              </span>
            </span>

            <span className="font-mono text-[.55rem] leading-none tracking-[.12em] text-muted-foreground uppercase transition-colors duration-300 group-hover/brand:text-foreground">
              Developer / Portfolio
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="flex items-center gap-1 max-md:hidden"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`)

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group/nav relative flex items-center gap-2 px-3.5 py-2.5 font-mono text-[.72rem] transition-colors duration-200 ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`text-[.58rem] transition-colors duration-200 ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground/50 group-hover/nav:text-primary"
                  }`}
                >
                  {link.code}
                </span>

                {link.label}

                <span
                  className={`absolute inset-x-3 bottom-0 h-px origin-left bg-primary transition-transform duration-300 ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover/nav:scale-x-100"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Theme toggle: hidden on phone-sized screens. */}
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
            className="group/theme hidden size-9 place-items-center border border-border text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:grid"
          >
            <SunMoon
              aria-hidden="true"
              size={18}
              strokeWidth={1.7}
              className="transition-transform duration-500 group-hover/theme:rotate-45"
            />
          </button>

          {/* Contact CTA: visible on desktop and tablet. */}
          <AngularLink
            className="hidden md:inline-flex"
            size="compact"
            href="/contact"
          >
            <span className="font-mono text-[.72rem]">LET&apos;S TALK</span>

            <ArrowUpRight
              aria-hidden="true"
              className="ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </AngularLink>

          {/* Mobile navigation toggle. */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="grid size-9 place-items-center border border-border text-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              key={menuOpen ? "close" : "open"}
              className="animate-in duration-200 zoom-in-75 fade-in"
            >
              {menuOpen ? (
                <X size={19} strokeWidth={1.7} />
              ) : (
                <Menu size={19} strokeWidth={1.7} />
              )}
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile navigation panel */}
      <div id="mobile-navigation">
        <MobileNav
          open={menuOpen}
          onClose={closeMenu}
          pathname={pathname}
          theme={resolvedTheme}
          onToggleTheme={toggleTheme}
        />
      </div>
    </header>
  )
}
