"use client"

import { useId, useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"
import { EncryptedText } from "@/components/ui/encrypted-text"
import { Container } from "@/components/container"

const faqItems = [
  "expertise",
  "technology",
  "projects",
  "services",
  "collaboration",
  "contact",
] as const

type FaqItem = (typeof faqItems)[number]

export function HomeFaq() {
  const t = useTranslations("home.faq")
  const reduceMotion = useReducedMotion() ?? false
  const id = useId()
  const [openItem, setOpenItem] = useState<FaqItem | null>(null)

  const reveal = (delay = 0, y = 14, duration = 0.6) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="border-t border-border py-[clamp(5rem,9vw,8rem)]"
    >
      <Container>
        <div className="mb-9 max-w-3xl">
          <motion.p
            className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase"
            {...reveal(0, 8, 0.45)}
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h2
            id={`${id}-title`}
            className="mt-3 truncate font-serif text-[clamp(2.4rem,5vw,4rem)] leading-none tracking-[-.055em]"
            {...reveal(0.08, 18, 0.65)}
          >
            <EncryptedText text={t("title")} />
          </motion.h2>

          <motion.p
            className="mt-4 max-w-2xl text-sm leading-[1.8] text-muted-foreground sm:text-base"
            {...reveal(0.16, 12, 0.55)}
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqItems.map((item, index) => {
            const expanded = openItem === item
            const triggerId = `${id}-${item}-trigger`
            const panelId = `${id}-${item}-panel`

            return (
              <motion.article
                key={item}
                {...reveal(0.04 * (index + 1), 10, 0.5)}
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpenItem(expanded ? null : item)}
                    className="group flex w-full items-center justify-between gap-5 py-5 text-left text-base font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:py-6 sm:text-lg"
                  >
                    <span>{t(`items.${item}.question`)}</span>

                    <ChevronDown
                      aria-hidden="true"
                      className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:text-primary motion-reduce:transition-none ${
                        expanded ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.7}
                    />
                  </button>
                </h3>

                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!expanded}
                  initial={false}
                  animate={
                    expanded
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pr-8 pb-5 text-sm leading-[1.8] text-muted-foreground sm:pb-6 sm:text-base">
                    {t(`items.${item}.answer`)}
                  </p>
                </motion.div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
