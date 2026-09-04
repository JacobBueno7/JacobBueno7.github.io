import type { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-raised px-3 py-1 text-sm text-fg-muted">
      {children}
    </span>
  );
}
