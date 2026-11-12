import { Code2, Search, Users } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const icons = { code: Code2, search: Search, people: Users }

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-16 bg-muted/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="skills-title"
          index="02"
          eyebrow="My growing toolkit"
          title="Learning is a"
          emphasis="practice."
          note="Areas I'm exploring and developing. Every skill starts with curiosity."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon]
            return (
              <article key={group.title} className="rounded-2xl border border-border bg-card p-8">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl">{group.title}</h3>
                <ul className="mt-6 divide-y divide-border border-t border-border text-sm">
                  {group.items.map((item) => (
                    <li key={item} className="py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
