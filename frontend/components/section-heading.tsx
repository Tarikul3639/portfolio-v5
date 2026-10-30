export function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string
  title: string
  note?: string
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
      <div>
        <p className="font-mono text-[.68rem] leading-snug tracking-[.11em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-.055em]">
          {title}
        </h2>
      </div>
      {note && (
        <p className="max-w-88 text-[.94rem] leading-[1.7] text-muted-foreground">
          {note}
        </p>
      )}
    </div>
  )
}
