import localFont from "next/font/local"
import type { Metadata, Viewport } from "next"

import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/motion"
import { ScrollDownIndicator } from "@/components/scroll-down-indicator"
import { siteConfig } from "@/config/site"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"

const fontBengali = localFont({
  src: [
    { path: "../fonts/NotoSansBengali-Regular.ttf", weight: "400" },
    { path: "../fonts/NotoSansBengali-Bold.ttf", weight: "700" },
  ],
  variable: "--font-bengali",
  display: "swap",
})

const fontSans = localFont({
  src: [
    { path: "../fonts/NotoSans-Regular.ttf", weight: "400" },
    { path: "../fonts/NotoSans-Bold.ttf", weight: "700" },
  ],
  variable: "--font-sans",
  display: "swap",
})

const fontMono = localFont({
  src: "../fonts/NotoMono-Regular.ttf",
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Tarikul Islam — Full-Stack Web Developer",
    template: "%s — Tarikul Islam",
  },

  description:
    "Tarikul Islam is a Bangladesh-based full-stack web developer specializing in TypeScript, Node.js, NestJS, React, and Next.js. Explore projects, technical skills, and experience.",

  applicationName: "Tarikul Islam Portfolio",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon1.png",
    apple: "/apple-icon.png",
  },
  authors: [{ name: "Tarikul Islam", url: siteConfig.url }],
  creator: "Tarikul Islam",
  publisher: "Tarikul Islam",
  category: "technology",

  // Relevant portfolio search terms
  keywords: [
    "Tarikul Islam",
    "tarikul3639",
    "tarikulislam3639",
    "Tarikul Islam full-stack developer",
    "Tarikul Islam web developer",
    "Tarikul Islam developer",
    "Tarikul Islam portfolio",
    "Full-Stack Web Developer",
    "Full-Stack Developer Bangladesh",
    "Web Developer Bangladesh",
    "Software Developer Bangladesh",
    "Backend Developer",
    "Backend Developer Bangladesh",
    "Node.js Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Next.js Developer Bangladesh",
    "JavaScript Developer",
    "REST API Developer",
    "API Development",
    "Web Application Development",
    "Frontend and Backend Developer",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Tarikul Islam",
    title: "Tarikul Islam — Full-Stack Web Developer",
    description:
      "Explore selected projects, technical skills, and work by Tarikul Islam, a Bangladesh-based backend-focused full-stack web developer.",
    images: [
      {
        url: "/images/profile/tarikul-islam.webp",
        alt: "Tarikul Islam — Full-Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tarikul Islam — Full-Stack Web Developer",
    description:
      "Explore projects and technical work by Tarikul Islam, a full-stack web developer specializing in TypeScript, Node.js, NestJS, React, and Next.js.",
    images: ["/images/profile/tarikul-islam.webp"],
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} ${fontBengali.variable} antialiased`}
    >
      <body className={`font-sans ${locale === "bn" ? "font-bengali" : ""}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <ScrollProgress />
            <ScrollDownIndicator />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
