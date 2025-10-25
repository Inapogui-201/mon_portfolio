import '@/app/globals.css'
import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Michel Inapogui - Portfolio',
  description: 'Portfolio professionnel de Michel Inapogui, développeur passionné',
  openGraph: {
    title: 'Michel Inapogui - Portfolio',
    description: 'Portfolio professionnel de Michel Inapogui, développeur passionné',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://michelinapogui.com',
    siteName: 'Michel Inapogui',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${geist.variable} ${geistMono.variable} px-4 h-full font-mono text-md text-primary antialiased sm:px-8`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
