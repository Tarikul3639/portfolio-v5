
import localFont from "next/font/local"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/motion"

const fontSans = localFont({
  src: [
    { path: "./fonts/NotoSans-Regular.ttf", weight: "400" },
    { path: "./fonts/NotoSans-Bold.ttf", weight: "700" },
  ],
  variable: "--font-sans",
  display: "swap",
})

const fontMono = localFont({
  src: "./fonts/NotoMono-Regular.ttf",
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tarikul-islam.me"),
  title: {
    default: "Tarikul Islam — Full-Stack Web Developer",
    template: "%s — Tarikul Islam",
  },
  description:
    "Tarikul Islam is a Bangladesh-based full-stack web developer focused on TypeScript, Node.js, NestJS, React, and Next.js.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Tarikul Islam",
    title: "Tarikul Islam — Full-Stack Web Developer",
    description:
      "Selected work and notes from Tarikul Islam, a backend-focused full-stack web developer.",
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
    description: "Selected work and notes from Tarikul Islam.",
    images: ["/images/profile/tarikul-islam.webp"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} antialiased`}
    >
      <body className="font-sans">
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
