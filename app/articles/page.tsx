'use client'

import { useState, useMemo, Suspense, useEffect } from 'react'
import { articles, categories } from '@/data/articles'
import { useSearchParams } from 'next/navigation'

function ArticlesContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || '全部')

  useEffect(() => {
    setSelectedCategory(categoryParam || '全部')
  }, [categoryParam])

  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === '全部' || article.category === selectedCategory
        return matchesSearch && matchesCategory
      })
      .sort((a, b) => b.id - a.id)
  }, [searchTerm, selectedCategory])

  const groupedArticles = useMemo(() => {
    const groups: { [key: string]: typeof articles } = {}
    filteredArticles.forEach((article) => {
      if (!groups[article.category]) groups[article.category] = []
      groups[article.category].push(article)
    })
    return groups
  }, [filteredArticles])

  // Display categories in defined order, not insertion order
  const orderedGroups = useMemo(() => {
    return categories
      .filter((cat) => groupedArticles[cat.name])
      .map((cat) => ({ name: cat.name, articles: groupedArticles[cat.name] }))
  }, [groupedArticles])

  const allCategories = ['全部', ...categories.map((c) => c.name)]

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-display text-4xl text-ink mb-8">文章索引</h1>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="搜尋文章標題..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-surface border border-surface focus:border-red/60 focus:outline-none rounded-lg font-body text-sm text-ink placeholder-warm-gray transition-colors"
        />
      </div>

      {/* Mobile filter chips */}
      <div className="md:hidden mb-6 overflow-x-auto pb-2">
        <div className="flex gap-2 w-max">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full font-ui text-xs whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-ink text-cream'
                  : 'bg-surface text-warm-gray hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: sidebar + content */}
      <div className="flex gap-10">

        {/* Sidebar */}
        <aside className="hidden md:block w-52 flex-shrink-0">
          <div className="sticky top-24">
            <p className="font-ui text-xs text-warm-gray uppercase tracking-widest mb-3">分類</p>
            <hr className="red-rule mb-4" />
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setSelectedCategory('全部')}
                  className={`w-full text-left px-3 py-2 font-ui text-sm rounded border-l-[3px] transition-colors ${
                    selectedCategory === '全部'
                      ? 'border-red text-ink bg-surface font-semibold'
                      : 'border-transparent text-warm-gray hover:text-ink'
                  }`}
                >
                  全部
                  <span className="ml-1.5 font-mono text-xs">({articles.length})</span>
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.name}>
                  <button
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full text-left px-3 py-2 font-ui text-sm rounded border-l-[3px] transition-colors ${
                      selectedCategory === cat.name
                        ? 'border-red text-ink bg-surface font-semibold'
                        : 'border-transparent text-warm-gray hover:text-ink'
                    }`}
                  >
                    {cat.name}
                    <span className="ml-1.5 font-mono text-xs">({cat.count})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <p className="font-mono text-sm text-warm-gray mb-8">
            找到{' '}
            <span className="text-red">{filteredArticles.length}</span>
            {' '}篇文章
          </p>

          {filteredArticles.length === 0 && (
            <p className="font-body text-warm-gray py-12 text-center">找不到符合條件的文章</p>
          )}

          <div className="space-y-12">
            {orderedGroups.map(({ name, articles: catArticles }) => (
              <section key={name}>
                <div className="relative mb-2">
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 font-ui font-bold select-none pointer-events-none"
                    style={{ fontSize: 'clamp(3rem,8vw,5rem)', color: 'rgba(17,17,17,0.04)', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {name}
                  </span>
                  <h2 className="section-title font-ui text-sm font-bold tracking-widest uppercase">
                    {name}
                    <span className="font-mono font-normal text-warm-gray ml-1">({catArticles.length})</span>
                  </h2>
                </div>
                <div>
                  {catArticles.map((article) => (
                    <a
                      key={article.id}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-row group"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <span className="category-chip mt-0.5">{article.category}</span>
                        <span className="font-body text-[0.95rem] leading-snug text-ink group-hover:text-red transition-colors min-w-0">
                          {article.title}
                        </span>
                      </div>
                      <svg
                        className="flex-shrink-0 w-4 h-4 text-warm-gray group-hover:text-red transition-colors ml-2 mt-0.5"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>

      </div>
    </div>
  )
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="font-body text-warm-gray">載入中...</p>
      </div>
    }>
      <ArticlesContent />
    </Suspense>
  )
}
