import type { ReactNode } from 'react';
import { shell, shellPath } from '@/lib/shared';

export function Prompt({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="text-emerald-400">{`${shell.user}@${shell.host}`}</span>
      <span className="text-zinc-500">:</span>
      <span className="text-sky-400">{shellPath}</span>
      <span className="text-zinc-500">$ </span>
      {children}
    </div>
  );
}
