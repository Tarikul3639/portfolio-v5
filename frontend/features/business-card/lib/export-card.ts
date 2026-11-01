import { toPng } from "html-to-image"
import { jsPDF } from "jspdf"

const CARD_IDS = [
    { id: "business-card-front", name: "tarikul-islam-card-front" },
    { id: "business-card-back", name: "tarikul-islam-card-back" },
] as const

async function renderCard(id: string): Promise<string> {
    const element = document.getElementById(id)

    if (!element) {
        throw new Error(`Business card element not found: ${id}`)
    }

    return toPng(element, {
        // 3.5in at 300dpi produces a sharp 1050 × 600px business card.
        pixelRatio: 3.125,
        cacheBust: true,
        backgroundColor: getComputedStyle(element).backgroundColor,
    })
}

export async function exportCardPNG(): Promise<void> {
    for (const card of CARD_IDS) {
        const dataUrl = await renderCard(card.id)
        const link = document.createElement("a")

        link.download = `${card.name}.png`
        link.href = dataUrl
        link.click()
    }
}

export async function exportCardPDF(): Promise<void> {
    // Standard business-card dimensions: 3.5 × 2 inches.
    const width = 88.9
    const height = 50.8

    const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [width, height],
    })

    for (let index = 0; index < CARD_IDS.length; index++) {
        const dataUrl = await renderCard(CARD_IDS[index].id)

        if (index > 0) {
            pdf.addPage([width, height], "landscape")
        }

        pdf.addImage(dataUrl, "PNG", 0, 0, width, height, undefined, "FAST")
    }

    pdf.save("tarikul-islam-business-card.pdf")
}
