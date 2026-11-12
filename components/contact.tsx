import { FolderGit2, BriefcaseBusiness, Mail, MapPin, Send } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const inputClass =
  'w-full rounded-md border border-input bg-muted px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 bg-muted/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="mr-3">06</span>
            {"Let's start a conversation"}
          </p>
          <h2 id="contact-title" className="font-serif text-4xl leading-tight md:text-5xl">
            Good things begin
            <br />
            with a <em className="text-accent">hello.</em>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            {"Have an idea, a question, or a learning opportunity to share? I'd love to connect."}
          </p>
          <dl className="mt-10 space-y-6 text-sm">
            <div className="flex gap-4">
              <Mail className="size-5 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-semibold">Email</dt>
                <dd className="text-muted-foreground">
                  {profile.email ? (
                    <a href={`mailto:${profile.email}`} className="hover:text-accent">
                      {profile.email}
                    </a>
                  ) : (
                    'Your email address goes here'
                  )}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="size-5 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-semibold">Currently studying at</dt>
                <dd className="text-muted-foreground">{profile.university}</dd>
              </div>
            </div>
          </dl>
          <div className="mt-8 flex gap-5 text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
              <FolderGit2 className="size-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
              <BriefcaseBusiness className="size-5" />
            </a>
          </div>
        </div>

        <form
          action={profile.email ? `mailto:${profile.email}` : undefined}
          method="post"
          encType="text/plain"
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h3 className="font-serif text-2xl">Leave a little note.</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              <span>Your name</span>
              <input name="name" required placeholder="How should I call you?" className={inputClass} />
            </label>
            <label className="space-y-2 text-sm font-medium">
              <span>Email address</span>
              <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
            </label>
          </div>
          <label className="mt-4 block space-y-2 text-sm font-medium">
            <span>{"What's on your mind?"}</span>
            <textarea name="message" rows={4} required placeholder="Tell me a little about it..." className={inputClass} />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send message
            <Send className="size-4" aria-hidden="true" />
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">A small conversation can lead to something meaningful.</p>
        </form>
      </div>
    </section>
  )
}
