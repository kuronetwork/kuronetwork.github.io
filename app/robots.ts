import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/schema'

// Required by Next.js 15 when `output: 'export'` is configured.
export const dynamic = 'force-static'

/**
 * robots.txt generator.
 *
 * Allows all crawlers, with explicit Allow rules for major AI crawlers
 * (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) so this site can be
 * cited by AI assistants.
 *
 * Build output: out/robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
