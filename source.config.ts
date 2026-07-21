import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

// Content collections. Each collection lives under content/docs/<collection>/ and is
// marked as a root folder (see the collection's meta.json), so collections render as
// separate navbar tabs with their own sidebar.
// See https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
  },
});
