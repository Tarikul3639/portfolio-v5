import { env } from "@/config/env"

export const siteConfig = {
  url: env.NEXT_PUBLIC_SITE_URL,
  contact: {
    email: env.NEXT_PUBLIC_CONTACT_EMAIL,
    phone: env.NEXT_PUBLIC_CONTACT_PHONE,
    whatsappNumber: env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    whatsappUrl: `https://wa.me/${env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
    calUrl: env.NEXT_PUBLIC_CAL_URL,
  },
  social: {
    github: env.NEXT_PUBLIC_GITHUB_URL,
    linkedin: env.NEXT_PUBLIC_LINKEDIN_URL,
    facebook: env.NEXT_PUBLIC_FACEBOOK_URL,
  },
} as const

export type SiteConfig = typeof siteConfig
