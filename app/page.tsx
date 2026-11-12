import { About } from '@/components/about'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Reflections } from '@/components/reflections'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'
import { profile } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reflections />
        <Achievements />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>Learning with curiosity. Creating with purpose.</p>
        <p className="flex gap-6">
          <span>
            {'© '}
            {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#home" className="hover:text-accent">
            {'Back to top ↑'}
          </a>
        </p>
      </footer>
    </>
  )
}
