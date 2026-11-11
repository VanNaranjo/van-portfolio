export interface ToolListProps {
  /** Uppercase centered heading. Default "Tools". */
  title?: string;
  /** One line per tool; each gets a check icon. */
  items: string[];
}

/**
 * Slate (#474c57) panel listing tools, each line prefixed with a Font
 * Awesome check icon. Pair with HighlightList inside ExtraSkills, where it
 * takes ~30% width on desktop.
 */
export function ToolList({ title = 'Tools', items }: ToolListProps) {
  return (
    <div className="tech-skills skills">
      <h4>{title}</h4>
      {items.map((t) => (
        <p className="tech-skill" key={t}><i className="fa-solid fa-check" aria-hidden="true"></i>{t}</p>
      ))}
    </div>
  );
}
