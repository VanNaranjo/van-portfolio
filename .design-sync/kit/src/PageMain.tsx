import type { CSSProperties, ReactNode } from 'react';

export interface PageMainProps {
  /** Page content: skill panels, experience cards, projects, ContactBar... */
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * The page's <main> element. The site stylesheet sets Roboto (and the 1rem
 * base size) on `main`, not on `body` - content rendered outside PageMain
 * falls back to the browser's serif font. Wrap every page body in it;
 * SiteHeader and HeroBanner may sit above it, as on the live site.
 */
export function PageMain({ children, className, style }: PageMainProps) {
  return <main className={className} style={style}>{children}</main>;
}
