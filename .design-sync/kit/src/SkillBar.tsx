export interface SkillBarProps {
  /** Skill name, e.g. "Java". */
  name: string;
  /** Proficiency 0-100; sets the yellow fill width and the % label. */
  percent: number;
}

/**
 * One proficiency row: the skill name and a thin yellow progress bar inside
 * a rounded gold (#cdbd8e) outline, with the percentage floating above the
 * end of the fill. Name sits beside the bar at 992px+, above it below that.
 * Use inside SkillsPanel.
 */
export function SkillBar({ name, percent }: SkillBarProps) {
  const p = Math.max(0, Math.min(100, percent));
  return (
    <div className="skill">
      <div className="skill-name">{name}</div>
      <div className="bar">
        <div className="inner" style={{ width: `${p}%` }}><span>{p}%</span></div>
      </div>
    </div>
  );
}
