import { siteConfig } from "@/config/site"

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: "Tarikul Islam",
  url: siteConfig.url,
  image: `${siteConfig.url}/images/profile/tarikul-islam.webp`,
  email: siteConfig.contact.email,
  jobTitle: "Software Engineer & Full-Stack Developer",
  description:
    "Tarikul Islam is a Bangladesh-based software engineer and full-stack developer who builds web applications, backend APIs, cloud integrations, and custom Model Context Protocol (MCP) servers for AI-assisted workflows.",
  knowsAbout: [
    "Full-stack web development",
    "Backend engineering",
    "REST API development",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Cloud deployment",
    "Model Context Protocol (MCP)",
    "AI integrations",
  ],
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.facebook,
  ].filter(Boolean),
} as const
