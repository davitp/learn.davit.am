'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Prompt } from '@/components/prompt';

// The 404 terminal body: shows the failed `cat <path>`, then a final prompt
// with `cd ~` pre-typed — click it (or press Enter) to head home. The path is
// read on the client so it works from the static GH Pages 404.html.
export function NotFoundConsole() {
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath(window.location.pathname);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') router.push('/');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  return (
    <>
      <Prompt>cat {path || '.'}</Prompt>
      <div className="mt-1 text-red-400">
        cat: {path || 'that page'}: No such file or directory
      </div>

      <div className="mt-3 text-zinc-500"># nothing here — head back home:</div>
      <Prompt className="mt-1">
        <Link
          href="/"
          className="text-sky-400 underline-offset-4 hover:underline"
        >
          cd ~
        </Link>
        <span
          className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-zinc-300 align-middle"
          aria-hidden="true"
        />
        <span className="ml-3 text-xs text-zinc-600">press Enter ↵</span>
      </Prompt>
    </>
  );
}
