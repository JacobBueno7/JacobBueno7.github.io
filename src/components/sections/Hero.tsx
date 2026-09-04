import { ArrowDown } from 'lucide-react';
import { site } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-16 text-center sm:px-8"
    >
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute left-1/2 top-1/2 size-[36rem] rounded-full bg-accent/25 blur-[110px] sm:size-[46rem]"
      />

      <p
        className="animate-fade-up relative font-display text-sm font-semibold uppercase tracking-widest text-accent"
        style={{ animationDelay: '0ms' }}
      >
        {site.role}
      </p>
      <h1
        className="animate-fade-up relative mt-5 font-display text-7xl font-semibold tracking-tight sm:text-8xl md:text-9xl"
        style={{ animationDelay: '90ms' }}
      >
        {site.firstName}.
      </h1>
      <p
        className="animate-fade-up relative mt-6 max-w-xl text-lg text-fg-muted sm:text-xl"
        style={{ animationDelay: '180ms' }}
      >
        {site.tagline}
      </p>

      <div
        className="animate-fade-up relative mt-9 flex flex-col gap-3 sm:flex-row"
        style={{ animationDelay: '270ms' }}
      >
        <Button href="#projects">View Projects</Button>
        <Button href="#contact" variant="ghost">
          Get in Touch
        </Button>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="relative mt-16 animate-bounce text-fg-muted transition-colors hover:text-accent"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
