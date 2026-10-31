
import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tarikul Islam, a Bangladesh-based full-stack web developer, to discuss web development projects, Next.js applications, backend development, and collaboration opportunities.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    title: "Contact — Tarikul Islam",
    description:
      "Get in touch with Tarikul Islam for full-stack web development, Next.js projects, backend solutions, and collaboration opportunities.",
    url: "/contact",
    siteName: "Tarikul Islam",
  },

  twitter: {
    card: "summary",
    title: "Contact — Tarikul Islam",
    description:
      "Contact Tarikul Islam to discuss full-stack web development projects and collaboration opportunities.",
  },
}


export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="relative isolate flex-1 overflow-hidden">
        <ContactContent />
      </main>
      <SiteFooter />
    </div>
  )
}
