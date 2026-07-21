import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';
import { GitHubIcon, LinkedInIcon, GlobeIcon } from '@/components/icons';
import { author, gitConfig, domain } from '@/lib/shared';

// Landing footer: social icons (left), centered copyright, theme switch (right).
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 grid grid-cols-1 items-center gap-4 border-t border-fd-border pt-6 text-sm text-fd-muted-foreground sm:grid-cols-[auto_1fr_auto]">
      <div className="flex items-center justify-center gap-3 sm:justify-start">
        <a
          aria-label="GitHub"
          className="transition-colors hover:text-fd-foreground"
          href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
        >
          <GitHubIcon />
        </a>
        <a
          aria-label="LinkedIn"
          className="transition-colors hover:text-fd-foreground"
          href={author.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          aria-label={domain}
          className="transition-colors hover:text-fd-foreground"
          href={author.url}
        >
          <GlobeIcon />
        </a>
      </div>
      <span className="whitespace-nowrap text-center text-xs">
        © {year} {author.name}. All rights reserved.
      </span>
      <div className="flex justify-center sm:justify-end">
        <ThemeSwitch />
      </div>
    </footer>
  );
}
