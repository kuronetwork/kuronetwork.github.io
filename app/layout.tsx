import type { Metadata } from 'next'
import { Instrument_Serif, Noto_Sans_TC, Syne, Fira_Code } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
  preload: false,
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-ui',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kuronetwork.me'),
  title: 'Kuro - 資安工作者的學習手記',
  description: 'Cyber Security Consultant | Medium Blogger - 分享資安、網路、證照與技術文章',
  keywords: '資安, cybersecurity, network, 證照, CISSP, CCSP, CISA',
  openGraph: {
    title: 'Kuro - 資安工作者的學習手記',
    description: 'Cyber Security Consultant | Medium Blogger - 分享資安、網路、證照與技術文章',
    url: 'https://kuronetwork.me',
    siteName: 'Kuro Network',
    locale: 'zh_TW',
    type: 'website',
    images: [{ url: '/images/avatar.jpg', width: 800, height: 800, alt: 'Kuro' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuro - 資安工作者的學習手記',
    description: 'Cyber Security Consultant | Medium Blogger - 分享資安、網路、證照與技術文章',
    creator: '@catkuroH',
    images: ['/images/avatar.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${instrumentSerif.variable} ${notoSansTC.variable} ${syne.variable} ${firaCode.variable} font-body bg-cream text-ink`}
      >
        <ScrollRevealInit />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
