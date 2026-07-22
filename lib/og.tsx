import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { shell, siteUrl } from '@/lib/shared';

// Shared renderer for the site's Open Graph images. Because the site is a static
// export, these are invoked from `opengraph-image.tsx` file-convention routes and
// pre-rendered to PNG at build time — never at runtime.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

// Neutral palette, matching the Fumadocs "neutral" theme (light mode).
const BG = 'hsl(0, 0%, 96%)';
const FG = 'hsl(0, 0%, 9%)';
const MUTED = 'hsl(0, 0%, 45%)';
const RULE = 'hsl(0, 0%, 78%)';

// next/og needs raw font bytes; it cannot reuse the `next/font` Inter import.
// Everything uses Inter (the site's body font).
const readFont = (file: string) =>
  readFileSync(join(process.cwd(), 'assets/fonts', file));
const interRegular = readFont('Inter-Regular.woff');
const interBold = readFont('Inter-Bold.woff');

const domain = siteUrl.replace(/^https?:\/\//, '');

// satori's `-webkit-line-clamp` is unreliable, so hard-cap the description at a
// word boundary to guarantee it never overflows the card.
function truncate(text: string, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}

// Shrink the title for longer strings so it always fits the card.
function titleFontSize(title: string) {
  const n = title.length;
  if (n <= 18) return 88;
  if (n <= 32) return 72;
  if (n <= 52) return 58;
  return 46;
}

export function renderOgImage({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: BG,
          color: FG,
          padding: '80px',
          fontFamily: 'Inter',
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            display: 'flex',
            fontSize: 36,
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: MUTED }}>{`${shell.home}/`}</span>
          <span style={{ color: FG, fontWeight: 700 }}>{shell.dir}</span>
        </div>

        {/* Title block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          {eyebrow ? (
            <div style={{ display: 'flex', fontSize: 30, color: MUTED }}>
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              // Clamp very long titles to 3 lines (satori supports line-clamp).
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              marginTop: eyebrow ? 16 : 0,
              fontSize: titleFontSize(title),
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              width: 72,
              height: 5,
              marginTop: 28,
              backgroundColor: RULE,
            }}
          />
          {description ? (
            <div
              style={{
                marginTop: 28,
                fontSize: 30,
                lineHeight: 1.4,
                color: MUTED,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {truncate(description)}
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: 26,
            color: MUTED,
          }}
        >
          {domain}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
      ],
    },
  );
}
