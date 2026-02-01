/* eslint-env node */
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import '../global.css'
import Footer from '@/components/landing/footer'
import siteConfig from '@/site-config'
import Image from 'next/image'
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata = async () => {
    return {
        metadataBase: new URL(siteConfig.website),
        title: {
            template: `%s - ${siteConfig.name}`
        },
        applicationName: siteConfig.name,
        generator: siteConfig.name,
        appleWebApp: {
            title: siteConfig.name
        },
        twitter: {
            site: siteConfig.website
        }
    }
}

export default async function RootLayout({ children }) {
    const navbar = (
        <Navbar
            logo={
                <span className="flex items-center text-bold hover:opacity-75 ltr:mr-auto rtl:ml-auto">
                    <Image src="/logo/favicon-32x32.png" alt="Learning Portal" priority={true} width={32} height={32} className="mr-2" />
                    {siteConfig.name}
                </span>
            }
        />
    )
    const pageMap = await getPageMap()
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <Head faviconGlyph="✦" />
            <GoogleAnalytics gaId="G-11WJEP8KLR" />
            <body suppressHydrationWarning>
                <Layout
                    navbar={navbar}
                    footer={<Footer />}
                    editLink="Make suggestion on GitHub"
                    docsRepositoryBase={`${siteConfig.github}tree/main`}
                    sidebar={{
                        autoCollapse: false,
                        defaultMenuCollapseLevel: 2
                    }}
                    pageMap={pageMap}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}