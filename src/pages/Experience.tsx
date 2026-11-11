import { asset } from '../asset';
import { Footer } from '../components/Footer';
import { JobCard } from '../components/JobCard';
import { usePageTitle } from '../components/Layout';
import { SectionHeading } from '../components/SectionHeading';
import { education, interests, jobs } from '../data/resume';

export function Experience() {
  usePageTitle('Experience & Education | Van Naranjo');

  return (
    <>
      <main id="main">
        <section className="container page-intro">
          <p className="eyebrow">Experience &amp; education</p>
          <h1>Where I've worked and studied</h1>
          <p className="lead">
            Nearly two years as a software developer co-op at LBMX, three years leading teams at Amazon Logistics, and a
            co-op program at Fanshawe College that I finish in December 2026.
          </p>
        </section>

        <section className="container timeline" aria-labelledby="work-title">
          <h2 className="label" id="work-title">Work experience</h2>
          {jobs.map((job) => (
            <JobCard key={job.company} job={job} />
          ))}
        </section>

        <section className="container timeline timeline--edu" aria-labelledby="edu-title">
          <h2 className="label" id="edu-title">Education</h2>
          <div className="edu-grid">
            {education.map((s) => (
              <article key={s.name} className="edu">
                <div className="logo-box logo-box--small">
                  <img src={asset(s.logo)} alt={s.logoAlt} />
                </div>
                <h3>{s.name}</h3>
                <strong>{s.program}</strong>
                <span className="dates">{s.dates}</span>
                <ul className="bullets">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="interests" aria-labelledby="interests-title">
          <div className="container">
            <SectionHeading id="interests-title">Outside of code</SectionHeading>
            <div className="interests__grid">
              {interests.map((i) => (
                <div key={i.title} className="interests__card">
                  <h3>{i.title}</h3>
                  <p>{i.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
