import { Boxes, Camera, Database, Grid2x2, Play, Spade, Swords, Terminal, Worm } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GithubIcon } from '@/components/icons/BrandIcons';
import type { ProjectEntry } from '@/data/projects';

const placeholderIcons = { Camera, Boxes, Terminal, Swords, Spade, Worm, Grid2x2, Database };

export function ProjectCard({ project }: { project: ProjectEntry }) {
  const PlaceholderIcon = project.placeholderIcon ? placeholderIcons[project.placeholderIcon] : null;

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="aspect-video w-full overflow-hidden bg-surface-raised">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-br from-accent-soft to-transparent">
            {PlaceholderIcon && <PlaceholderIcon className="text-accent" size={40} strokeWidth={1.5} />}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg hover:text-accent"
            >
              <GithubIcon className="size-3.5" />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg hover:text-accent"
            >
              <Play size={15} />
              Watch demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
