import { technologies } from '@/data/technologies';
import { techniques } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { TechIcon } from './TechIcon';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Skills" title="Technologies I work with" />
      <p className="-mt-8 mb-10 text-sm text-fg-muted sm:mb-12">Hover an icon for its name.</p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 sm:justify-start sm:gap-x-8">
        {technologies.map((tech) => (
          <TechIcon key={tech.name} tech={tech} />
        ))}
      </div>

      <div className="mt-14">
        <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-fg-muted">
          Techniques & Concepts
        </h3>
        <div className="flex flex-wrap gap-2">
          {techniques.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
