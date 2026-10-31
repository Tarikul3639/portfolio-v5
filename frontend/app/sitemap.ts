import type { MetadataRoute } from "next"
import { projects } from "@/features/projects/data/projects"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteConfig.url}/projects`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/services`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]

  return [
    ...staticRoutes,
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
