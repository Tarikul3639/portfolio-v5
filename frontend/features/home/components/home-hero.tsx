"use client"

import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"
import { AngularLink } from "@/components/angular-link"
import { Container } from "@/components/container"
import { Spotlight } from "@/components/ui/spotlight"
import { FlipWords } from "@/components/ui/flip-words"
import { EncryptedText } from "@/components/ui/encrypted-text"

const easeOut = [0.22, 1, 0.36, 1] as const

export function HomeHero() {
  const t = useTranslations("home.hero")
  const reduceMotion = useReducedMotion()

  const imageReveal = {
    hidden: { opacity: 0, y: 12, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: easeOut,
        delay: 0.18,
      },
    },
  }

  const animationProps = reduceMotion
    ? {
      initial: false as const,
      whileInView: undefined,
      animate: undefined,
    }
    : {
      initial: "hidden" as const,
      whileInView: "visible" as const,
      viewport: { once: true, amount: 0.2 },
    }

  return (
    <section
      id="home-hero"
      className="relative isolate overflow-hidden pt-[clamp(4.2rem,9vw,8.2rem)] pb-[clamp(5.5rem,11vw,9rem)]"
      style={{ overflowAnchor: "none" }}
    >
      {/* Ambient background */}
      {/* <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-28 z-0 h-145 w-145 rounded-full opacity-25 blur-[110px] sm:right-[8%]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.68 0.18 255) 38%, var(--primary)), color-mix(in oklab, oklch(0.58 0.18 285) 24%, transparent) 52%, transparent 74%)",
        }}
      /> */}

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="var(--primary)"
      />

      {/* <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-32 z-0 h-85 w-85 rounded-full opacity-15 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, oklch(0.62 0.15 270) 30%, var(--ring)), transparent 72%)",
        }}
      /> */}

      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1.25fr)_minmax(260px,.75fr)] md:gap-[clamp(2rem,6vw,6.5rem)]">
        {/* Hero content */}
        <div className="relative z-10 order-2 md:order-1">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: easeOut },
              },
            }}
            {...animationProps}
            className="mb-6 flex items-center gap-3 font-mono text-[.69rem] tracking-[.04em] text-muted-foreground before:h-px before:w-7.5 before:bg-primary before:content-['']"
          >
            <EncryptedText
              text={t("eyebrow")}
            />
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.08,
                  ease: easeOut,
                },
              },
            }}
            {...animationProps}
            className="max-w-197.5 text-[clamp(3.4rem,7vw,6rem)] leading-[.98] font-normal tracking-[-.075em] max-md:text-[clamp(3.2rem,12vw,5.5rem)]"
          >
            {t("headlineOne")}{" "}
            <em className="inline-block min-w-[6ch] font-serif text-primary not-italic">
              <FlipWords
                words={t.raw("headlineAccent") as string[]}
                duration={3800}
                className="px-0 text-inherit!"
              />
            </em>{" "}
            <br />
            {t("headlineTwo")}
            <br />
            {t("headlineThree")}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.65,
                  delay: 0.16,
                  ease: easeOut,
                },
              },
            }}
            {...animationProps}
            className="mt-7 max-w-lg text-[clamp(1rem,1.4vw,1.12rem)] leading-[1.8] text-muted-foreground"
          >
            {t("description")}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.24,
                  ease: easeOut,
                },
              },
            }}
            {...animationProps}
            className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5 max-[420px]:flex-col max-[420px]:items-start"
          >
            <AngularLink href="/projects">
              <span className="group inline-flex items-center gap-1.5">
                {t("selectedWork")}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </AngularLink>

            <Link
              className="group relative text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              href="/services"
            >
              {t("services")}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.figure
          variants={imageReveal}
          {...animationProps}
          className="relative order-1 mx-auto w-[84%] max-w-85 p-3.75 md:order-2 md:mx-0 md:ml-auto md:w-full md:max-w-97.5"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 bottom-6 left-6 border border-border"
          />

          <span
            aria-hidden="true"
            className="absolute -top-2.5 right-1 size-17 border-t border-r border-primary"
          />

          <Image
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-18%] z-0 h-[136%] w-[136%] max-w-none object-cover object-center opacity-20 mix-blend-multiply dark:opacity-30 dark:mix-blend-screen"
            src="/images/profile/hero-structure.png"
            alt=""
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 100vw, 520px"
          />

          <Image
            className="relative z-10 block aspect-[.79] h-auto w-full object-cover object-[center_25%] filter-[saturate(.78)]"
            src="/images/profile/tarikul-islam.webp"
            alt={t("portraitAlt")}
            width={1120}
            height={1488}
            priority
            sizes="(max-width: 760px) 74vw, 390px"
          />

          <figcaption className="absolute right-0 -bottom-4 z-20 flex w-full min-w-0 gap-2 font-mono text-[.62rem] text-muted-foreground">
            <span className="shrink-0 text-primary">01</span>
            <span className="min-w-0 truncate">{t("caption")}</span>
          </figcaption>
        </motion.figure>
      </Container>

      <span
        aria-hidden="true"
        className="absolute right-[5.3vw] bottom-8 hidden font-mono text-[.64rem] text-muted-foreground [writing-mode:vertical-rl] md:block"
      >
        {t("portfolio")}
      </span>
    </section>
  )
}
