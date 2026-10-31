import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/container"
import { MotionReveal } from "@/components/motion"

export function ExperienceHighlight() {
    return (
        <section
            className="border-y border-border py-[clamp(3.5rem,7vw,6rem)]"
            aria-labelledby="experience-highlight-title"
        >
            <Container>
                <MotionReveal className="grid items-center gap-8 md:grid-cols-[.7fr_1.3fr] md:gap-12">
                    <div className="flex items-baseline gap-3 border-l-2 border-primary pl-5 sm:pl-6">
                        <p
                            className="font-serif text-[clamp(4.5rem,10vw,8rem)] leading-none tracking-[-.09em] text-primary"
                            aria-label="More than two years"
                        >
                            2+
                        </p>
                        <span className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                            years
                        </span>
                    </div>
                    <div className="max-w-148">
                        <p className="font-mono text-[.68rem] tracking-[.11em] text-muted-foreground uppercase">
                            Experience
                        </p>
                        <h2
                            id="experience-highlight-title"
                            className="mt-3 max-w-140 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] tracking-[-.06em]"
                        >
                            Building dependable products with a{" "}
                            <em className="text-primary">full view</em> of the work.
                        </h2>
                        <p className="mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground sm:text-base">
                            I bring more than two years of hands-on experience across backend
                            systems, product interfaces, and the details that connect them.
                        </p>
                        <Link
                            className="mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                            href="/about"
                        >
                            More about my approach
                            <ArrowUpRight aria-hidden="true" className="size-4" />
                        </Link>
                    </div>
                </MotionReveal>
            </Container>
        </section>
    )
}
