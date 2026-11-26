import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);

export const LinkedInIcon = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={2.2} stroke="currentColor" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const ExternalIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={2.2} stroke="currentColor" {...p}><path d="M7 17L17 7M9 7h8v8" /></svg>
);

export const ZoomIcon = (p: IconProps) => (
  <svg {...base} stroke="currentColor" {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5M11 8v6M8 11h6" /></svg>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={2.4} stroke="currentColor" {...p}><path d="M15 5l-7 7 7 7" /></svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={2.4} stroke="currentColor" {...p}><path d="M9 5l7 7-7 7" /></svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} stroke="currentColor" {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
