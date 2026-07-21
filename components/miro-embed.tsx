import { slidesBoard } from '@/lib/shared';
interface MiroEmbedProps {
  widget: string;
  board?: string;
  title?: string;
}

export function MiroEmbed({
  widget,
  board = slidesBoard,
  title = 'Miro',
}: MiroEmbedProps) {
  const src = `https://miro.com/app/live-embed/${board}/?focusWidget=${widget}&embedMode=view_only_without_ui`;
  return (
    <div
      className="relative my-6 w-full overflow-hidden rounded-lg border border-fd-border"
      style={{ paddingBottom: '56.25%' }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
