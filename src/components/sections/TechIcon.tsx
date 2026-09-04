import type { Technology } from '@/data/technologies';

export function TechIcon({ tech }: { tech: Technology }) {
  const GenericIcon = tech.icon;

  return (
    <div className="group relative flex flex-col items-center">
      <div
        tabIndex={0}
        aria-label={tech.name}
        className="flex size-14 items-center justify-center rounded-2xl border border-border bg-surface text-fg-muted outline-none transition-all duration-200 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:text-accent group-hover:shadow-md group-focus-visible:-translate-y-1 group-focus-visible:border-accent/50 group-focus-visible:text-accent sm:size-16"
      >
        {GenericIcon ? (
          <GenericIcon className="size-6 sm:size-7" strokeWidth={1.6} aria-hidden="true" />
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-7 sm:size-8" aria-hidden="true">
            <path d={tech.path} />
          </svg>
        )}
      </div>
      <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md bg-fg px-2 py-1 text-xs font-medium text-bg opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
        {tech.name}
      </span>
    </div>
  );
}
