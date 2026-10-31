"use client"

import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, Moon, Sun, X } from "lucide-react"
import { memo, useEffect, useRef, useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const MobileNavStatus = memo(function MobileNavStatus() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    })

    const update = () => setTime(formatter.format(new Date()))

    update()

    const interval = window.setInterval(update, 60_000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="border border-border bg-muted/20 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full bg-primary/50 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 bg-primary" />
            </span>

            <span className="font-mono text-[.62rem] font-bold tracking-[.16em] text-primary uppercase">
              System online
            </span>
          </div>

          <p className="mt-1 font-mono text-[.58rem] tracking-[.12em] text-muted-foreground uppercase">
            Global access node
          </p>
        </div>

        <div className="text-right">
          <p className="font-mono text-sm text-foreground tabular-nums">
            {time}
          </p>

          <p className="font-mono text-[.55rem] tracking-widest text-muted-foreground uppercase">
            UTC+6
          </p>
        </div>
      </div>

      <div className="mt-4 h-px bg-border" />

      <p className="sr-only mt-3 text-xs leading-relaxed text-muted-foreground">
        Full-stack development for focused, useful web products.
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="font-mono text-[8px] text-sidebar-accent uppercase">
              Uptime
            </span>
            <span className="font-mono text-[10px] font-bold text-sidebar-foreground">
              99.9%
            </span>
          </div>
          <div className="flex flex-col border-l border-sidebar-border pl-4">
            <span className="font-mono text-[8px] text-sidebar-accent uppercase">
              Load
            </span>
            <span className="font-mono text-[10px] font-bold text-sidebar-foreground">
              0.04ms
            </span>
          </div>
        </div>

        {/* Signal bars */}
        <div className="flex h-8 w-12 items-end gap-0.5">
          {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
            <motion.div
              key={i}
              animate={{
                height: [`${h * 100}%`, `${h * 100 - 20}%`, `${h * 100}%`],
              }}
              transition={{ duration: 1.5 + i * 0.2, repeat: Infinity }}
              className="w-full rounded-t-[1px] bg-sidebar-primary/40"
            />
          ))}
        </div>
      </div>
    </div>
  )
})

export const MobileNav = memo(function MobileNav({
  open,
  onClose,
  pathname,
  theme,
  onToggleTheme,
}: {
  open: boolean
  onClose: () => void
  pathname: string
  theme?: string
  onToggleTheme: () => void
}) {
  const reduceMotion = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.button
            aria-label="Close navigation menu"
            className="fixed inset-0 z-30 h-dvh w-screen cursor-default border-0 bg-background/70 p-0 backdrop-blur-sm md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            type="button"
          />

          {/* Left-side navigation drawer */}
          <motion.aside
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
            className="fixed inset-y-0 left-0 z-40 flex h-dvh max-h-dvh w-full max-w-sm flex-col overflow-hidden border-r border-border bg-background p-6 shadow-2xl md:hidden"
            initial={reduceMotion ? false : { x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Header */}
            <div className="mb-8 flex shrink-0 items-center justify-between border-b border-border pb-6">
              <div className="flex flex-col">
                <span className="font-mono text-[.68rem] tracking-[.11em] text-primary uppercase">
                  System menu
                </span>

                <span className="font-mono text-[.58rem] tracking-[.11em] text-muted-foreground uppercase">
                  Portfolio / Active
                </span>
              </div>

              <button
                ref={closeRef}
                aria-label="Close navigation menu"
                className="grid size-10 place-items-center border border-border transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                onClick={onClose}
                type="button"
              >
                <X aria-hidden="true" size={18} />
              </button>
            </div>

            {/* Navigation */}
            <nav
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1"
              aria-label="Mobile navigation links"
            >
              {links.map((link, index) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`)

                return (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : index * 0.035,
                    }}
                  >
                    <Link
                      aria-current={active ? "page" : undefined}
                      className={`group relative flex items-center gap-4 border-b border-border px-3 py-5 font-serif text-[1.8rem] font-bold tracking-tighter focus-visible:outline-2 focus-visible:outline-ring ${
                        active ? "text-primary" : ""
                      }`}
                      href={link.href}
                      onClick={onClose}
                    >
                      <span
                        className={`font-mono text-[.65rem] font-normal tracking-normal transition-colors ${
                          active
                            ? "text-primary"
                            : "text-primary/50 group-hover:text-primary"
                        }`}
                      >
                        {`// 0${index + 1}`}
                      </span>

                      <span
                        className={`flex-1 uppercase transition-colors ${
                          active
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 shrink-0 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* Footer */}
            <div className="mt-6 shrink-0 space-y-4 border-t border-border pt-6">
              <MobileNavStatus />

              <button
                type="button"
                onClick={onToggleTheme}
                className="flex w-full items-center justify-center gap-3 border border-border py-3 font-mono text-[.65rem] font-bold tracking-[.18em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {theme === "dark" ? (
                  <Sun aria-hidden="true" className="size-4" />
                ) : (
                  <Moon aria-hidden="true" className="size-4" />
                )}

                {theme === "dark" ? "Switch light mode" : "Switch dark mode"}
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
})
