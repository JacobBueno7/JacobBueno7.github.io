interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-12">
      {eyebrow && (
        <p className="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
    </div>
  );
}
