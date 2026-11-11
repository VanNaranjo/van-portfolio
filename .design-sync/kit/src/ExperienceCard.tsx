import type { ReactNode } from 'react';

export interface ExperienceCardProps {
  /** Logo of the school / employer. */
  logoSrc: string;
  logoAlt?: string;
  /** Uppercase heading with a short rule underneath. */
  title: string;
  /** Bullet lines. Use <b>Label:</b> text for bold leads. */
  items: ReactNode[];
}

/**
 * Education / work entry: logo beside an uppercase title and a list of
 * achievements. At 992px+ it becomes a 35% / 62% two-column grid with deep
 * vertical padding. Render several as siblings: every 2nd card swaps to a
 * slate (#474c57) background with the logo on the right.
 */
export function ExperienceCard({ logoSrc, logoAlt = '', title, items }: ExperienceCardProps) {
  return (
    <div className="about-container">
      <div className="about-info">
        <img className="about-img" src={logoSrc} alt={logoAlt} />
        <h3 className="about-title">{title}<hr /></h3>
        <ul className="about-text">
          {items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      </div>
    </div>
  );
}
