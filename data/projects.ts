export interface Project {
  href: string
  subtitle: string
  title: string
  description: string
  cta: string
}

/**
 * Single source of truth for portfolio projects.
 *
 * Consumed by:
 *  - app/page.tsx        → homepage PROJECTS grid (full cards)
 *  - components/Header.tsx → "作品" dropdown (desktop) + mobile drawer (title + href only)
 *
 * Add/edit a project here and it stays in sync everywhere.
 * Array order controls display order (index 1 = top-right on the homepage grid).
 */
export const projects: Project[] = [
  {
    href: 'https://explorediving.org/',
    subtitle: 'Mobile App',
    title: '探索潛水 APP',
    description: '專為潛水愛好者打造的資訊平台，提供潛點資訊、潛水日誌記錄、裝備管理等功能。',
    cta: '探索更多',
  },
  {
    href: 'https://kiro.kuronetwork.me',
    subtitle: 'Developer Guide',
    title: 'Amazon Kiro 繁體中文指引',
    description: 'Amazon Kiro AI IDE 的繁體中文使用指引，涵蓋安裝設定、Spec 與 Agentic 開發工作流程，協助開發者快速上手 AI 輔助開發。',
    cta: '查看指引',
  },
  {
    href: 'https://aleriskcalc.kuronetwork.me/',
    subtitle: 'Web Tool',
    title: 'ALE Risk Calc',
    description: '資安風險量化計算工具，協助企業評估年度預期損失（ALE），進行風險管理決策。',
    cta: '立即使用',
  },
  {
    href: 'https://dive.kuronetwork.me/',
    subtitle: 'Web Tool',
    title: '潛水旅遊裝備檢查表',
    description: '潛水旅遊出發前的裝備清單工具，幫助潛水員系統性確認所有必備裝備，避免遺漏。',
    cta: '立即使用',
  },
  {
    href: 'https://coffee.kuronetwork.me/',
    subtitle: 'Coffee Learning Notes',
    title: '咖啡科學學習筆記',
    description: '咖啡科學的學習筆記，包涵 SCA 咖啡證照考試、涵蓋萃取科學、感官評估、烘焙與義式咖啡。',
    cta: '開始閱讀',
  },
]
