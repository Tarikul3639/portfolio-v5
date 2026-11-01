import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FeaturedProjects } from "@/features/home/components/featured-projects"
import { HomeCta } from "@/features/home/components/home-cta"
import { HomeHero } from "@/features/home/components/home-hero"
import { ExperienceHighlight } from "@/features/home/components/experience-highlight"
import { HomeTechStack } from "@/features/home/components/home-tech-stack"
import { WorkApproach } from "@/features/home/components/work-approach"
import { HomeFaq } from "@/features/home/components/home-faq"
import { personSchema } from "@/lib/seo/person-schema"
import { websiteSchema } from "@/lib/seo/website-schema"

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
      title,
      description,
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
  const localizedWebsiteSchema = {
    ...websiteSchema,
    url: `${siteConfig.url}${locale === "bn" ? "/bn" : ""}`,
    inLanguage: locale,
  }
  const localizedPersonSchema = {
    ...personSchema,
    jobTitle:
      locale === "bn" ? "ফুল-স্ট্যাক ওয়েব ডেভেলপার" : personSchema.jobTitle,
  }

  return (
    <div
      lang={locale}
      className={`relative flex min-h-svh flex-col bg-background text-foreground ${locale === "bn" ? "font-bengali" : ""}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localizedWebsiteSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localizedPersonSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <SiteHeader />

      <main className="flex-1">
        <HomeHero />
        <ExperienceHighlight />
        <HomeTechStack />
        <FeaturedProjects />
        <WorkApproach />
        <HomeFaq />
        <HomeCta />
      </main>

      <SiteFooter />
    </div>
  )
}
