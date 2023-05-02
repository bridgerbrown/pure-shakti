import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Cormorant, Cinzel } from 'next/font/google'
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

const cormorant = Cormorant({ subsets: ['latin'],
  variable: '--font-cormorant', })

const cinzel = Cinzel({ subsets: ['latin'],
  variable: '--font-cinzel', })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${svarga.variable} ${cormorant.variable} ${cinzel.variable} font-serif`}>
      <Component {...pageProps} />
    </main>
  )
}
