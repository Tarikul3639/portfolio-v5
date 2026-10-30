
import Link from "next/link"
import { ArrowUpRight, Mail, Phone, MapPin, Terminal } from "lucide-react"
import { Container } from "@/components/container"
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"
import { MotionReveal } from "@/components/motion"

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { href: "/services", label: "Web Development" },
  { href: "/services", label: "Frontend Development" },
  { href: "/services", label: "Backend Development" },
  { href: "/services", label: "Workflow Automation" },
]

const socialLinks = [
  {
    href: "https://github.com/Tarikul3639",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/tarikul-islam-a439a0253",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "mailto:tarikulislam3639@gmail.com",
    label: "Email",
    icon: Mail,
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <MotionReveal>
        <Container className="py-[clamp(4rem,8vw,7rem)]">
          <div className="border-b border-border pb-[clamp(3rem,7vw,6rem)]">
            <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
              Have something in mind?
            </p>

            <h2 className="mt-4 max-w-205 font-serif text-[clamp(3.2rem,8vw,8rem)] leading-[.88] tracking-[-.085em]">
              Let&apos;s make something{" "}
              <em className="text-primary">useful.</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 sm:grid-cols-3 lg:grid-cols-[1.2fr_.8fr_1fr_1.2fr] lg:gap-8">
            {/* Brand */}
            <div className="col-span-2 max-w-88 sm:col-span-3 lg:col-span-1">
              <Link
                href="/"
                aria-label="Tarikul Islam, home"
                className="group/brand flex w-fit shrink-0 items-center gap-3"
              >
                <span className="relative grid size-9 shrink-0 place-items-center border border-primary/40 transition-all duration-300 group-hover/brand:border-primary group-hover/brand:bg-primary/5 group-hover/brand:shadow-[0_0_15px_color-mix(in_srgb,var(--primary)_15%,transparent)]">
                  <Terminal
                    aria-hidden="true"
                    className="size-5 text-primary transition-transform duration-300 group-hover/brand:scale-110 group-hover/brand:-rotate-3"
                    strokeWidth={1.6}
                  />
                </span>

                <span className="flex flex-col gap-1">
                  <span className="text-[.95rem] font-bold leading-none tracking-[-.035em]">
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

              <p className="sr-only mt-4 text-sm leading-[1.75] text-muted-foreground">
                Full-stack web development for focused products, thoughtful
                interfaces, and the systems behind them.
              </p>

              <p className="mt-4 font-mono text-sm leading-[1.85] text-muted-foreground">
                Code + Logic + Data → Digital Products.
                <span className="block text-xs">
                  From concept to deployment.
                </span>
              </p>

              <p className="sr-only mt-5 font-mono text-[.62rem] tracking-[.08em] text-muted-foreground uppercase">
                Social media
              </p>

              <div className="mt-3 flex items-center gap-2.5">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    className="grid size-8 place-items-center border border-border text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-4"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigate */}
            <div>
              <p className="mb-4 font-mono text-[.62rem] tracking-widest text-muted-foreground uppercase">
                Navigate
              </p>

              <nav
                className="grid gap-2.5 text-sm"
                aria-label="Footer navigation"
              >
                {navigation.map((item) => (
                  <Link
                    className="w-fit text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <p className="mb-4 font-mono text-[.62rem] tracking-widest text-muted-foreground uppercase">
                Services
              </p>

              <nav
                className="grid gap-2.5 text-sm"
                aria-label="Footer services"
              >
                {services.map((item) => (
                  <Link
                    className="w-fit text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 font-mono text-[.62rem] tracking-widest text-muted-foreground uppercase">
                Contact Info
              </p>

              <div className="grid gap-3.5 text-sm">
                <a
                  href="mailto:tarikulislam3639@gmail.com"
                  className="group/contact flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Mail
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0"
                  />
                  <span className="break-all">
                    tarikulislam3639@gmail.com
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0 opacity-0 transition-all group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5 group-hover/contact:opacity-100"
                  />
                </a>

                <a
                  href="tel:+8801XXXXXXXXX"
                  className="flex items-start gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Phone
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0"
                  />
                  <span>+880 1909290959</span>
                </a>

                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0"
                  />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-border pt-5 text-[.66rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Tarikul Islam</p>

            <p className="font-mono tracking-[.04em] uppercase">
              Built with care · Bangladesh
            </p>
          </div>
        </Container>
      </MotionReveal>
    </footer>
  )
}
