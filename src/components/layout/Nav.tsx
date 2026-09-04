import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { site } from '@/data/site';
import { LinkedinIcon } from '@/components/icons/BrandIcons';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          Jacob<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <ThemeToggle />
          <a
            href={site.resumeUrl}
            download={site.resumeDownloadName}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-full border border-border text-fg md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-fg-muted"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <ThemeToggle />
            <a
              href={site.resumeUrl}
              download={site.resumeDownloadName}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg"
            >
              <Download size={15} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
