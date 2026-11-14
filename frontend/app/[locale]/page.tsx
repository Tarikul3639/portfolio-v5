import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FeaturedProjects } from "@/features/home/components/featured-projects"
import { HomeHero } from "@/features/home/components/home-hero"
import { ExperienceHighlight } from "@/features/home/components/experience-highlight"
import { HomeTechStack } from "@/features/home/components/home-tech-stack"
import { WorkApproach } from "@/features/home/components/work-approach"
import { HomeFaq } from "@/features/home/components/home-faq"
import { BusinessCardCta } from "@/features/home/components/business-card-cta"
import { serializeJsonLd } from "@/lib/seo/json-ld"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "bn" }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "home.metadata" })
  const canonical = locale === "bn" ? `${siteConfig.url}/bn` : siteConfig.url
  const title = t("title")
  const description = t("description")
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        en: siteConfig.url,
        bn: `${siteConfig.url}/bn`,
        "x-default": siteConfig.url,
      },
    },
    openGraph: {
      locale: locale === "bn" ? "bn_BD" : "en_US",
      url: canonical,
      siteName: "Tarikul Islam",
      title,
      description,
      images: [
        {
          url: "/images/profile/tarikul-islam.webp",
          alt: "Portrait of Tarikul Islam, Software Engineer and Full-Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/profile/tarikul-islam.webp"],
    },
  }
}

export default async function HomeRoute({
  params,
}: {
  params: Promise<{ locale: "en" | "bn" }>
}) {
  const { locale } = await params
  const [faqT, homeMetadataT] = await Promise.all([
    getTranslations({ locale, namespace: "home.faq" }),
    getTranslations({ locale, namespace: "home.metadata" }),
  ])
  const faqKeys = [
    "expertise",
    "technology",
    "projects",
    "services",
    "collaboration",
    "contact",
  ] as const
  const canonical = locale === "bn" ? `${siteConfig.url}/bn` : siteConfig.url
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${canonical === siteConfig.url ? `${siteConfig.url}/` : canonical}#profile`,
    url: canonical,
    name: homeMetadataT("title"),
    description: homeMetadataT("description"),
    inLanguage: locale,
    mainEntity: { "@id": `${siteConfig.url}/#person` },
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqKeys.map((key) => ({
      "@type": "Question",
      name: faqT(`items.${key}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: faqT(`items.${key}.answer`),
      },
    })),
  }

  return (
    <div
      lang={locale}
      className={`relative flex min-h-svh flex-col bg-background text-foreground ${locale === "bn" ? "font-bengali" : ""}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      <SiteHeader />

      <main className="flex-1">
        <HomeHero />
        <ExperienceHighlight />
        <HomeTechStack />
        <FeaturedProjects />
        <WorkApproach />
        <HomeFaq />
        <BusinessCardCta />
      </main>

      <SiteFooter />
    </div>
  )
}
