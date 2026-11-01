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
        <article
            id="business-card-back"
            aria-label={t("cardTitle")}
            className="relative isolate h-80 w-140 overflow-hidden bg-card text-card-foreground"
        >
            <BusinessCardBackParticles />

            {/* Corner accents */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-1"
            >
                <span className="absolute left-1/2 top-0 h-6 w-10 -translate-x-1/2 rounded-b-sm bg-primary" />
                <span className="absolute bottom-0 left-1/2 h-6 w-10 -translate-x-1/2 rounded-t-sm bg-primary" />
                <span className="absolute left-0 top-1/4 h-10 w-6 rounded-r-sm bg-primary" />
            </div>

            {/* Main content */}
            <div className="relative z-10 grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 pl-9 pr-7 py-6">
                {/* Left: Identity and contact */}
                <div className="flex min-w-0 flex-col justify-center">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        {t("eyebrow")}
                    </p>

                    <h2 className="text-2xl font-bold uppercase leading-tight tracking-wide">
                        Tarikul Islam
                    </h2>

                    <p className="mt-1.5 text-sm text-muted-foreground">
                        {t("role")}
                    </p>

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
                                    <span className="block text-[10px] font-medium tracking-widest text-muted-foreground">
                                        {label}
                                    </span>

                                    <span className="block truncate text-xs font-medium">
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

                    <p className="flex items-center gap-1 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                        {t("qrForWebsite")}
                    </p>
                </div>
            </div>
        </article>
    )
}
