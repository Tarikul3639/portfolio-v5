import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { AboutGithubSection } from "@/features/about/components/about-github-section"
import { AboutHero } from "@/features/about/components/about-hero"
import { AboutIntroduction } from "@/features/about/components/about-introduction"
import { AboutPrinciples } from "@/features/about/components/about-principles"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Tarikul Islam, a Dhaka, Bangladesh-based backend-focused full-stack web developer specializing in TypeScript, Node.js, NestJS, React, and Next.js.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    type: "website",
    title: "About — Tarikul Islam",
    description:
      "Discover Tarikul Islam's background, technical expertise, and approach to building reliable, maintainable, and scalable web applications.",
    url: "/about",
    siteName: "Tarikul Islam",
  },

  twitter: {
    card: "summary",
    title: "About — Tarikul Islam",
    description:
      "Learn about Tarikul Islam's background, skills, and approach to full-stack web development.",
  },
}


export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <AboutIntroduction />
        <AboutGithubSection />
        <AboutPrinciples />
      </main>
      <SiteFooter />
    </div>
  )
}
