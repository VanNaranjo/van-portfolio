import { useEffect, useRef, useState } from 'react';

export interface NavLink {
  /** Visible link text, e.g. "Projects". */
  label: string;
  href: string;
  /** Marks the current page: yellow text with a yellow underline. */
  active?: boolean;
}

export interface SiteHeaderProps {
  /** Site title, set in Holtwood One SC. Default "Van's Resume". */
  title?: string;
  /** Where the title links to. Default "index.html". */
  titleHref?: string;
  /** Navigation links, rendered left-to-right in the navy header bar. */
  links: NavLink[];
  /**
   * Condensed layout: title left, nav right, fixed to the top of the
   * viewport (tablet and wider). When omitted, the header switches to it
   * automatically once the page scrolls, like the live site.
   */
  condensed?: boolean;
}

/**
 * The navy (#2b364f) site header: centered Holtwood One SC title above a
 * bold Roboto nav. On tablet+ it collapses into a fixed single-row bar once
 * the page scrolls.
 */
export function SiteHeader({ title = "Van's Resume", titleHref = 'index.html', links, condensed }: SiteHeaderProps) {
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (condensed !== undefined) return;
    const top = ref.current?.getBoundingClientRect().top ?? 0;
    const onScroll = () => setScrolled(window.scrollY > top);
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [condensed]);
  const isCondensed = condensed ?? scrolled;
  return (
    <header id="header" ref={ref} className={isCondensed ? 'scrolled' : undefined}>
      <div className="header-container">
        <h1><a href={titleHref}>{title}</a></h1>
        <nav className="nav">
          <ul>
            {links.map((l) => (
              <li key={l.href + l.label}>
                <a href={l.href} className={l.active ? 'active' : undefined}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
