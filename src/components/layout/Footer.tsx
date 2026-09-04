import { Mail } from 'lucide-react';
import { site } from '@/data/site';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-2xl font-semibold">Let’s talk.</h2>
            <p className="mt-2 max-w-sm text-fg-muted">
              Reach out about opportunities, collaborations, or just to say hi.
            </p>
            <div className="mt-4 flex flex-col gap-1">
              {site.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-accent"
                >
                  <Mail size={15} />
                  {email}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>
        </div>

        <p className="mt-12 text-sm text-fg-muted">© {year} Jacob Bueno</p>
      </div>
    </footer>
  );
}
