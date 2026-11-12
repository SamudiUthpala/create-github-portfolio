import { reflections } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Reflections() {
  return (
    <section id="reflections" aria-labelledby="reflections-title" className="scroll-mt-16 bg-muted/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="reflections-title"
          index="04"
          eyebrow="Notes along the way"
          title="Progress, in"
          emphasis="perspective."
          note="A journal for the lessons that don't always fit into a lecture."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {reflections.map((r, i) => (
            <article key={r.title} className="rounded-2xl border border-border bg-card p-8">
              <p className="font-serif text-3xl text-accent">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{r.category}</p>
              <h3 className="mt-3 font-serif text-2xl leading-snug">{r.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
