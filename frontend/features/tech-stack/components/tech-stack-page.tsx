"use client"

import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"

import { Container } from "@/components/container"
import { EncryptedText } from "@/components/ui/encrypted-text"
import { TECH_STACK } from "@/features/home/data/tech-stack"

const techSections = [
  {
    key: "backend",
    technologies: ["NestJS", "Node.js", "REST API", "Socket.IO"],
  },
  {
    key: "frontend",
    technologies: [
      "React",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    key: "databases",
    technologies: ["MongoDB", "MySQL"],
  },
  {
    key: "languages",
    technologies: ["TypeScript", "JavaScript", "Python", "C++"],
  },
  {
    key: "tools",
    technologies: ["Docker", "Git", "GitHub"],
  },
] as const

export function TechStackPage() {
  const t = useTranslations("techStack")
  const reduceMotion = useReducedMotion() ?? false

  const reveal = (delay = 0, y = 14, duration = 0.6) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  const descriptions: Record<string, string> = {
    NestJS: t("descriptions.nestjs"),
    "Node.js": t("descriptions.nodejs"),
    "REST API": t("descriptions.restApi"),
    "Socket.IO": t("descriptions.socketIo"),
    React: t("descriptions.react"),
    "Next.js": t("descriptions.nextjs"),
    Redux: t("descriptions.redux"),
    "Tailwind CSS": t("descriptions.tailwindCss"),
    "Framer Motion": t("descriptions.framerMotion"),
    MongoDB: t("descriptions.mongoDb"),
    MySQL: t("descriptions.mySql"),
    TypeScript: t("descriptions.typeScript"),
    JavaScript: t("descriptions.javaScript"),
    Python: t("descriptions.python"),
    "C++": t("descriptions.cpp"),
    Docker: t("descriptions.docker"),
    Git: t("descriptions.git"),
    GitHub: t("descriptions.gitHub"),
  }

  const groups = {
    backend: t("groups.backend"),
    frontend: t("groups.frontend"),
    databases: t("groups.databases"),
    languages: t("groups.languages"),
    tools: t("groups.tools"),
  }

  const technologies = new Map(TECH_STACK.map((item) => [item.label, item]))

  return (
    <main className="flex-1">
      <section className="relative isolate overflow-hidden">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-36 -right-32 z-0 h-125 w-125 rounded-full opacity-18 blur-[105px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, oklch(0.58 0.18 255) 34%, var(--primary)), transparent 72%)",
          }}
        />

        <Container className="relative z-10 pt-[clamp(4.8rem,9vw,8rem)] pb-10">
          <motion.p
            {...reveal(0, 8, 0.45)}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
          >
            <EncryptedText text={t("hero.eyebrow")} />
          </motion.p>

          <motion.h1
            {...reveal(0.08, 20, 0.65)}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-222.5 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-[.96] tracking-[-.075em]"
          >
            {t("hero.title")}{" "}
            <em className="text-primary">{t("hero.accent")}</em>
          </motion.h1>

          <motion.p
            {...reveal(0.16, 14, 0.55)}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground"
          >
            {t("hero.description")}
          </motion.p>
        </Container>
      </section>

      <Container className="pb-[clamp(6rem,10vw,9rem)]">
        <motion.p
          {...reveal(0, 0, 0.45)}
          className="mb-8 font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
        >
          {t("count")} · {TECH_STACK.length.toString().padStart(2, "0")}
        </motion.p>

        <div className="space-y-12 sm:space-y-16">
          {techSections.map((section, sectionIndex) => (
            <motion.section
              key={section.key}
              {...reveal(Math.min(sectionIndex * 0.04, 0.16), 14, 0.5)}
            >
              <h2 className="mb-4 border-t border-border pt-4 font-mono text-[.7rem] tracking-[.11em] text-muted-foreground uppercase sm:mb-5">
                {groups[section.key]}
                <span className="ml-2 text-foreground/45">
                  · {section.technologies.length.toString().padStart(2, "0")}
                </span>
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {section.technologies.map((label, itemIndex) => {
                  const item = technologies.get(label)

                  if (!item) return null

                  return (
                    <motion.article
                      key={item.label}
                      {...reveal(itemIndex * 0.045, 10, 0.38)}
                      className="group min-h-36 border border-border bg-card/25 p-4 transition-colors duration-300 hover:border-primary/35 hover:bg-card/50 sm:min-h-40 sm:p-5"
                    >
                      <motion.span
                        aria-hidden="true"
                        whileHover={
                          reduceMotion ? undefined : { y: -2, scale: 1.06 }
                        }
                        transition={{
                          duration: reduceMotion ? 0 : 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mb-4 block w-fit"
                        style={{ color: item.color }}
                      >
                        {item.icon}
                      </motion.span>

                      <h3 className="text-sm font-medium tracking-[-.01em] text-foreground">
                        {item.label}
                      </h3>

                      <p className="mt-1.5 max-w-68 text-xs leading-[1.7] text-muted-foreground">
                        {descriptions[item.label]}
                      </p>
                    </motion.article>
                  )
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </Container>
    </main>
  )
}