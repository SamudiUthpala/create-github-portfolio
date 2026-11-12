import { CloudSun } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeading
        id="projects-title"
        index="03"
        eyebrow="Projects"
        title="A space to"
        emphasis="build."
        note="Learning by making, experimenting, and asking better questions."
      />
      <div className="space-y-8">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-[1fr_1.1fr]"
          >
            <div className="flex min-h-64 flex-col justify-between bg-secondary p-8">
              <div className="flex justify-between text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span>{project.label}</span>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <CloudSun className="size-24 self-center text-accent/40" strokeWidth={1} aria-hidden="true" />
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-background/70 px-2.5 py-1 text-xs">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8 md:p-10">
              <h3 className="font-serif text-3xl leading-tight">{project.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em]">My contribution</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.contributionIntro}</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed">
                {project.contributions.map((c) => (
                  <li key={c.title} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold">{c.title}:</strong>{' '}
                      <span className="text-muted-foreground">{c.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
