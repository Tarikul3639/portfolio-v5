"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, CalendarDays } from "lucide-react"

import { Container } from "@/components/container"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import { EncryptedText } from "@/components/ui/encrypted-text"
import { siteConfig } from "@/config/site"

const contactOptions = [
  {
    label: "EMAIL",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    label: "WHATSAPP",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.whatsappUrl,
  },
  {
    label: "GITHUB",
    value: siteConfig.social.github.replace(/^https?:\/\//, ""),
    href: siteConfig.social.github,
  },
  {
    label: "LINKEDIN",
    value: siteConfig.social.linkedin.replace(/^https?:\/\//, ""),
    href: siteConfig.social.linkedin,
  },
  {
    label: "FACEBOOK",
    value: siteConfig.social.facebook.replace("https://www.", ""),
    href: siteConfig.social.facebook,
  },
]

export function ContactContent() {
  const reduceMotion = useReducedMotion() ?? false

  const reveal = (delay = 0, y = 8, duration = 0.45) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 z-0 h-110 w-110 rounded-full opacity-15 blur-[105px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.62 0.14 155) 32%, var(--primary)), transparent 72%)",
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 z-0 h-100 w-100 rounded-full opacity-12 blur-[95px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.62 0.13 178) 28%, var(--ring)), transparent 70%)",
        }}
      />

      {/* Top transparent gradient */}
      <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-linear-to-b from-background to-transparent" />

      {/* Bottom transparent gradient */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-background to-transparent" />
      <StarsBackground />
      <ShootingStars />

      <Container className="pt-[clamp(4.8rem,9vw,8rem)] pb-12">
        <motion.p
          {...reveal(0, 8, 0.45)}
          className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
        >
          <EncryptedText text="CONTACT · DHAKA, BANGLADESH" />
        </motion.p>
      </Container>

      <Container className="grid grid-cols-1 gap-10 pb-[clamp(6rem,10vw,9rem)] md:grid-cols-[1fr_.72fr] md:gap-20">
        <div className="max-w-162.5">
          <motion.h1
            {...reveal(0.08, 18, 0.65)}
            className="font-serif text-[clamp(3.2rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]"
          >
            Have a good problem to <em className="text-primary">solve?</em>
          </motion.h1>

          <motion.p
            {...reveal(0.16, 12, 0.55)}
            className="mt-6 max-w-148 text-base leading-[1.8] text-muted-foreground"
          >
            I&apos;m open to thoughtful conversations about web development,
            useful products, and potential collaborations. Choose whichever
            channel works for you.
          </motion.p>

          <motion.div {...reveal(0.24, 10, 0.5)} className="mt-8">
            <div className="group relative inline-block p-2">
              <div className="pointer-events-none absolute inset-0">
                {/* Top-right corner expands and fills */}
                <span className="absolute top-0 right-0 h-8 w-40 border-t border-r border-yellow-400 bg-transparent transition-all duration-500 ease-in-out group-hover:h-full group-hover:w-full group-hover:bg-yellow-400" />

                {/* Bottom-left corner expands and fills */}
                <span className="absolute bottom-0 left-0 h-8 w-40 border-b border-l border-yellow-400 bg-transparent transition-all duration-500 ease-in-out group-hover:h-full group-hover:w-full group-hover:bg-yellow-400" />
              </div>

              <Link
                href={siteConfig.contact.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule a meeting on Cal.com"

                className="group relative z-10 inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-sm text-primary-foreground transition-colors duration-300 [clip-path:polygon(1rem_0,100%_0,100%_calc(100%-1rem),calc(100%-1rem)_100%,0_100%,0_1rem)] group-hover:bg-black group-hover:text-white hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <CalendarDays aria-hidden="true" className="size-4" />
                Schedule a meeting
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Choose a convenient time on my calendar.
            </p>
          </motion.div>
        </div>

        <nav className="mt-1 grid content-start" aria-label="Contact options">
          {contactOptions.map((option, index) => (
            <a
              className="border-t border-border last:border-b"
              href={option.href}
              key={option.label}
              target={option.label === "EMAIL" ? undefined : "_blank"}
              rel={option.label === "EMAIL" ? undefined : "noopener noreferrer"}
            >
              <motion.div
                {...reveal(0.12 + index * 0.07, 10, 0.5)}
                className="flex justify-between gap-4 py-4"
              >
                <span className="font-mono text-[.67rem] text-muted-foreground">
                  {option.label}
                </span>

                <span className="group inline-flex items-center gap-1.5 text-right text-[.88rem] transition-colors hover:text-primary">
                  {option.value}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={14}
                  />
                </span>
              </motion.div>
            </a>
          ))}
        </nav>
      </Container>
    </>
  )
}
