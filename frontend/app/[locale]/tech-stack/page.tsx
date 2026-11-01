import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TechStackPage } from "@/features/tech-stack/components/tech-stack-page"
import { siteConfig } from "@/config/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "bn" }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "techStack.metadata" })
  const localizedPrefix = locale === "bn" ? "/bn" : ""
  const canonical = `${siteConfig.url}${localizedPrefix}/tech-stack`

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}/tech-stack`,
        bn: `${siteConfig.url}/bn/tech-stack`,
        "x-default": `${siteConfig.url}/tech-stack`,
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
  }
}

export default function TechStackRoute() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <TechStackPage />
      <SiteFooter />
    </div>
  )
}
