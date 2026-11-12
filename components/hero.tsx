import Image from 'next/image'
import { ArrowRight, ArrowUpRight, FolderGit2, BriefcaseBusiness, Mail, Sprout } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20 md:py-28">
      <div className="grid items-center gap-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {profile.eyebrow}
          </p>
          <p className="mb-3 text-muted-foreground">{"Hello, I'm"}</p>
          <h1 id="hero-title" className="font-serif text-5xl leading-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-serif text-3xl leading-snug md:text-4xl">
            {profile.taglineStart}
            <br />
            <em className="text-accent">{profile.taglineEnd}</em>
          </p>
          <ul className="mt-8 space-y-1 text-sm font-semibold">
            {profile.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{profile.intro}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore my journey
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
              View my projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
              <FolderGit2 className="size-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
              <BriefcaseBusiness className="size-4" />
            </a>
            <a href="#contact" aria-label="Contact" className="hover:text-accent">
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[3rem] border border-border" aria-hidden="true" />
          <div className="overflow-hidden rounded-t-[10rem] rounded-b-2xl bg-card shadow-sm">
            <Image
              src={profile.photo || '/placeholder.svg'}
              alt={`Portrait of ${profile.name}`}
              width={600}
              height={628}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 flex items-end justify-between text-xs text-muted-foreground">
            <span>
              Always a student.
              <br />
              <span className="text-foreground">Always a work in progress.</span>
            </span>
            <Sprout className="size-4 text-accent" aria-hidden="true" />
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
