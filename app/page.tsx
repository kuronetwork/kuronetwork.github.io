import Link from 'next/link';
import { articles, categories } from '@/data/articles';
import CategoryCard from '@/components/CategoryCard';
import ArticleCard from '@/components/ArticleCard';

export default function Home() {
  const featuredArticles = articles.filter(a => a.featured).slice(0, 6);
  const latestArticles = articles.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mb-6">
          <img 
            src="/images/avatar.jpg" 
            alt="Kuro" 
            className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-accent shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kuro - 資安工作者的學習手記
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Cyber Security Consultant | Medium Blogger
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://twitter.com/catkuroH" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/kurohuang/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://medium.com/blacksecurity/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          📚 文章分類
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            📌 最新文章
          </h2>
          <Link
            href="/articles"
            className="text-accent hover:underline font-semibold"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
