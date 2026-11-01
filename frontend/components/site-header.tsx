"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { ArrowUpRight, Menu, SunMoon, X, Terminal } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useCallback, useRef, useState } from "react"

import { AngularLink } from "@/components/angular-link"
import { Container } from "@/components/container"
import { MobileNav } from "@/components/mobile-nav"

const links = [
  { href: "/projects", label: "Projects", code: "01" },
  { href: "/services", label: "Services", code: "02" },
  { href: "/about", label: "About", code: "03" },
]

type HomeNavigationCopy = {
  home: string
  projects: string
  services: string
  about: string
  contact: string
  letsTalk: string
  language: string
  main: string
  mobile: string
  brandHome: string
  toggleTheme: string
  openMenu: string
  closeMenu: string
  systemMenu: string
  portfolioActive: string
  systemOnline: string
  globalNode: string
  uptime: string
  load: string
  description: string
  lightMode: string
  darkMode: string
}

export function SiteHeader({
  homeLocale,
  homeNavigation,
}: {
  homeLocale?: "en" | "bn"
  homeNavigation?: HomeNavigationCopy
} = {}) {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const reduceMotion = useReducedMotion() ?? false

  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const reveal = (delay = 0, y = 8, duration = 0.45) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  const closeMenu = useCallback(() => {
    setMenuOpen(false)

    requestAnimationFrame(() => {
      menuButtonRef.current?.focus()
    })
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  return (
    <header className="group/header sticky top-0 z-50 border-b border-primary/20 bg-background/90 backdrop-blur-md">
      {/* Subtle animated accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-primary/70 shadow-[0_0_12px_var(--primary)] transition-transform duration-500 group-hover/header:scale-x-100" />

      <Container className="flex min-h-16 items-center justify-between gap-5">
        {/* Brand */}
        <motion.div {...reveal(0, 6, 0.4)}>
          <Link
            href={homeLocale === "bn" ? "/bn" : "/"}
            aria-label={homeNavigation?.brandHome ?? "Tarikul Islam, home"}
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
        </motion.div>

        {/* Desktop navigation */}
        <nav
          className="flex items-center gap-1 max-md:hidden"
          aria-label={homeNavigation?.main ?? "Main navigation"}
        >
          {links.map((link, index) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`)

            return (
              <motion.div
                key={link.href}
                {...reveal(0.06 + index * 0.06, 6, 0.4)}
              >
                <Link
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

                  {homeNavigation
                    ? homeNavigation[
                        link.href === "/projects"
                          ? "projects"
                          : link.href === "/services"
                            ? "services"
                            : "about"
                      ]
                    : link.label}

                  <span
                    className={`absolute inset-x-3 bottom-0 h-px origin-left bg-primary transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover/nav:scale-x-100"
                    }`}
                  />
                </Link>
              </motion.div>
            )
          })}
        </nav>

        <motion.div
          {...reveal(0.2, 6, 0.4)}
          className="flex shrink-0 items-center gap-2"
        >
          {homeLocale && homeNavigation && (
            <nav
              aria-label={homeNavigation.language}
              className="mr-1 flex items-center gap-1 font-mono text-[.67rem]"
            >
              <Link
                href="/"
                lang="en"
                aria-current={homeLocale === "en" ? "page" : undefined}
                className={`transition-colors hover:text-primary ${homeLocale === "en" ? "text-foreground" : "text-muted-foreground"}`}
              >
                EN
              </Link>
              <span aria-hidden="true" className="text-muted-foreground/50">
                /
              </span>
              <Link
                href="/bn"
                lang="bn"
                aria-current={homeLocale === "bn" ? "page" : undefined}
                className={`transition-colors hover:text-primary ${homeLocale === "bn" ? "text-foreground" : "text-muted-foreground"}`}
              >
                বাংলা
              </Link>
            </nav>
          )}
          {/* Theme toggle */}
          <button
            type="button"
            aria-label={homeNavigation?.toggleTheme ?? "Toggle color theme"}
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

          {/* Contact CTA */}
          <AngularLink
            className="hidden md:inline-flex"
            size="compact"
            href="/contact"
          >
            <span className="font-mono text-[.72rem]">
              {homeNavigation?.letsTalk ?? "LET'S TALK"}
            </span>

            <ArrowUpRight
              aria-hidden="true"
              className="ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </AngularLink>

          {/* Mobile navigation toggle */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen
                ? homeNavigation?.closeMenu ?? "Close navigation menu"
                : homeNavigation?.openMenu ?? "Open navigation menu"
            }
            className="grid size-9 place-items-center border border-border text-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
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
        </motion.div>
      </Container>

      {/* Mobile navigation panel */}
      <div id="mobile-navigation">
        <MobileNav
          open={menuOpen}
          onClose={closeMenu}
          pathname={pathname}
          theme={resolvedTheme}
          onToggleTheme={toggleTheme}
          homeLocale={homeLocale}
          homeNavigation={homeNavigation}
        />
      </div>
    </header>
  )
}
