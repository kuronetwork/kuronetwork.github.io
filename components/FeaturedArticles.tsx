'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { articles } from '@/data/articles'
import ArticleCard from '@/components/ArticleCard'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FeaturedArticles() {
  const [picks, setPicks] = useState(articles.slice(0, 6))

  useEffect(() => {
    setPicks(shuffle(articles).slice(0, 6))
  }, [])

  return (
    <section className="pb-20 scroll-reveal">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title font-ui text-sm font-bold tracking-widest uppercase">
          FEATURED ARTICLES
        </h2>
        <Link
          href="/articles"
          className="font-ui text-sm text-warm-gray hover:text-red transition-colors flex items-center gap-1 group"
        >
          所有文章
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {picks.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
