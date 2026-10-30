import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { AboutGithubSection } from "@/features/about/components/about-github-section"
import { AboutHero } from "@/features/about/components/about-hero"
import { AboutIntroduction } from "@/features/about/components/about-introduction"
import { AboutPrinciples } from "@/features/about/components/about-principles"
import { AboutTechStack } from "@/features/about/components/about-tech-stack"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Tarikul Islam, a backend-focused full-stack web developer based in Dhaka, Bangladesh.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Tarikul Islam",
    description:
      "A little about Tarikul Islam and how he approaches software development.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <AboutIntroduction />
        <AboutTechStack />
        <AboutGithubSection />
        <AboutPrinciples />
      </main>
      <SiteFooter />
    </div>
  )
}
