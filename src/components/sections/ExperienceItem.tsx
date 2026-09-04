import { Card } from '@/components/ui/Card';
import type { ExperienceEntry } from '@/data/experience';

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <Card className="h-full p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-lg font-semibold">{entry.role}</h3>
        <span className="text-sm text-fg-muted">{entry.dateRange}</span>
      </div>
      <p className="text-sm font-medium text-accent">{entry.org}</p>
      <ul className="mt-4 list-outside list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg-muted">
        {entry.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </Card>
  );
}
