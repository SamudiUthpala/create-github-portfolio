import Image from 'next/image'
import { Award, Sparkles } from 'lucide-react'
import { achievements } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeading
        id="achievements-title"
        index="05"
        eyebrow="Milestones that matter"
        title="Every step"
        emphasis="counts."
        note="A growing collection of experiences, participation, and accomplishments."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="relative aspect-[6/5] bg-secondary">
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex gap-4 p-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Award className="size-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {item.issuer} · {item.date}
                </p>
                <h3 className="mt-1 font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
        <Sparkles className="size-5 shrink-0 text-accent" aria-hidden="true" />
        <p>The story is still being written. More certificates, workshops, and university activities to come.</p>
      </div>
    </section>
  )
}
