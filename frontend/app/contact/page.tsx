
import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tarikul Islam about full-stack web development and collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Tarikul Islam",
    description: "Get in touch with Tarikul Islam.",
    url: "/contact",
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
