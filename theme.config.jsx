import { useConfig } from 'nextra-theme-docs'
import siteConfig from './site.config'
import Image from 'next/image'
import Footer from 'components/landing/footer'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase: 'https://github.com/davitp/learn.davit.am/tree/main',
  feedback:{
    content: null
  },
  editLink: {
    content: 'Make suggestion on GitHub'
  },
  faviconGlyph: '✦',
  sidebar: {
    autoCollapse: false,
    defaultMenuCollapseLevel: 2
  },
  logo: () => {
    return (
      <span className="flex items-center text-bold hover:opacity-75 ltr:mr-auto rtl:ml-auto">
          <Image src="/logo/favicon-32x32.png" width={32} height={32} className="mr-2" />
          Learning Portal
      </span>
    )},
    head: function useHead() {
    const config = useConfig()
    const title = `${config.title} - Learning Portal`
    const description =
      config.frontMatter.description || 'Learning Portal by Davit Petrosyan'
    const og = config.frontMatter.image || `/images/default-og.png`
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={config.title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={og} />
        <meta name="og:image:secure" content={og} />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="Learn with " />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.website} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/logo/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo/favicon-16x16.png"
        />
      </>
    )
  },
  footer: {
    component: () => <Footer />
  },
}