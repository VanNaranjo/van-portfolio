import type { ReactNode } from 'react';

export interface ProjectCardProps {
  /** Uppercase centered title, e.g. "JAVA: Loan Calculator". */
  title: string;
  /** Screenshot; shown full width, object-fit contain, 300/500/600px tall by breakpoint. */
  imageSrc: string;
  imageAlt?: string;
  /** Description bullets. */
  bullets: ReactNode[];
  /** Optional link appended as a bold final bullet. */
  link?: { href: string; label?: string };
}

/**
 * A portfolio project: centered uppercase title, large screenshot, then
 * description bullets. Use alone or as a ProjectSlider slide.
 */
export function ProjectCard({ title, imageSrc, imageAlt = '', bullets, link }: ProjectCardProps) {
  return (
    <section className="project">
      <h3>{title}</h3>
      <img src={imageSrc} alt={imageAlt} />
      <ul>
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
        {link && <li><a href={link.href}><strong>{link.label ?? 'Link to the project...'}</strong></a></li>}
      </ul>
    </section>
  );
}
