import type { Metadata } from "next"
import { ArrowUpRight, CalendarDays } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"
import { AngularLink } from "@/components/angular-link"

const CAL_URL = "https://cal.com/YOUR_USERNAME/YOUR_EVENT"
const FACEBOOK_URL = "https://www.facebook.com/tarikulislam3639"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tarikul Islam about full-stack web development and collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Tarikul Islam",
    description: "Get in touch with Tarikul Islam.",
    url: "/contact",
  },
}

const contactOptions = [
  {
    label: "EMAIL",
    value: "tarikulislam3639@gmail.com",
    href: "mailto:tarikulislam3639@gmail.com",
  },
  {
    label: "GITHUB",
    value: "github.com/Tarikul3639",
    href: "https://github.com/Tarikul3639",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/tarikul-islam-a439a0253",
    href: "https://www.linkedin.com/in/tarikul-islam-a439a0253",
  },
  {
    label: "FACEBOOK",
    value: "facebook.com/tarikulislam3639",
    href: FACEBOOK_URL,
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="relative isolate flex-1 overflow-hidden">
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
        <Container className="pt-[clamp(4.8rem,9vw,8rem)] pb-12">
          <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
            Contact · Dhaka, Bangladesh
          </p>
        </Container>
        <Container className="grid grid-cols-1 gap-10 pb-[clamp(6rem,10vw,9rem)] md:grid-cols-[1fr_.72fr] md:gap-20">
          <div className="max-w-162.5">
            <h1 className="font-serif text-[clamp(3.2rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]">
              Have a good problem to <em className="text-primary">solve?</em>
            </h1>
            <p className="mt-6 max-w-148 text-base leading-[1.8] text-muted-foreground">
              I&apos;m open to thoughtful conversations about web development,
              useful products, and potential collaborations. Choose whichever
              channel works for you.
            </p>
            <div className="mt-8">
              <AngularLink
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule a meeting on Cal.com"
              >
                <CalendarDays aria-hidden="true" className="size-4" />
                Schedule a meeting
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </AngularLink>
              <p className="mt-3 text-sm text-muted-foreground">
                Choose a convenient time on my calendar.
              </p>
            </div>
          </div>
          <nav className="mt-1 grid content-start" aria-label="Contact options">
            {contactOptions.map((option) => (
              <a
                className="flex justify-between gap-4 border-t border-border py-4 last:border-b"
                href={option.href}
                key={option.label}
                target={option.label === "EMAIL" ? undefined : "_blank"}
                rel={
                  option.label === "EMAIL" ? undefined : "noopener noreferrer"
                }
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
              </a>
            ))}
          </nav>
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}
