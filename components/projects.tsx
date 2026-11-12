import Image from 'next/image'
import { Award } from 'lucide-react'
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
            className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid-cols-[1fr_1.1fr]"
          >
            <div className="flex flex-col gap-4 bg-secondary p-6">
              <div className="flex justify-between text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span>{project.label}</span>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 768px) 520px, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {project.video && (
                <details className="group rounded-xl bg-background/70 p-3 text-sm">
                  <summary className="cursor-pointer font-medium">Watch the demo video</summary>
                  <video src={project.video} controls preload="none" className="mt-3 w-full rounded-lg">
                    <track kind="captions" />
                  </video>
                </details>
              )}
            </div>
            <div className="p-8 md:p-10">
              {project.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <Award className="size-3.5" aria-hidden="true" />
                  {project.badge}
                </span>
              )}
              <h3 className="mt-4 font-serif text-3xl leading-tight text-balance">{project.title}</h3>
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
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em]">Technologies</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">
                    {tag}
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
