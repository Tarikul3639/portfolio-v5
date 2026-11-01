import Image from "next/image"
import { useTranslations } from "next-intl"

import { ParticleHalo } from "./particle-halo"
import { BusinessCardFrontParticles } from "./business-card-front-particles"

export function BusinessCardFront() {
    const t = useTranslations("businessCard")

    return (
        <article
            id="business-card-front"
            aria-label={t("cardTitle")}
            className="relative isolate h-80 w-140 overflow-hidden bg-card text-card-foreground"
        >
            {/* Background particles */}
            <BusinessCardFrontParticles />

            {/* Profile and identity */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-[5%] px-[5%] pt-[2%]">
                {/* Profile photo and particle halo */}
                <div className="relative mb-[2.2%] aspect-square w-[17%] min-w-10">
                    {/* Particle */}
                    <ParticleHalo />

                    {/* Profile photo with transparent, blended edges */}
                    <div className="absolute inset-0 z-10 overflow-hidden rounded-full">
                        <div className="relative h-full w-full overflow-hidden rounded-full">
                            <Image
                                src="/images/profile/business-card-profile.jpg"
                                alt="Tarikul Islam"
                                fill
                                sizes="160px"
                                priority
                                className="mask-radial-[50%_50%] mask-radial-from-80% object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Name */}
                <h2 className="text-center font-sans text-2xl leading-tight font-semibold tracking-[0.06em] text-accent-foreground/80 uppercase">
                    Tarikul Islam
                </h2>

                {/* Professional role */}
                <p className="text-center text-base font-medium tracking-[0.04em] text-primary">
                    {t("role")}
                </p>

                {/* Specialties */}
                <p className="pt-6 text-center text-base leading-relaxed text-muted-foreground">
                    {t.raw("specialtiesLine").map((item: string, index: number) => (
                        <span key={item}>
                            {index > 0 && (
                                <span
                                    aria-hidden="true"
                                    className="mx-3.5 inline-block h-4 w-0.5 bg-primary align-middle"
                                />
                            )}
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </article>
    )
}
