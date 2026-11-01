import type { MetadataRoute } from "next"
import { projects } from "@/features/projects/data/projects"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/projects", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "yearly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6 },
    {
      path: "/business-card",
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]

  return routes.flatMap(({ path, changeFrequency, priority }) => {
    const en = `${siteConfig.url}${path}`
    const bn = `${siteConfig.url}/bn${path}`
    return [
      {
        url: en,
        alternates: { languages: { en, bn, "x-default": en } },
        changeFrequency,
        priority,
      },
      {
        url: bn,
        alternates: { languages: { en, bn, "x-default": en } },
        changeFrequency,
        priority,
      },
    ]
  })
}
