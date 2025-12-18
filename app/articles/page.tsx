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
    return articles
      .filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === '全部' || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => b.id - a.id);
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
      <h1 className="text-4xl font-bold text-cyber-light mb-8">
        📚 文章索引
      </h1>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="🔍 搜尋文章標題..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-accent/30 text-cyber-light placeholder-cyber-light/40 focus:outline-none focus:border-accent focus:shadow-neon transition-all"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <p className="text-sm text-cyber-light/50 mb-3">🏷️ 快速篩選:</p>
        <div className="flex flex-wrap gap-2">
          <FilterButton
            active={selectedCategory === '全部'}
            onClick={() => setSelectedCategory('全部')}
          >
            全部
          </FilterButton>
          {categories.map((cat) => (
            <FilterButton
              key={cat.name}
              active={selectedCategory === cat.name}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.icon} {cat.name}
            </FilterButton>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-cyber-light/50 mb-6">
        找到 <span className="text-accent">{filteredArticles.length}</span> 篇文章
      </p>

      {/* Articles by Category */}
      <div className="space-y-12">
        {Object.entries(groupedArticles).map(([category, categoryArticles]) => {
          const categoryInfo = categories.find(c => c.name === category);
          return (
            <section key={category}>
              <h2 className="text-2xl font-bold text-cyber-light mb-6 flex items-center gap-2">
                <span>{categoryInfo?.icon}</span>
                <span>{category}</span>
                <span className="text-sm font-normal text-accent/60">({categoryArticles.length} 篇)</span>
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
          <p className="text-cyber-light/50">找不到符合條件的文章</p>
        </div>
      )}
    </div>
  );
}

function FilterButton({ active, onClick, children }: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active
          ? 'bg-accent/20 text-accent border border-accent/50 shadow-neon'
          : 'bg-secondary/50 text-cyber-light/70 border border-accent/20 hover:border-accent/40 hover:text-accent'
      }`}
    >
      {children}
    </button>
  );
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12">
        <div className="text-cyber-light/50">載入中...</div>
      </div>
    }>
      <ArticlesContent />
    </Suspense>
  );
}
