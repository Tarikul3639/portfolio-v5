import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().email(),
  NEXT_PUBLIC_CONTACT_PHONE: z.string().trim().min(7),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().regex(/^\d+$/, "Use digits only"),
  NEXT_PUBLIC_CAL_URL: z.string().url(),
  NEXT_PUBLIC_GITHUB_URL: z.string().url(),
  NEXT_PUBLIC_LINKEDIN_URL: z.string().url(),
  NEXT_PUBLIC_FACEBOOK_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  NEXT_PUBLIC_CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_CAL_URL: process.env.NEXT_PUBLIC_CAL_URL,
  NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
  NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  NEXT_PUBLIC_FACEBOOK_URL: process.env.NEXT_PUBLIC_FACEBOOK_URL,
})

if (!parsedEnv.success) {
  throw new Error(
    `Invalid environment variables:\n${parsedEnv.error.issues
      .map((issue) => `- ${issue.path.join(".")}: ${issue.message}`)
      .join("\n")}`
  )
}

export const env = parsedEnv.data

export type Env = typeof env
