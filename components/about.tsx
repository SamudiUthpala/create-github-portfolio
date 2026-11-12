import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { about, profile } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeading
        id="about-title"
        index="01"
        eyebrow="About me"
        title="More than a student."
        emphasis="A mind in motion."
        note="At the beginning of a journey shaped by curiosity, intention, and a willingness to try."
      />
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a href="#reflections" className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-foreground hover:text-accent">
            Follow my learning journey
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <GraduationCap className="size-6 text-accent" aria-hidden="true" />
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">The foundation</p>
          <h3 className="mt-3 font-serif text-2xl">{about.degree}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{profile.university}</p>
          <hr className="my-6 border-border" />
          <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs text-secondary-foreground">
            {about.status}
          </span>
          <p className="mt-3 text-xs text-muted-foreground">{about.note}</p>
        </div>
      </div>
    </section>
  )
}
