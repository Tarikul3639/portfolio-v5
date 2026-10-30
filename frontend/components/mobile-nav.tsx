"use client"

import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, X } from "lucide-react"
import { useEffect, useRef } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function MobileNav({
  open,
  onClose,
  pathname,
}: {
  open: boolean
  onClose: () => void
  pathname: string
}) {
  const reduceMotion = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
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
          <motion.button
            aria-label="Close navigation menu"
            className="fixed inset-0 z-30 cursor-default bg-background/70 backdrop-blur-sm md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            type="button"
          />
          <motion.aside
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
            className="fixed inset-y-0 left-0 z-40 flex w-[min(86vw,22rem)] flex-col border-r border-border bg-background p-6 shadow-2xl md:hidden"
            initial={reduceMotion ? false : { x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-12 flex items-center justify-between">
              <span className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                Navigation
              </span>
              <button
                ref={closeRef}
                aria-label="Close navigation menu"
                className="grid size-10 place-items-center border border-border focus-visible:outline-2 focus-visible:outline-ring"
                onClick={onClose}
                type="button"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="grid" aria-label="Mobile navigation links">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.035 }}
                >
                  <Link
                    aria-current={
                      link.href === "/"
                        ? pathname === "/"
                          ? "page"
                          : undefined
                        : pathname.startsWith(link.href)
                          ? "page"
                          : undefined
                    }
                    className="group flex items-center justify-between border-b border-border py-4 font-serif text-[1.7rem] tracking-[-.04em] focus-visible:outline-2 focus-visible:outline-ring"
                    href={link.href}
                    onClick={onClose}
                  >
                    {link.label}
                    <span
                      className="font-mono text-sm text-muted-foreground transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <ArrowUpRight aria-hidden="true" className="size-5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className="mt-auto max-w-60 text-sm leading-relaxed text-muted-foreground">
              Full-stack development for focused, useful web products.
            </p>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
