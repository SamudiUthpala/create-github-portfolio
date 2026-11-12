import { Award, Sparkles } from 'lucide-react'
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
      <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-secondary">
          <Award className="size-7 text-accent" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-2xl">The story is still being written.</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Certificates, academic accomplishments, workshops, and university activities will be shared here as they
            happen.
          </p>
          <span className="mt-4 inline-block rounded-md bg-secondary px-3 py-1 text-xs text-secondary-foreground">
            New beginnings · More to come
          </span>
        </div>
        <Sparkles className="hidden size-7 text-accent sm:block" aria-hidden="true" />
      </div>
    </section>
  )
}
