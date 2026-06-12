import type { Metadata } from 'next'

/**
 * Server-side layout that holds metadata for /articles.
 * The page itself is a client component (uses useState/useSearchParams)
 * and therefore cannot export metadata directly.
 *
 * This layout simply passes children through; no UI changes.
 */
export const metadata: Metadata = {
  title: '文章索引 | Kuro 的資安、雲端與技術文章',
  description:
    'Kuro 累積 100+ 篇資訊安全、雲端安全、CTF 滲透測試、網路管理、證照心得文章索引。涵蓋 CISSP、CCSP、AWS、CEH 等主題。',
  alternates: {
    canonical: 'https://kuronetwork.me/articles/',
  },
  openGraph: {
    title: '文章索引 | Kuro 的資安、雲端與技術文章',
    description:
      'Kuro 累積 100+ 篇資訊安全、雲端安全、CTF 滲透測試、網路管理、證照心得文章索引。',
    url: 'https://kuronetwork.me/articles/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '文章索引 | Kuro 的資安、雲端與技術文章',
    description:
      'Kuro 累積 100+ 篇資訊安全、雲端安全、CTF 滲透測試、網路管理、證照心得文章索引。',
  },
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
