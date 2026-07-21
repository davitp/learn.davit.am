import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Provider } from '@/components/provider';
import { appName, siteUrl, gaId } from '@/lib/shared';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

const description =
  'Learning materials and university course notes by Davit Petrosyan.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: appName,
    template: `%s @ ${appName}`,
  },
  description,
  applicationName: appName,
  openGraph: {
    type: 'website',
    siteName: appName,
    locale: 'en_US',
    url: '/',
    title: appName,
    description,
  },
  twitter: {
    card: 'summary',
    title: appName,
    description,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
