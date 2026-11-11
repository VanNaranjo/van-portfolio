import type { Highlight } from '../data/resume';

export function Stat({ value, label, small }: Highlight & { small?: boolean }) {
  return (
    <div className={small ? 'stat stat--small' : 'stat'}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
