import { ArrowUpRight } from 'lucide-react'
import { navLinks, profile } from '@/lib/portfolio-data'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#home" className="font-serif text-lg font-semibold">
          {profile.initials}
          <span className="text-accent">.</span>
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-foreground/80 transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {"Let's connect"}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
