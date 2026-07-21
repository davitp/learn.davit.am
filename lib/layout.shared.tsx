import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Wordmark } from '@/components/wordmark';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Wordmark className="text-base" />,
    },
    themeSwitch: { enabled: true },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
