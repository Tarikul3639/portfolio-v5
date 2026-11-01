import Link from "next/link"
import { useTranslations } from "next-intl"
import { Globe, Mail, Phone } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

import { siteConfig } from "@/config/site"
import { BusinessCardBackParticles } from "./business-card-back-particles"

const contactItems = [
  {
    label: "WEBSITE",
    value: "tarikul-islam.me",
    href: "https://tarikul-islam.me",
    icon: Globe,
  },
  {
    label: "EMAIL",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail,
  },
  {
    label: "PHONE",
    value: "+880 1909-290959",
    href: "tel:+8801909290959",
    icon: Phone,
  },
]

export function BusinessCardBack() {
  const t = useTranslations("businessCard")

  return (
    // Size container: width comes from the parent, height from the 7:4 ratio.
    <article
      id="business-card-back"
      aria-label={t("cardTitle")}
      className="@container relative isolate aspect-7/4 w-full overflow-hidden bg-card text-card-foreground"
    >
      {/*
              Scaling root. 1 spacing unit = 1/140 of the card width
              (4px at the original 560px size). Must be a child of the
              container so that `cqw` resolves against the card.
            */}
      <div className="absolute inset-0 [--spacing:calc(100cqw/140)]">
        <BusinessCardBackParticles />

        {/* Corner accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-1"
        >
          <span className="absolute top-0 left-1/2 h-6 w-10 -translate-x-1/2 rounded-b-lg bg-primary" />
          <span className="absolute bottom-0 left-1/2 h-6 w-10 -translate-x-1/2 rounded-t-lg bg-primary" />
          <span className="absolute top-1/4 left-0 h-10 w-6 rounded-r-lg bg-primary" />
        </div>

        {/* Main content */}
        <div className="relative z-10 grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 pr-7 pl-9">
          {/* Left: Identity and contact */}
          <div className="flex min-w-0 flex-col justify-center">
            {/* 12px / 16px */}
            <p className="mb-2 text-[--spacing(3)] leading-4 font-medium tracking-[0.2em] text-primary uppercase">
              {t("eyebrow")}
            </p>

            {/* 24px */}
            <h2 className="text-[--spacing(6)] leading-tight font-bold tracking-wide uppercase">
              Tarikul Islam
            </h2>

            {/* 14px / 20px */}
            <p className="mt-1.5 text-[--spacing(3.5)] leading-5 text-muted-foreground">
              {t("role")}
            </p>

            {/* 1px divider */}
            <div className="my-4 h-px w-1/4 bg-primary/70" />

            <div className="flex flex-col gap-2">
              {contactItems.map(({ label, value, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex min-w-0 items-center gap-2 py-1"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center border border-border bg-foreground/3">
                    <Icon
                      aria-hidden="true"
                      className="size-4 text-primary"
                      strokeWidth={1.6}
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    {/* 10px */}
                    <span className="block text-[--spacing(2.5)] font-medium tracking-widest text-muted-foreground">
                      {label}
                    </span>

                    {/* 12px / 16px */}
                    <span className="block truncate text-[--spacing(3)] leading-4 font-medium">
                      {value}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: QR code */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="border border-primary/50 bg-background/5 p-2">
              {/* CSS size-28 (112px at base) overrides the size attr, so it scales */}
              <QRCodeSVG
                value="https://tarikul-islam.me"
                size={112}
                level="H"
                bgColor="transparent"
                fgColor="currentColor"
                className="size-28"
                title={t("qrForWebsite")}
              />
            </div>

            {/* 10px */}
            <p className="flex items-center gap-1 text-center text-[--spacing(2.5)] tracking-widest text-muted-foreground uppercase">
              {t("qrForWebsite")}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
