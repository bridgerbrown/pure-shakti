import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import localFont from 'next/font/local'

const svarga = localFont({
  src: [
    {
      path: '../public/fonts/Svarga.otf',
      weight: 'normal',
    }
  ],
  variable: '--font-svarga',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${svarga.variable} font-serif`}>
      <Component {...pageProps} />
    </main>
  )
}
