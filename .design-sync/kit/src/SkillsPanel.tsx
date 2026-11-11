import type { ReactNode } from 'react';
import { SkillBar } from './SkillBar';

export interface SkillsPanelProps {
  /** Uppercase centered heading. Default "Programming Languages". */
  title?: string;
  /** Rows to render as SkillBars. Ignored when children are given. */
  skills?: { name: string; percent: number }[];
  /** Custom content (e.g. SkillBar elements) instead of `skills`. */
  children?: ReactNode;
}

/**
 * Full-width navy (#2b364f) band holding a heading and a stack of SkillBars,
 * centered at 80% width on desktop.
 */
export function SkillsPanel({ title = 'Programming Languages', skills = [], children }: SkillsPanelProps) {
  return (
    <div className="prog-skills">
      <div className="prog-skills-container">
        <h4>{title}</h4>
        {children ?? skills.map((s) => <SkillBar key={s.name} name={s.name} percent={s.percent} />)}
      </div>
    </div>
  );
}
