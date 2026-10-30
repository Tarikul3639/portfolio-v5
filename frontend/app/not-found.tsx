import { AngularLink } from "@/components/angular-link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="grid min-h-[65svh] flex-1 place-items-center px-5 py-20 text-center">
        <div>
          <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
            404 · Not found
          </p>
          <h1 className="my-3 font-serif text-[clamp(3rem,7vw,5rem)] tracking-[-.07em]">
            This page isn&apos;t here.
          </h1>
          <AngularLink href="/projects">
            Back to selected work <span aria-hidden="true">↗</span>
          </AngularLink>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
