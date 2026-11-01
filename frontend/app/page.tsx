
import type { Metadata } from "next"
import { HomePage } from "@/features/home/home-page"
import enMessages from "@/messages/en.json"
import { siteConfig } from "@/config/site"

export async function generateMetadata(): Promise<Metadata> {
  const home = enMessages.home.metadata
  return {
    title: { absolute: home.title },
    description: home.description,
    alternates: {
      canonical: siteConfig.url,
      languages: { en: siteConfig.url, bn: `${siteConfig.url}/bn` },
    },
    openGraph: {
      locale: "en_US",
      url: siteConfig.url,
      title: home.title,
      description: home.description,
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: home.description,
      images: ["/images/profile/tarikul-islam.webp"],
    },
  }
}

export default function HomeRoute() {
  return <HomePage locale="en" />
}
