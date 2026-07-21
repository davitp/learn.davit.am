import type { Metadata } from 'next';
import { FullSearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import { SiteJsonLd } from '@/components/structured-data';
import { Wordmark } from '@/components/wordmark';
import { Collections } from '@/components/collections';
import { SiteFooter } from '@/components/site-footer';

const description =
  'Course notes, worked code samples, guides and assorted learnings by Davit Petrosyan — a place to learn systems and software by doing.';

export const metadata: Metadata = {
  description,
  alternates: { canonical: '/' },
  openGraph: { url: '/', description },
  twitter: { description },
};

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:py-24">
      <SiteJsonLd />

      {/* Hero */}
      <Wordmark className="text-4xl sm:text-5xl" />
      <p className="mt-5 max-w-2xl text-lg text-fd-muted-foreground">
        A personal space for learning in public — university course notes, worked code
        samples, step-by-step guides, and the assorted things I pick up along the way.
      </p>

      {/* Search */}
      <p className="mt-8 text-sm text-fd-muted-foreground">
        Search for something specific, or browse the collections below.
      </p>
      <FullSearchTrigger className="mt-3 w-full" />

      <Collections />
      <SiteFooter />
    </main>
  );
}
