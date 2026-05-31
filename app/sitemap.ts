import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/schema'

// Required by Next.js 15 when `output: 'export'` is configured.
// Without this, the static export fails with a "force-static" error.
export const dynamic = 'force-static'

/**
 * Static sitemap for Kuro Network.
 *
 * URLs use trailing slashes to match `trailingSlash: true` in next.config.js,
 * otherwise Google reports redirect chains in Search Console.
 *
 * Build output: out/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/articles/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
