import { clsx } from 'clsx';
import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({ className, hoverable = true, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-border bg-surface shadow-sm transition-all duration-200',
        hoverable && 'hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
