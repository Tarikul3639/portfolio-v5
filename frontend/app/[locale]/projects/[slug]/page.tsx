import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { ArrowUpRight } from "lucide-react"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/container"
import { ProjectCard } from "@/features/projects/components/project-card"
import { ProjectDetailHero } from "@/features/projects/components/project-detail-hero"
import { ProjectDetailOverview } from "@/features/projects/components/project-detail-overview"
import { projects, getProject } from "@/features/projects/data/projects"
import { siteConfig } from "@/config/site"
import { getTranslations } from "next-intl/server"
import { serializeJsonLd } from "@/lib/seo/json-ld"

type Props = {
  params: Promise<{ slug: string; locale: "en" | "bn" }>
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: "Project not found",
      robots: { index: false, follow: true },
    }
  }

  const t = await getTranslations({ locale, namespace: "projects.items" })
  const description = (t.raw as (key: string) => unknown)(
    `${slug}.summary`
  ) as string
  const canonical = `${siteConfig.url}${locale === "bn" ? "/bn" : ""}/projects/${project.slug}`
  const image = project.image || "/images/profile/tarikul-islam.webp"
  const imageAlt = `${project.title} — ${description}`
  return {
    title: project.title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}/projects/${project.slug}`,
        bn: `${siteConfig.url}/bn/projects/${project.slug}`,
        "x-default": `${siteConfig.url}/projects/${project.slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      title: `${project.title} | Tarikul Islam`,
      description,
      url: canonical,
      siteName: "Tarikul Islam",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Tarikul Islam`,
      description,
      images: [image],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug, locale } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2)

  const [projectT, navigationT, t] = await Promise.all([
    getTranslations({ locale, namespace: "projects.items" }),
    getTranslations({ locale, namespace: "common.navigation" }),
    getTranslations({ locale, namespace: "common.project" }),
  ])
  const canonical = `${siteConfig.url}${locale === "bn" ? "/bn" : ""}/projects/${project.slug}`
  const projectDescription = (projectT.raw as (key: string) => unknown)(
    `${slug}.description`
  ) as string
  const projectCategory = (projectT.raw as (key: string) => unknown)(
    `${slug}.category`
  ) as string
  const projectHighlights = (projectT.raw as (key: string) => unknown)(
    `${slug}.highlights`
  ) as string[]
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonical}#software`,
    name: project.title,
    description: projectDescription,
    applicationCategory: projectCategory,
    operatingSystem: "Web",
    url: canonical,
    image: project.image
      ? new URL(project.image, siteConfig.url).toString()
      : undefined,
    author: { "@id": `${siteConfig.url}/#person` },
    creator: { "@id": `${siteConfig.url}/#person` },
    featureList: projectHighlights,
    sameAs: [
      ...project.repos.map((repository) => repository.href),
      ...(project.live ? [project.live] : []),
    ],
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: navigationT("home"),
        item: `${siteConfig.url}${locale === "bn" ? "/bn" : ""}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: navigationT("projects"),
        item: `${siteConfig.url}${locale === "bn" ? "/bn" : ""}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: canonical,
      },
    ],
  }

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(projectSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
        />

        <section>
          <ProjectDetailHero project={project} />
        </section>

        <Container>
          <ProjectDetailOverview project={project} />
        </Container>

        <section className="border-t border-border py-16">
          <Container>
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                  {t("keepExploring")}
                </p>

                <h2 className="mt-3 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-.055em]">
                  {t("moreWork")}
                </h2>
              </div>

              <Link
                className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                href="/projects"
              >
                {t("allProjects")}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-16 md:grid-cols-2">
              {relatedProjects.map((item, index) => (
                <ProjectCard index={index} key={item.slug} project={item} />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
