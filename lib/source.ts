import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { docsRoute } from './shared';

// See https://fumadocs.dev/docs/headless/source-api for more info.
// baseUrl '/' means content/docs/<course>/<...> maps to /<course>/<...>.
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
});
