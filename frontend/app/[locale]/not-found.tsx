"use client"

import { ArrowUpRight } from "lucide-react"
import { AngularLink } from "@/components/angular-link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useTranslations } from "next-intl"

export default function NotFound() {
  const t = useTranslations("common.notFound")
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="grid min-h-[65svh] flex-1 place-items-center px-5 py-20 text-center">
        <div>
          <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="my-3 font-serif text-[clamp(3rem,7vw,5rem)] tracking-[-.07em]">
            {t("title")}
          </h1>
          <AngularLink href="/projects">
            {t("back")}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </AngularLink>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
