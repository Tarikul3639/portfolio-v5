import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesHero } from "@/features/services/components/services-hero"
import { ServicesList } from "@/features/services/components/services-list"
import { ServicesProcess } from "@/features/services/components/services-process"
import { ServicesCta } from "@/features/services/components/services-cta"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web application, backend API, and responsive frontend development from Tarikul Islam, a backend-focused full-stack developer.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Development Services — Tarikul Islam",
    description:
      "Full-stack web applications, backend APIs, and responsive product interfaces.",
    url: "/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <ServicesHero />
        <ServicesList />
        <ServicesProcess />
        <ServicesCta />
      </main>

      <SiteFooter />
    </div>
  )
}
