import { Children, useState, type ReactNode } from 'react';

export interface ProjectSliderProps {
  /** One child per slide, usually ProjectCard elements. */
  children: ReactNode;
  /** Slide shown first. Default 0. */
  initialIndex?: number;
}

/**
 * Carousel of ProjectCards with large ← / → arrow buttons (wraps around).
 * At 768px+ one slide shows at a time; below that every slide stacks and
 * the arrows hide.
 */
export function ProjectSlider({ children, initialIndex = 0 }: ProjectSliderProps) {
  const slides = Children.toArray(children);
  const n = slides.length || 1;
  const [index, setIndex] = useState(((initialIndex % n) + n) % n);
  const go = (d: number) => setIndex((i) => (i + d + n) % n);
  return (
    <div className="slider">
      {slides.map((s, i) => (
        <div key={i} className={'slide' + (i === index ? ' active' : '')}>{s}</div>
      ))}
      <button id="prev" className="nav-button" type="button" aria-label="Previous project" onClick={() => go(-1)}>←</button>
      <button id="next" className="nav-button" type="button" aria-label="Next project" onClick={() => go(1)}>→</button>
    </div>
  );
}
