import type { ReactNode } from 'react';

export interface ExtraSkillsProps {
  /** Usually a ToolList followed by a HighlightList. */
  children: ReactNode;
}

/**
 * Layout row for the secondary skill panels: stacks on mobile, side by side
 * (ToolList 30% / HighlightList 65%) at 992px+.
 */
export function ExtraSkills({ children }: ExtraSkillsProps) {
  return (
    <div className="extra-skills">
      <div className="extra-skills-container">{children}</div>
    </div>
  );
}
