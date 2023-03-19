import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Not sure if this is the best way to do this, but it works
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}
