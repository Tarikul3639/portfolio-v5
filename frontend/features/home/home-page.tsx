import { NextIntlClientProvider } from "next-intl"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FeaturedProjects } from "@/features/home/components/featured-projects"
import { HomeCta } from "@/features/home/components/home-cta"
import { HomeHero } from "@/features/home/components/home-hero"
import { ExperienceHighlight } from "@/features/home/components/experience-highlight"
import { HomeTechStack } from "@/features/home/components/home-tech-stack"
import { WorkApproach } from "@/features/home/components/work-approach"
import enMessages from "@/messages/en.json"
import bnMessages from "@/messages/bn.json"
import { personSchema } from "@/lib/seo/person-schema"
import { websiteSchema } from "@/lib/seo/website-schema"

export type HomeLocale = "en" | "bn"

const messages = { en: enMessages, bn: bnMessages }

export function HomePage({ locale }: { locale: HomeLocale }) {
  const content = messages[locale]
  const home = content.home

  return (
    <NextIntlClientProvider locale={locale} messages={content}>
      <div
        lang={locale}
        className={`relative flex min-h-svh flex-col bg-background text-foreground ${locale === "bn" ? "font-bengali" : ""}`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang = ${JSON.stringify(locale)}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        <SiteHeader
          homeLocale={locale}
          homeNavigation={home.navigation}
        />

        <main className="flex-1">
          <HomeHero />
          <ExperienceHighlight />
          <HomeTechStack />
          <FeaturedProjects />
          <WorkApproach />
          <HomeCta />
        </main>

        <SiteFooter homeFooter={{ ...home.footer, homePath: locale === "bn" ? "/bn" : "/" }} />
      </div>
    </NextIntlClientProvider>
  )
}
