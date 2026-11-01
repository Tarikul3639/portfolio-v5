"use client"

import { useState } from "react"
import { FileImage, FileText, LoaderCircle } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useTranslations } from "next-intl"
import { exportCardPDF, exportCardPNG } from "../lib/export-card"

import { Button } from "@/components/ui/button"

export function BusinessCardControls() {
    const t = useTranslations("businessCard")
    const reduceMotion = useReducedMotion() ?? false
    const [loading, setLoading] = useState<"png" | "pdf" | null>(null)
    const [hasError, setHasError] = useState(false)

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

    const enterAnimation = reduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
        }

    return (
        <motion.div
            {...enterAnimation}
            className="business-card-screen-controls mb-6 flex flex-col gap-4 border-b border-border pb-5 items-center sm:justify-end"
        >
            <div className="flex flex-wrap items-center gap-2">
                <motion.div
                    whileHover={reduceMotion || loading ? undefined : { y: -1 }}
                    whileTap={reduceMotion || loading ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.16 }}
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

                <motion.div
                    whileHover={reduceMotion || loading ? undefined : { y: -1 }}
                    whileTap={reduceMotion || loading ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.16 }}
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
            </div>

            <p className="sr-only" aria-live="polite" aria-atomic="true">
                {loading ? t("preparingDownload") : ""}
            </p>

            {hasError && (
                <p
                    role="alert"
                    className="text-sm text-destructive sm:basis-full sm:text-right"
                >
                    {t("downloadError")}
                </p>
            )}
        </motion.div>
    )
}
