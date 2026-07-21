import type { ReactNode } from 'react';
import { shellPath } from '@/lib/shared';

export function TerminalWindow({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-black/10 bg-zinc-900 shadow-sm dark:border-white/10">
      <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-800/70 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-red-400/90" />
          <span className="size-3 rounded-full bg-yellow-400/90" />
          <span className="size-3 rounded-full bg-green-400/90" />
        </span>
        <span className="ml-1 font-mono text-xs text-zinc-400">{shellPath}</span>
      </div>
      <div className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-zinc-100">
        {children}
      </div>
    </div>
  );
}
