import { useEffect, useRef } from 'react';

/**
 * Animated network background (Vanta.js). three.js and Vanta are loaded on demand
 * so they don't block the first paint, and skipped entirely for reduced motion.
 */
export function VantaBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let effect: { destroy(): void } | undefined;
    let cancelled = false;

    Promise.all([import('three'), import('vanta/dist/vanta.net.min')]).then(([THREE, { default: NET }]) => {
      if (cancelled || !ref.current) return;
      effect = NET({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0xf5efeb,
        backgroundColor: 0x1a1b1e,
        maxDistance: 40,
        spacing: 30,
      });
    });

    return () => {
      cancelled = true;
      effect?.destroy();
    };
  }, []);

  return <div ref={ref} className="hero__bg" aria-hidden="true" />;
}
