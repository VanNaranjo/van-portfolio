import { useRef } from 'react';
import { asset } from '../asset';
import type { Project } from '../data/resume';
import { ExternalIcon, ZoomIcon } from './Icons';
import { ProjectViewer } from './ProjectViewer';

export function ProjectCard({ project }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const src = asset(project.image);

  return (
    <article className="project-card project-card--clickable">
      <div className="shot shot--tall">
        <img src={src} alt={project.imageAlt} />
        <span className="shot__hint" aria-hidden="true">
          <ZoomIcon />
        </span>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="tag">{project.tagLine}</span>
          {project.inDevelopment && <span className="badge">IN DEVELOPMENT</span>}
        </div>
        <h2>{project.title}</h2>
        <ul className="bullets">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {project.link && (
          <a className="btn btn--primary project-card__link" href={project.link} target="_blank" rel="noopener noreferrer">
            Open live project <ExternalIcon />
          </a>
        )}
      </div>
      <button
        type="button"
        className="project-card__open"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Open ${project.title} full screen`}
      />
      <ProjectViewer project={project} dialogRef={dialogRef} />
    </article>
  );
}
