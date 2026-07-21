import type { Metadata } from 'next';
import { Wordmark } from '@/components/wordmark';
import { TerminalWindow } from '@/components/terminal';
import { NotFoundConsole } from '@/components/not-found-console';

export const metadata: Metadata = { title: '404' };

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:py-24">
      <Wordmark className="text-4xl sm:text-5xl" />
      <p className="mt-5 text-lg text-fd-muted-foreground">
        <span className="font-semibold text-fd-foreground">404 </span> — this page
        doesn&apos;t exist.
      </p>

      <div className="mt-8">
        <TerminalWindow>
          <NotFoundConsole />
        </TerminalWindow>
      </div>
    </main>
  );
}
