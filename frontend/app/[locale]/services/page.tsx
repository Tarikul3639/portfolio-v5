import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesHero } from "@/features/services/components/services-hero"
import { ServicesList } from "@/features/services/components/services-list"
import { ServicesProcess } from "@/features/services/components/services-process"
import { ServicesCta } from "@/features/services/components/services-cta"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "bn" }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "services.metadata" })
  const canonical = `${siteConfig.url}${locale === "bn" ? "/bn" : ""}/services`
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}/services`,
        bn: `${siteConfig.url}/bn/services`,
        "x-default": `${siteConfig.url}/services`,
      },
    },
    openGraph: {
      locale: locale === "bn" ? "bn_BD" : "en_US",
      title: `${t("title")} — Tarikul Islam`,
      description: t("description"),
      url: canonical,
    },
  }
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <ServicesHero />
        <ServicesList />
        <ServicesProcess />
        <ServicesCta />
      </main>

      <SiteFooter />
    </div>
  )
}
