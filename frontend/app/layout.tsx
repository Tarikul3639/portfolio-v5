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
    "Tarikul Islam is a Bangladesh-based full-stack web developer specializing in TypeScript, Node.js, NestJS, React, and Next.js. Explore projects, technical skills, and experience.",

  applicationName: "Tarikul Islam Portfolio",
  authors: [{ name: "Tarikul Islam", url: "https://tarikul-islam.me" }],
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

  alternates: {
    canonical: "/",
  },

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
