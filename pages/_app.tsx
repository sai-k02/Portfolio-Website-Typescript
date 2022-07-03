import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
