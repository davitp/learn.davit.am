import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { AutoIndex } from '@/components/auto-index';
import { CourseJsonLd } from '@/components/structured-data';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/[...slug]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <CourseJsonLd url={page.url} description={page.data.description} />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
            AutoIndex: () => <AutoIndex url={page.url} />,
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

// Fully static: only the paths from generateStaticParams exist; any other path
// falls through to the 404. Required for the catch-all under `output: export`.
export const dynamicParams = false;

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/[...slug]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const url = `${page.url}/`;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: page.data.title,
      description: page.data.description,
    },
    twitter: {
      card: 'summary',
      title: page.data.title,
      description: page.data.description,
    },
  };
}
