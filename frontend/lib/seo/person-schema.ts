import { siteConfig } from "@/config/site"

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tarikul Islam",
  url: siteConfig.url,
  image: `${siteConfig.url}/images/profile/tarikul-islam.webp`,
  jobTitle: "Software Engineer & Full-Stack Developer",
  sameAs: [
    "https://github.com/Tarikul3639",
    "https://www.linkedin.com/in/tarikul-islam-a439a0253",
  ],
}
