import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
  description: string;
}

export default function CategoryCard({ name, icon, count, description }: CategoryCardProps) {
  return (
    <Link
      href={`/articles?category=${encodeURIComponent(name)}`}
      className="block p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-accent dark:hover:border-accent hover:shadow-xl transition-all duration-200 group"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{description}</p>
      <p className="text-sm font-semibold text-accent">{count} 篇文章</p>
    </Link>
  );
}
