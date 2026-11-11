import { asset } from '../asset';
import type { Project } from '../data/resume';
import { ExternalIcon } from './Icons';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="shot shot--tall">
        <img src={asset(project.image)} alt={project.imageAlt} />
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
          <a className="btn btn--primary" href={project.link} target="_blank" rel="noopener noreferrer">
            Open live project <ExternalIcon />
          </a>
        )}
      </div>
    </article>
  );
}
