import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"
import { ProjectsHero } from "@/features/projects/components/projects-hero"
import { ProjectCard } from "@/features/projects/components/project-card"
import { projects } from "@/features/projects/data/projects"
import { getTranslations } from "next-intl/server"
import { siteConfig } from "@/config/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "bn" }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "projects.metadata" })
  const canonical = `${siteConfig.url}${locale === "bn" ? "/bn" : ""}/projects`
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}/projects`,
        bn: `${siteConfig.url}/bn/projects`,
        "x-default": `${siteConfig.url}/projects`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      title: `${t("title")} — Tarikul Islam`,
      description: t("description"),
      url: canonical,
      siteName: "Tarikul Islam",
      images: [
        {
          url: "/images/profile/tarikul-islam.webp",
          alt: "Tarikul Islam — Full-Stack Web Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} — Tarikul Islam`,
      description: t("description"),
      images: ["/images/profile/tarikul-islam.webp"],
    },
  }
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <ProjectsHero />

        <Container className="pb-[clamp(6rem,10vw,9rem)]">
          <div className="grid grid-cols-1 gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-18 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  )
}
