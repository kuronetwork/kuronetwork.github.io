import { Article } from '@/data/articles'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-surface hover:bg-[#E5E0D5] rounded-lg transition-colors duration-200 group"
    >
      <span className="category-chip mb-3 inline-block">{article.category}</span>
      <p className="font-body text-base leading-snug text-ink group-hover:text-red transition-colors">
        {article.title}
      </p>
      <span className="mt-4 text-warm-gray text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
        閱讀
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  )
}
