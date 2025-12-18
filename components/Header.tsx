'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-xl border-b border-accent/20 scan-line">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold neon-text neon-breath glitch-hover tracking-wider"
          >
            KURO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">首頁</NavLink>
            <NavLink href="/articles">文章索引</NavLink>
            <NavLink href="/about">關於我</NavLink>
            <NavLink href="/contact">聯絡</NavLink>
            
            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                onBlur={() => setTimeout(() => setIsProjectsOpen(false), 200)}
                className="text-cyber-light/80 hover:text-accent transition-all duration-300 flex items-center gap-1 relative group"
              >
                我的作品
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-purple transition-all duration-300 group-hover:w-full" />
              </button>
              
              {isProjectsOpen && (
                <div className="absolute top-full right-0 mt-3 w-56 cyber-card rounded-lg py-2 z-[100]">
                  <ProjectLink href="https://explorediving.org/" emoji="🤿" title="探索潛水APP" />
                  <ProjectLink href="https://aleriskcalc.kuronetwork.me/" emoji="📊" title="ALE Risk Calc" />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyber-light hover:text-accent transition-colors"
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

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 top-[65px] bg-primary/80 backdrop-blur-sm z-[90]"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu Content */}
            <div className="md:hidden absolute left-0 right-0 top-full bg-primary border-b border-accent/20 px-4 pb-4 space-y-4 pt-4 z-[100] shadow-lg shadow-black/50">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>首頁</MobileNavLink>
              <MobileNavLink href="/articles" onClick={() => setIsMenuOpen(false)}>文章索引</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>關於我</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>聯絡</MobileNavLink>
              
              <div className="border-t border-accent/20 pt-4 mt-4">
                <p className="text-sm text-accent/60 mb-2">我的作品</p>
                <a
                  href="https://explorediving.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pl-4 py-2 text-cyber-light/80 hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🤿 探索潛水APP
                </a>
                <a
                  href="https://aleriskcalc.kuronetwork.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pl-4 py-2 text-cyber-light/80 hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📊 ALE Risk Calc
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-cyber-light/80 hover:text-accent transition-all duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-purple transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="block text-cyber-light/80 hover:text-accent transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function ProjectLink({ href, emoji, title }: { href: string; emoji: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block px-4 py-2 text-cyber-light/80 hover:text-accent hover:bg-accent/5 transition-all"
    >
      {emoji} {title}
    </a>
  );
}
