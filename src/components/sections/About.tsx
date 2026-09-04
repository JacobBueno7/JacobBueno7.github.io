import { GraduationCap } from 'lucide-react';
import { aboutParagraphs, education } from '@/data/about';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import profilePhoto from '@/assets/images/website-pfp.webp';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="About" title="A bit about me" />

      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-14">
        <div className="flex justify-center md:justify-start">
          <img
            src={profilePhoto}
            alt="Jacob Bueno"
            width={220}
            height={220}
            className="size-40 rounded-2xl border border-border object-cover sm:size-52 md:size-full"
          />
        </div>

        <div>
          <div className="space-y-5 text-fg-muted">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <Card hoverable={false} className="mt-8 flex items-start gap-4 p-6">
            <GraduationCap className="mt-0.5 shrink-0 text-accent" size={22} />
            <div>
              <p className="font-display font-semibold">{education.school}</p>
              <p className="text-sm text-fg-muted">{education.degree}</p>
              <p className="text-sm text-fg-muted">{education.dateRange}</p>
              <details className="mt-3 text-sm text-fg-muted">
                <summary className="cursor-pointer font-medium text-accent">
                  Relevant coursework
                </summary>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {education.coursework.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </details>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
