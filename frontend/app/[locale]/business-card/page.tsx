import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { BusinessCard } from "@/features/business-card/components/business-card"
import { siteConfig } from "@/config/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "bn" }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: "businessCard",
  })
  const localizedPath = `${locale === "bn" ? "/bn" : ""}/business-card`
  const canonical = `${siteConfig.url}${localizedPath}`

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}/business-card`,
        bn: `${siteConfig.url}/bn/business-card`,
        "x-default": `${siteConfig.url}/business-card`,
      },
    },
    openGraph: {
      type: "profile",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      title: `${t("metadata.title")} | Tarikul Islam`,
      description: t("metadata.description"),
      url: canonical,
      siteName: "Tarikul Islam",
      images: [
        {
          url: "/images/profile/tarikul-islam.webp",
          alt: "Portrait of Tarikul Islam, Software Engineer and Full-Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${t("metadata.title")} | Tarikul Islam`,
      description: t("metadata.description"),
      images: ["/images/profile/tarikul-islam.webp"],
    },
  }
}

export default function BusinessCardPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <BusinessCard />
      </main>
      <SiteFooter />
    </div>
  )
}
