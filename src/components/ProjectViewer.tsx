import { useLayoutEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type RefObject } from 'react';
import { asset } from '../asset';
import type { MediaItem, Project } from '../data/resume';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons';

interface Zoom {
  width: number;
  fx: number;
  fy: number;
}

interface Props {
  project: Project;
  dialogRef: RefObject<HTMLDialogElement>;
}

export function ProjectViewer({ project, dialogRef }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<Zoom | null>(null);
  const [index, setIndex] = useState(0);

  const items: MediaItem[] = project.gallery?.length
    ? project.gallery
    : [{ src: project.image, alt: project.imageAlt }];
  const item = items[index];
  const isVideo = item.kind === 'video';
  const multiple = items.length > 1;

  const close = () => dialogRef.current?.close();
  const closeOnBackdrop = (e: MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  const go = (step: number) => {
    setZoom(null);
    setIndex((i) => (i + step + items.length) % items.length);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (!multiple) return;
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  const toggleZoom = (e: MouseEvent<HTMLImageElement>) => {
    if (zoom) {
      setZoom(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setZoom({
      width: rect.width * 2.5,
      fx: (e.clientX - rect.left) / rect.width,
      fy: (e.clientY - rect.top) / rect.height,
    });
  };

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const img = frame?.querySelector('img');
    if (!frame || !img || !zoom) return;
    frame.scrollLeft = img.offsetLeft + zoom.fx * img.offsetWidth - frame.clientWidth / 2;
    frame.scrollTop = img.offsetTop + zoom.fy * img.offsetHeight - frame.clientHeight / 2;
  }, [zoom]);

  const onClose = () => {
    setZoom(null);
    setIndex(0);
    frameRef.current?.querySelector('video')?.pause();
  };

  const hint = isVideo
    ? 'Esc to close'
    : `${zoom ? 'Click to zoom out' : 'Click the image to zoom in'} · Esc to close`;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={project.title}
      onClick={closeOnBackdrop}
      onClose={onClose}
      onKeyDown={onKeyDown}
    >
      <button type="button" className="lightbox__close" onClick={close} aria-label="Close">
        <CloseIcon />
      </button>
      <p className="lightbox__hint">
        {multiple && `${index + 1} / ${items.length} · ← → to browse · `}
        {hint}
      </p>
      <div ref={frameRef} className={`lightbox__frame${zoom ? ' is-zoomed' : ''}`} onClick={closeOnBackdrop}>
        {isVideo ? (
          <video key={item.src} src={asset(item.src)} aria-label={item.alt} controls playsInline />
        ) : (
          <img src={asset(item.src)} alt={item.alt} onClick={toggleZoom} style={zoom ? { width: zoom.width } : undefined} />
        )}
      </div>
      {item.caption && <p className="lightbox__caption">{item.caption}</p>}
      {multiple && (
        <>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label="Previous">
            <ChevronLeftIcon />
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label="Next">
            <ChevronRightIcon />
          </button>
        </>
      )}
    </dialog>
  );
}
