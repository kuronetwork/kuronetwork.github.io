import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
  description: string;
}

const categoryColors: Record<string, string> = {
  "資訊安全": "from-accent/20 to-accent-blue/20 border-accent/30 hover:border-accent/60",
  "CTF/滲透測試": "from-accent-pink/20 to-accent-purple/20 border-accent-pink/30 hover:border-accent-pink/60",
  "網路管理": "from-accent-purple/20 to-accent-blue/20 border-accent-purple/30 hover:border-accent-purple/60",
  "讀書心得": "from-success/20 to-accent/20 border-success/30 hover:border-success/60",
  "理財投資": "from-yellow-500/20 to-orange-500/20 border-yellow-500/30 hover:border-yellow-500/60",
  "雲端運算": "from-accent-blue/20 to-accent/20 border-accent-blue/30 hover:border-accent-blue/60",
};

export default function CategoryCard({ name, icon, count, description }: CategoryCardProps) {
  const colorClass = categoryColors[name] || "from-accent/20 to-accent-blue/20 border-accent/30 hover:border-accent/60";
  
  return (
    <Link
      href={`/articles?category=${encodeURIComponent(name)}`}
      className={`block p-6 rounded-lg border-flow click-glow min-h-[180px] bg-gradient-to-br ${colorClass} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group`}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-cyber-light mb-2 group-hover:text-accent transition-colors">
        {name}
      </h3>
      <p className="text-sm text-cyber-light/60 mb-3">{description}</p>
      <p className="text-sm font-semibold text-accent electric-button px-2 py-1 rounded w-fit">{count} 篇文章</p>
    </Link>
  );
}
