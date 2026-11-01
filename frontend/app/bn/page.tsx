import type { Metadata } from "next"
import { HomePage } from "@/features/home/home-page"
import bnMessages from "@/messages/bn.json"
import { siteConfig } from "@/config/site"

export async function generateMetadata(): Promise<Metadata> {
  const home = bnMessages.home.metadata
  return {
    title: { absolute: home.title },
    description: home.description,
    alternates: {
      canonical: `${siteConfig.url}/bn`,
      languages: { en: siteConfig.url, bn: `${siteConfig.url}/bn` },
    },
    openGraph: {
      locale: "bn_BD",
      url: `${siteConfig.url}/bn`,
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

export default function BengaliHomeRoute() {
  return <HomePage locale="bn" />
}
