'use client';
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from 'react-zoom-pan-pinch';

function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  const btn =
    'flex size-7 items-center justify-center rounded-md border border-fd-border bg-fd-card text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground';
  return (
    <div className="absolute right-2 top-2 z-10 flex gap-1">
      <button type="button" aria-label="Zoom in" className={btn} onClick={() => zoomIn()}>+</button>
      <button type="button" aria-label="Zoom out" className={btn} onClick={() => zoomOut()}>−</button>
      <button type="button" aria-label="Reset" className={btn} onClick={() => resetTransform()}>⤢</button>
    </div>
  );
}

interface PanZoomProps {
  src: string;
  alt: string;
  height?: number;
}

export function PanZoom({ src, alt, height = 520 }: PanZoomProps) {
  return (
    <div
      className="relative my-6 overflow-hidden rounded-lg border border-fd-border bg-fd-card"
      style={{ height }}
    >
      <TransformWrapper
        initialScale={1}
        minScale={0.2}
        maxScale={8}
        centerOnInit
        wheel={{ step: 0.15 }}
        doubleClick={{ mode: 'reset' }}
      >
        <Controls />
        <TransformComponent
          wrapperStyle={{ width: '100%', height: '100%', cursor: 'grab' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} style={{ width: 800, maxWidth: 'none' }} />
        </TransformComponent>
      </TransformWrapper>
      <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-fd-card/80 px-1.5 py-0.5 text-xs text-fd-muted-foreground">
        Scroll to zoom · drag to pan · double-click to reset
      </span>
    </div>
  );
}
