import { appName, siteUrl, author, courses } from '@/lib/shared';

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            name: appName,
            url: siteUrl,
            description:
              'Learning materials and university course notes by Davit Petrosyan.',
          },
          { '@type': 'Person', name: author.name, url: author.url },
        ],
      }}
    />
  );
}

export function CourseJsonLd({
  url,
  description,
}: {
  url: string;
  description?: string;
}) {
  const course = courses.find((c) => `/${c.slug}` === url);
  if (!course) return null;

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: course.title,
        description: description ?? course.description,
        url: `${siteUrl}${url}/`,
        provider: { '@type': 'Person', name: author.name, url: author.url },
      }}
    />
  );
}
