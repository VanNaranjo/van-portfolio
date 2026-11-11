export function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{children}</h2>
    </div>
  );
}
