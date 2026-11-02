"use client"

import { Link } from "@/i18n/navigation"
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Terminal,
  History,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/container"
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"
import { SquigglyText } from "@/components/ui/squiggly-text"
import { AngularLink } from "@/components/angular-link"
import { siteConfig } from "@/config/site"
import { useTranslations } from "next-intl"

const OLD_PORTFOLIO_URL = "https://tarikul-islam-v4.vercel.app"

const navigation = [
  { href: "/", label: "home" },
  { href: "/projects", label: "work" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
  { href: "/business-card", label: "businessCard" },
  { href: "/tech-stack", label: "techStack" },
] as const

const services = [
  { href: "/services", label: "Web Development" },
  { href: "/services", label: "Frontend Development" },
  { href: "/services", label: "Backend Development" },
  { href: "/services", label: "Workflow Automation" },
]

const socialLinks = [
  {
    href: siteConfig.social.github,
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: `mailto:${siteConfig.contact.email}`,
    label: "Email",
    icon: Mail,
  },
]

export function SiteFooter() {
  const f = useTranslations("common.footer")
  const n = useTranslations("common.navigation")
  const t = useTranslations("home.cta")
  const reduceMotion = useReducedMotion() ?? false

  const reveal = (delay = 1, y = 14, duration = 0.6) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <footer className="border-t border-border">
      <Container className="py-[clamp(4rem,8vw,7rem)]">
        <div className="grid grid-cols-1 gap-10 border-b border-border pb-[clamp(3rem,7vw,6rem)] md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12">
          <div>
            <motion.p
              className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
              {...reveal(0, 8, 0.45)}
            >
              {f("prompt")}
            </motion.p>

            <motion.h2
              className="mt-4 max-w-205 font-serif text-[clamp(3.2rem,4vw,8rem)] leading-[.88] tracking-[-.085em]"
              {...reveal(0.08, 20, 0.7)}
            >
              {f("headlineStart")}{" "}
              <SquigglyText stepDuration={90} scale={[1, 2]}>
                {f("headlineMiddle")}
              </SquigglyText>{" "}
              <SquigglyText className="text-primary">
                {f("headlineEnd")}
              </SquigglyText>
            </motion.h2>
          </div>

          <motion.div className="justify-self-end" {...reveal(0.16, 10, 0.5)}>
            <AngularLink href="/contact">
              <span className="group inline-flex items-center gap-1.5">
                {t("button")}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </AngularLink>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 sm:grid-cols-3 lg:grid-cols-[1.2fr_.8fr_1fr_1.2fr] lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 max-w-88 sm:col-span-3 lg:col-span-1">
            <motion.div {...reveal(0, 12, 0.55)}>
              <Link
                href="/"
                aria-label={n("brandHome")}
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
                  <span className="text-[1rem] leading-none font-sans font-bold tracking-[-.035em]">
                    TARIKUL
                    <span className="text-primary transition-colors duration-300 group-hover/brand:text-foreground">
                      .
                    </span>
                  </span>

                  <span className="font-mono text-[.55rem] leading-none tracking-[.12em] text-muted-foreground uppercase transition-colors duration-300 group-hover/brand:text-foreground">
                    {n("tagline")}
                  </span>
                </span>
              </Link>
            </motion.div>

            <motion.p
              className="sr-only mt-4 text-sm leading-[1.75] text-muted-foreground"
              {...reveal(0.06, 10, 0.5)}
            >
              {f("description")}
            </motion.p>

            <motion.p
              className="mt-4 font-mono text-sm leading-[1.85] text-muted-foreground"
              {...reveal(0.08, 12, 0.55)}
            >
              {f("codeLine")}
              <span className="block text-xs">{f("conceptLine")}</span>
            </motion.p>

            <motion.p
              className="group/social-title relative mt-5 mb-3 w-fit pb-2 font-mono text-[.62rem] tracking-widest text-accent-foreground/95 uppercase before:absolute before:right-0 before:bottom-0 before:left-0 before:h-px before:bg-muted-foreground/50 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
              {...reveal(0.1, 8, 0.45)}
            >
              {f("social")}
            </motion.p>

            <motion.div
              className="mt-3 flex items-center gap-2.5"
              {...reveal(0.12, 10, 0.5)}
            >
              {socialLinks.map(({ href, label, icon: Icon }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label === "Email" ? n("email") : label}
                  title={label === "Email" ? n("email") : label}
                  className="grid size-8 place-items-center border border-border text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  {...reveal(index * 0.06, 8, 0.4)}
                >
                  <Icon aria-hidden="true" className="size-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Navigate */}
          <motion.div {...reveal(0.08, 16, 0.6)}>
            <p className="group/footer-title relative mb-4 w-fit pb-2 font-mono text-[.62rem] tracking-widest text-accent-foreground/95 uppercase before:absolute before:right-0 before:bottom-0 before:left-0 before:h-px before:bg-muted-foreground/50 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">
              {f("navigate")}
            </p>

            <nav className="grid gap-2.5 text-sm" aria-label={n("mobile")}>
              {navigation.map((item, index) => {
                return (
                  <motion.div key={item.href} {...reveal(index * 0.05, 8, 0.4)}>
                    <Link
                      className="w-fit text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      href={item.href}
                    >
                      {f(item.label)}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div {...reveal(0.14, 16, 0.6)}>
            <p className="group/footer-title relative mb-4 w-fit pb-2 font-mono text-[.62rem] tracking-widest text-accent-foreground/95 uppercase before:absolute before:right-0 before:bottom-0 before:left-0 before:h-px before:bg-muted-foreground/50 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">
              {f("servicesTitle")}
            </p>

            <nav
              className="grid gap-2.5 text-sm"
              aria-label={f("servicesTitle")}
            >
              {services.map((item, index) => {
                const labels = [
                  f("webDevelopment"),
                  f("frontendDevelopment"),
                  f("backendDevelopment"),
                  f("workflowAutomation"),
                ]
                return (
                  <motion.div
                    key={item.label}
                    {...reveal(index * 0.05, 8, 0.4)}
                  >
                    <Link
                      className="w-fit text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      href={item.href}
                    >
                      {labels[index]}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="col-span-2 sm:col-span-1"
            {...reveal(0.2, 16, 0.6)}
          >
            <p className="group/footer-title relative mb-4 w-fit pb-2 font-mono text-[.62rem] tracking-widest text-accent-foreground/95 uppercase before:absolute before:right-0 before:bottom-0 before:left-0 before:h-px before:bg-muted-foreground/50 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">
              {f("contactInfo")}
            </p>

            <div className="grid gap-3.5 text-sm">
              <motion.a
                href={`mailto:${siteConfig.contact.email}`}
                className="group/contact flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                {...reveal(0, 8, 0.45)}
              >
                <Mail aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
                <span className="break-all">{siteConfig.contact.email}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-0.5 size-3.5 shrink-0 opacity-0 transition-all group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5 group-hover/contact:opacity-100"
                />
              </motion.a>

              <motion.a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                {...reveal(0.06, 8, 0.45)}
              >
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-3.5 shrink-0"
                />
                <span>{siteConfig.contact.phone}</span>
              </motion.a>

              <motion.div
                className="flex items-start gap-2 text-sm text-muted-foreground"
                {...reveal(0.12, 8, 0.45)}
              >
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-3.5 shrink-0"
                />
                <span>{f("location")}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col gap-4 border-t border-border pt-5 text-[.66rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
          {...reveal(0.08, 10, 0.5)}
        >
          <div className="flex flex-col gap-1">
            <p>© {new Date().getFullYear()} Tarikul Islam</p>

            <p className="font-mono tracking-[.04em] uppercase">{f("built")}</p>
          </div>

          <div className="flex items-center">
            <motion.a
              {...reveal(0.2, 8, 0.45)}
              href={OLD_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/old inline-flex w-fit items-center gap-1.5 border-b border-border pb-1 text-[.66rem] text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <History
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 group-hover/old:-rotate-12"
              />

              <span>{f("previous")}</span>

              <ArrowUpRight
                aria-hidden="true"
                className="size-3 transition-transform duration-200 group-hover/old:translate-x-0.5 group-hover/old:-translate-y-0.5"
              />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
