'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

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
            
            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                onBlur={() => setTimeout(() => setIsProjectsOpen(false), 200)}
                className="hover:text-accent transition-colors flex items-center gap-1"
              >
                公開專案
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProjectsOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                  <a
                    href="https://kurostudio-app.github.io/Explore-Diving-Website/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    🤿 探索潛水APP
                  </a>
                  <a
                    href="https://aleriskcalc.kuronetwork.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    📊 ALE Risk Calc
                  </a>
                </div>
              )}
            </div>
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
            
            {/* Mobile Projects */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">公開專案</p>
              <a
                href="https://kurostudio-app.github.io/Explore-Diving-Website/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block pl-4 py-2 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                🤿 探索潛水APP
              </a>
              <a
                href="https://aleriskcalc.kuronetwork.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="block pl-4 py-2 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                📊 ALE Risk Calc
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
