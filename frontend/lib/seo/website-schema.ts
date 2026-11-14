import { siteConfig } from "@/config/site"

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: "Tarikul Islam",
  url: siteConfig.url,
  description:
    "The portfolio of Tarikul Islam, a Bangladesh-based software engineer and full-stack developer. Explore projects, services, technical skills, and contact information.",
  inLanguage: ["en", "bn"],
  publisher: {
    "@id": `${siteConfig.url}/#person`,
  },
} as const
