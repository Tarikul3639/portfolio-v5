"use client"

import { useState } from "react"
import { FileImage, FileText, LoaderCircle } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { exportCardPDF, exportCardPNG } from "../lib/export-card"

export function BusinessCardControls() {
  const t = useTranslations("businessCard")
  const reduceMotion = useReducedMotion() ?? false
  const [loading, setLoading] = useState<"png" | "pdf" | null>(null)
  const [hasError, setHasError] = useState(false)

  const reveal = (delay = 0, y = 14, duration = 0.5) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  async function downloadPNG() {
    setLoading("png")
    setHasError(false)

    try {
      await exportCardPNG()
    } catch (error) {
      console.error("PNG export failed:", error)
      setHasError(true)
    } finally {
      setLoading(null)
    }
  }

  async function downloadPDF() {
    setLoading("pdf")
    setHasError(false)

    try {
      await exportCardPDF()
    } catch (error) {
      console.error("PDF export failed:", error)
      setHasError(true)
    } finally {
      setLoading(null)
    }
  }

  return (
    <motion.div
      {...reveal(0, 8, 0.4)}
      className="business-card-screen-controls mb-6 flex flex-col items-center gap-4 border-b border-border pb-5 sm:justify-end"
    >
      <div className="flex flex-wrap items-center gap-2">
        <motion.div {...reveal(0.05, 12, 0.45)}>
          <motion.div
            whileHover={reduceMotion || loading ? undefined : { y: -2 }}
            whileTap={reduceMotion || loading ? undefined : { scale: 0.97 }}
            transition={{
              duration: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Button
              type="button"
              onClick={downloadPNG}
              disabled={loading !== null}
              aria-label={t("downloadPngAction")}
              className="min-h-10 rounded-none px-4 text-xs"
            >
              {loading === "png" ? (
                <LoaderCircle
                  aria-hidden="true"
                  className={reduceMotion ? undefined : "animate-spin"}
                />
              ) : (
                <FileImage aria-hidden="true" />
              )}
              {loading === "png"
                ? t("preparingDownload")
                : t("downloadPngAction")}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div {...reveal(0.12, 12, 0.45)}>
          <motion.div
            whileHover={reduceMotion || loading ? undefined : { y: -2 }}
            whileTap={reduceMotion || loading ? undefined : { scale: 0.97 }}
            transition={{
              duration: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Button
              type="button"
              variant="outline"
              onClick={downloadPDF}
              disabled={loading !== null}
              aria-label={t("downloadPdfAction")}
              className="min-h-10 rounded-none px-4 text-xs"
            >
              {loading === "pdf" ? (
                <LoaderCircle
                  aria-hidden="true"
                  className={reduceMotion ? undefined : "animate-spin"}
                />
              ) : (
                <FileText aria-hidden="true" />
              )}
              {loading === "pdf"
                ? t("preparingDownload")
                : t("downloadPdfAction")}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {loading ? t("preparingDownload") : ""}
      </p>

      {hasError && (
        <motion.p
          {...reveal(0, 4, 0.25)}
          role="alert"
          className="text-sm text-destructive sm:basis-full sm:text-right"
        >
          {t("downloadError")}
        </motion.p>
      )}
    </motion.div>
  )
}