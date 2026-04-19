import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:       '#F4F0E8',
        ink:         '#111111',
        red:         '#CC2200',
        'warm-gray': '#8A7F72',
        surface:     '#EDE9E0',
        'nav-bg':    '#FDFCF9',
        'red-light': '#F5EAE7',
      },
      fontFamily: {
        display: ['var(--font-display)', 'var(--font-body)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        ui:      ['var(--font-ui)', 'var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease-out both',
        'clip-reveal': 'clipReveal 0.8s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        clipReveal: {
          '0%':   { clipPath: 'inset(0 0 100% 0)' },
          '100%': { clipPath: 'inset(-4px 0 -4px 0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
