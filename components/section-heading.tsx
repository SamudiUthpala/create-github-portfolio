type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  emphasis: string
  note?: string
  id: string
}

export function SectionHeading({ index, eyebrow, title, emphasis, note, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="mr-3">{index}</span>
          {eyebrow}
        </p>
        <h2 id={id} className="font-serif text-4xl leading-tight text-balance md:text-5xl">
          {title} <em className="text-accent">{emphasis}</em>
        </h2>
      </div>
      {note && <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{note}</p>}
    </div>
  )
}
