import { experience } from '@/data/experience';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceItem } from './ExperienceItem';

export function Experience() {
  const work = experience.filter((e) => e.category === 'work');
  const leadership = experience.filter((e) => e.category === 'leadership');

  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="grid gap-5 sm:grid-cols-2">
        {work.map((entry) => (
          <ExperienceItem key={entry.id} entry={entry} />
        ))}
      </div>

      <h3 className="mb-6 mt-16 font-display text-xl font-semibold">Leadership & Extracurricular</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        {leadership.map((entry) => (
          <ExperienceItem key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
