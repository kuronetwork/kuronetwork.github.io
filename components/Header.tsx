'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-primary/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary dark:text-white">
            KURO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors">首頁</Link>
            <Link href="/articles" className="hover:text-accent transition-colors">文章索引</Link>
            <Link href="/about" className="hover:text-accent transition-colors">關於我</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">聯絡</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>首頁</Link>
            <Link href="/articles" className="block hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>文章索引</Link>
            <Link href="/about" className="block hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>關於我</Link>
            <Link href="/contact" className="block hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>聯絡</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
