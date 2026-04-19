'use client'

import { useEffect, useState } from 'react'

interface Section {
  id: string
  label: string
}

export default function TableOfContents({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-10% 0% -70% 0%' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="hidden lg:block">
      <p className="font-ui text-xs text-warm-gray uppercase tracking-widest mb-3">目錄</p>
      <hr className="red-rule mb-4" />
      <ul className="space-y-2">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`font-ui text-sm transition-colors block py-0.5 hover:text-ink ${
                activeId === id ? 'text-red' : 'text-warm-gray'
              }`}
            >
              · {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
