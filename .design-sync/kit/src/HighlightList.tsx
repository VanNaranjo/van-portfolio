export interface HighlightListProps {
  /** Uppercase centered heading. Default "Extra skills". */
  title?: string;
  /** Each item renders as "<b>label:</b> text". */
  items: { label: string; text: string }[];
}

/**
 * Charcoal (#2c2d31) panel of bold-lead paragraphs ("Label: description").
 * Pair with ToolList inside ExtraSkills, where it takes ~65% width on desktop.
 */
export function HighlightList({ title = 'Extra skills', items }: HighlightListProps) {
  return (
    <div className="soft-skills skills">
      <h4>{title}</h4>
      <ul>
        {items.map((i) => <li key={i.label}><b>{i.label}:</b> {i.text}</li>)}
      </ul>
    </div>
  );
}
