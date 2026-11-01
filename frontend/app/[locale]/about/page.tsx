import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { AboutGithubSection } from "@/features/about/components/about-github-section"
import { AboutHero } from "@/features/about/components/about-hero"
import { AboutIntroduction } from "@/features/about/components/about-introduction"
import { AboutPrinciples } from "@/features/about/components/about-principles"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "bn" }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "about.metadata" })
  const canonical = `${siteConfig.url}${locale === "bn" ? "/bn" : ""}/about`
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}/about`,
        bn: `${siteConfig.url}/bn/about`,
        "x-default": `${siteConfig.url}/about`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      title: `${t("title")} — Tarikul Islam`,
      description: t("description"),
      url: canonical,
      siteName: "Tarikul Islam",
    },
    twitter: {
      card: "summary",
      title: `${t("title")} — Tarikul Islam`,
      description: t("description"),
    },
  }
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
