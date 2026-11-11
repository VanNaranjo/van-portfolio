import { SiteHeader } from 'van-portfolio-ds';

const links = (active: string) =>
  [
    { label: 'Home', href: 'index.html' },
    { label: 'About Me', href: 'about.html' },
    { label: 'Projects', href: 'projects.html' },
  ].map((l) => ({ ...l, active: l.label === active }));

export const HomeActive = () => <SiteHeader links={links('Home')} condensed={false} />;

export const ProjectsActive = () => <SiteHeader links={links('Projects')} condensed={false} />;

