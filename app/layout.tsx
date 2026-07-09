import type { Metadata } from 'next'
import { Instrument_Serif, Noto_Sans_TC, Syne, Fira_Code } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'
import { websiteSchema, personSchema } from '@/lib/schema'

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
  title: {
    default: '資安工作者的學習手記',
    template: '%s | Kuro Network',
  },
  description:
    'CISSP、CCSP 持證資安顧問 Kuro 的個人網站，分享資安治理、雲端安全、滲透測試與 40+ 張國際認證準備心得。',
  keywords: '資安, cybersecurity, network, 證照, CISSP, CCSP, CISA, AWS, 雲端安全',
  authors: [{ name: 'Kuro', url: 'https://kuronetwork.me' }],
  creator: 'Kuro',
  publisher: 'Kuro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: '資安工作者的學習手記',
    description:
      'CISSP、CCSP 持證資安顧問 Kuro 的個人網站，分享資安治理、雲端安全、滲透測試與 40+ 張國際認證準備心得。',
    url: 'https://kuronetwork.me',
    siteName: 'Kuro Network',
    locale: 'zh_TW',
    type: 'website',
    images: [{ url: '/images/avatar.jpg', width: 800, height: 800, alt: 'Kuro' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '資安工作者的學習手記',
    description:
      'CISSP、CCSP 持證資安顧問 Kuro 的個人網站，分享資安治理、雲端安全、滲透測試與 40+ 張國際認證準備心得。',
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
        {/* Progressive enhancement: scroll-reveal sections start hidden and are
            revealed by IntersectionObserver. Without JS, force them visible so
            FeaturedArticles / Projects are never blank. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '.scroll-reveal{opacity:1!important;transform:none!important}',
            }}
          />
        </noscript>
        <script
          type="application/ld+json"
          // JSON-LD payload is built from constants in lib/schema.ts; no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
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
