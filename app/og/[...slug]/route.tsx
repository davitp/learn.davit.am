import { source } from '@/lib/source';
import { courses } from '@/lib/shared';
import { renderOgImage } from '@/lib/og';

export const dynamic = 'force-static';
export const dynamicParams = false;

const HOME_SLUG = 'home';
const HOME_TITLE = 'Learn in public';
const HOME_DESCRIPTION = 'University course notes, worked code samples, and step-by-step guides.';

export function generateStaticParams() {
  return [
    { slug: [HOME_SLUG, 'image.png'] },
    ...source
      .generateParams()
      .map(({ slug }) => ({ slug: [...slug, 'image.png'] })),
  ];
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const pageSlug = slug.slice(0, -1); 

  if (pageSlug.length === 1 && pageSlug[0] === HOME_SLUG) {
    return renderOgImage({ title: HOME_TITLE, description: HOME_DESCRIPTION });
  }

  const page = source.getPage(pageSlug);
  if (!page) {
    return new Response('Not found', { status: 404 });
  }

  const eyebrow = courses.find((c) => c.slug === pageSlug[0])?.title;

  return renderOgImage({
    eyebrow,
    title: page.data.title,
    description: page.data.description,
  });
}
