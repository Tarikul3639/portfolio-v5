import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactContent } from "./contact-content"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "bn" }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "contact.metadata" })
  const canonical = `${siteConfig.url}${locale === "bn" ? "/bn" : ""}/contact`
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}/contact`,
        bn: `${siteConfig.url}/bn/contact`,
        "x-default": `${siteConfig.url}/contact`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      title: `${t("title")} | Tarikul Islam`,
      description: t("description"),
      url: canonical,
      siteName: "Tarikul Islam",
    },
    twitter: {
      card: "summary",
      title: `${t("title")} | Tarikul Islam`,
      description: t("description"),
    },
  }
}

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="relative isolate flex-1 overflow-hidden">
        <ContactContent />
      </main>
      <SiteFooter />
    </div>
  )
}
