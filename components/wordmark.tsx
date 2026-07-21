import { cn } from '@/lib/cn';
import { shell } from '@/lib/shared';

// The site wordmark: a terminal-style `~/learn` lockup. Shared by the navbar
// and the landing hero so they stay identical. Size via `className`.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('font-mono tracking-tight', className)}>
      <span className="text-fd-muted-foreground">{`${shell.home}/`}</span>
      <span className="font-semibold text-fd-foreground">{shell.dir}</span>
    </span>
  );
}
