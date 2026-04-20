'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false)
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsProjectsOpen(false)
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-nav-bg/95 backdrop-blur-sm border-b border-surface' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <DecryptLogo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>首頁</Link>
          <Link href="/articles" className={`nav-link ${pathname === '/articles' ? 'active' : ''}`}>文章</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>關於我</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>聯絡我</Link>

          {/* Projects dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className={`nav-link flex items-center gap-1 ${isProjectsOpen ? 'active' : ''}`}
            >
              作品
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isProjectsOpen && (
              <div className="absolute top-full right-0 mt-3 w-52 bg-nav-bg border border-surface rounded-lg shadow-lg py-2 z-[100]">
                <a
                  href="https://explorediving.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 font-ui text-sm text-warm-gray hover:text-ink hover:bg-surface transition-colors"
                >
                  探索潛水 APP
                </a>
                <a
                  href="https://aleriskcalc.kuronetwork.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 font-ui text-sm text-warm-gray hover:text-ink hover:bg-surface transition-colors"
                >
                  ALE Risk Calc
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink hover:text-red transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-ink/20 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-nav-bg shadow-2xl z-[100] transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-surface">
          <div className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <DecryptLogo />
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="text-warm-gray hover:text-ink transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="px-6 py-4 flex flex-col">
          <MobileNavLink href="/" active={pathname === '/'} onClick={() => setIsMenuOpen(false)}>首頁</MobileNavLink>
          <MobileNavLink href="/articles" active={pathname === '/articles'} onClick={() => setIsMenuOpen(false)}>文章</MobileNavLink>
          <MobileNavLink href="/about" active={pathname === '/about'} onClick={() => setIsMenuOpen(false)}>關於我</MobileNavLink>
          <MobileNavLink href="/contact" active={pathname === '/contact'} onClick={() => setIsMenuOpen(false)}>聯絡我</MobileNavLink>
          <div className="mt-4 pt-4 border-t border-surface">
            <p className="font-ui text-xs text-warm-gray mb-3 uppercase tracking-widest">作品</p>
            <a
              href="https://explorediving.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 font-ui text-sm text-warm-gray hover:text-ink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              探索潛水 APP
            </a>
            <a
              href="https://aleriskcalc.kuronetwork.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 font-ui text-sm text-warm-gray hover:text-ink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ALE Risk Calc
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

function MobileNavLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-3 font-ui text-base border-b border-surface transition-colors ${
        active ? 'text-ink font-semibold' : 'text-warm-gray hover:text-ink'
      }`}
    >
      {children}
    </Link>
  )
}

function DecryptLogo() {
  const [text, setText] = useState('010101010101');
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    let iteration = 0;
    const TARGET = 'root@kuro:~#';
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!';
    let interval: NodeJS.Timeout;

    const startDecoding = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setText(
          TARGET.split('').map((char, index) => {
            if (iteration > index * 5) {
              return char;
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join('')
        );

        if (iteration >= TARGET.length * 5) {
          clearInterval(interval);
          setText(TARGET);
        }
        iteration += 1;
      }, 40);
    };

    startDecoding();
    return () => clearInterval(interval);
  }, [trigger]);

  return (
    <span 
      className="font-mono font-bold tracking-tight text-lg md:text-xl text-ink hover:text-red transition-colors"
      onMouseEnter={() => setTrigger(v => v + 1)}
    >
      {text}
    </span>
  );
}
