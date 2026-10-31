import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FeaturedProjects } from "@/features/home/components/featured-projects"
import { HomeCta } from "@/features/home/components/home-cta"
import { HomeHero } from "@/features/home/components/home-hero"
import { ExperienceHighlight } from "@/features/home/components/experience-highlight"
import { HomeTechStack } from "@/features/home/components/home-tech-stack"
import { WorkApproach } from "@/features/home/components/work-approach"
import { personSchema } from "@/lib/seo/person-schema"

export default function HomePage() {
  return (
    <div className="relative flex min-h-svh flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <main className="flex-1">
        <HomeHero />
        <ExperienceHighlight />
        <HomeTechStack />
        <FeaturedProjects />
        <WorkApproach />
        <HomeCta />
      </main>

      <SiteFooter />
    </div>
  )
}
