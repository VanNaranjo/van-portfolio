import { asset } from '../asset';
import type { Job } from '../data/resume';
import { Chips } from './Chips';
import { Stat } from './Stat';

export function JobCard({ job }: { job: Job }) {
  return (
    <article className={job.tone === 'charcoal' ? 'job job--charcoal' : 'job'}>
      <div className="job__row">
        <div className="logo-box logo-box--side">
          <img src={asset(job.logo)} alt={job.logoAlt} />
        </div>
        <div className="job__body">
          <div className="job__head">
            <h3>
              {job.title} — {job.company}
            </h3>
            <span className="pill">
              {job.dates} · {job.location}
            </span>
          </div>
          <div className="rule" />
          {job.stack && <Chips items={job.stack} />}
          {job.stats && (
            <div className="stats">
              {job.stats.map((s) => (
                <Stat key={s.label} {...s} small />
              ))}
            </div>
          )}
          <ul className="bullets">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
