'use client';

import { useState, useMemo, Suspense } from 'react';
import { articles, categories } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import { useSearchParams } from 'next/navigation';

function ArticlesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || '全部');

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '全部' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const groupedArticles = useMemo(() => {
    const groups: { [key: string]: typeof articles } = {};
    filteredArticles.forEach(article => {
      if (!groups[article.category]) {
        groups[article.category] = [];
      }
      groups[article.category].push(article);
    });
    return groups;
  }, [filteredArticles]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        📚 文章索引
      </h1>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="🔍 搜尋文章標題..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">🏷️ 快速篩選:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('全部')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === '全部'
                ? 'bg-accent text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            全部
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat.name
                  ? 'bg-accent text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        找到 {filteredArticles.length} 篇文章
      </p>

      {/* Articles by Category */}
      <div className="space-y-12">
        {Object.entries(groupedArticles).map(([category, categoryArticles]) => {
          const categoryInfo = categories.find(c => c.name === category);
          return (
            <section key={category}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span>{categoryInfo?.icon}</span>
                <span>{category}</span>
                <span className="text-sm font-normal text-gray-500">({categoryArticles.length} 篇)</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">找不到符合條件的文章</p>
        </div>
      )}
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12">載入中...</div>}>
      <ArticlesContent />
    </Suspense>
  );
}
