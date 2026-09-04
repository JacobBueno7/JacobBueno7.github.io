import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Projects" title="Things I've built" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
