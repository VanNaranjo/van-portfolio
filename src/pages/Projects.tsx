import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { usePageTitle } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { projectFilters, projects } from '../data/resume';

type FilterId = (typeof projectFilters)[number]['id'];

export function Projects() {
  usePageTitle('Projects | Van Naranjo');
  const [filter, setFilter] = useState<FilterId>('personal');
  const shown = projects.filter((p) => p.tags.includes(filter));

  return (
    <>
      <main id="main">
        <section className="container page-intro">
          <p className="eyebrow">Projects</p>
          <h1>Things I've built</h1>
          <p className="lead">
            School and personal projects, from desktop apps in Java and C++ to databases and a full-stack C# web app. My
            professional work at LBMX is on the <Link to="/experience">Experience</Link> page.
          </p>
        </section>

        <div className="container filters" role="group" aria-label="Filter projects by category">
          {projectFilters.map((f) => (
            <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>

        <section className="container project-grid" aria-label="Project list">
          {shown.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </section>
      </main>
      <Footer title="Want to see the code?" text="Reach out and I'll walk you through any of these projects." />
    </>
  );
}
