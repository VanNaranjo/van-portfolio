import { Link } from 'react-router-dom';
import { asset } from '../asset';
import { Chips } from '../components/Chips';
import { Footer } from '../components/Footer';
import { ArrowRightIcon } from '../components/Icons';
import { usePageTitle } from '../components/Layout';
import { SectionHeading } from '../components/SectionHeading';
import { Stat } from '../components/Stat';
import { VantaBackground } from '../components/VantaBackground';
import { highlights, intro, projects, skillGroups, workStyle } from '../data/resume';

const toneClass = { navy: '', slate: ' skill-group--slate', charcoal: ' skill-group--charcoal' };

export function Home() {
  usePageTitle('Van Naranjo | Software Developer');
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <main id="main">
        <section className="hero">
          <VantaBackground />
          <div className="container">
            <div className="hero__text">
              <p className="eyebrow">{intro.eyebrow}</p>
              <h1>
                Hello, I am <span>Van Naranjo</span>
              </h1>
              <p className="lead">{intro.lead}</p>
              <div className="hero__actions">
                <Link className="btn btn--primary" to="/projects">
                  View my projects <ArrowRightIcon />
                </Link>
                <Link className="btn btn--outline" to="/experience">
                  Experience &amp; education
                </Link>
              </div>
            </div>
            <div className="hero__photo">
              <div className="hero__frame">
                <img src={asset('images/VanPic.png')} alt="Portrait of Van Naranjo" />
              </div>
            </div>
          </div>
        </section>

        <section className="highlights" aria-label="Highlights">
          <div className="container">
            {highlights.map((h) => (
              <Stat key={h.label} {...h} />
            ))}
          </div>
        </section>

        <section className="container skills-section" aria-labelledby="skills-title">
          <SectionHeading id="skills-title">Skills</SectionHeading>
          <div className="skill-groups">
            {skillGroups.map((g) => (
              <div key={g.title} className={'skill-group' + toneClass[g.tone]}>
                <h3 className="panel-title">{g.title}</h3>
                <Chips items={g.items} />
              </div>
            ))}
          </div>
          <div className="how-i-work">
            <h3 className="panel-title">How I work</h3>
            <div className="how-i-work__grid">
              {workStyle.map((w) => (
                <div key={w.title} className="how-i-work__item">
                  <strong>{w.title}</strong>
                  <span>{w.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container featured" aria-labelledby="featured-title">
          <div className="featured__head">
            <SectionHeading id="featured-title">Featured projects</SectionHeading>
            <Link to="/projects">All {projects.length} projects →</Link>
          </div>
          <div className="featured__grid">
            {featured.map((p) => (
              <Link key={p.id} className="mini-card" to="/projects">
                <div className="shot">
                  <img src={asset(p.image)} alt={p.imageAlt} />
                </div>
                <div className="mini-card__body">
                  <span className="tag">{p.tagLine}</span>
                  <strong>{p.title}</strong>
                  <span>{p.summary}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
