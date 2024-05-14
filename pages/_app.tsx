import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { GoogleAnalytics } from "@next/third-parties/google"
import '../global.css'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-11WJEP8KLR" />
    </>
  )
}