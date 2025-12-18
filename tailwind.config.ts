import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto)', 'system-ui', 'sans-serif'],
        cyber: ['var(--font-orbitron)', 'monospace'],
        tech: ['var(--font-rajdhani)', 'sans-serif'],
      },
      colors: {
        primary: '#0a0a0f',
        secondary: '#1a1a2e',
        accent: '#00ffff',
        'accent-pink': '#ff0080',
        'accent-purple': '#8000ff',
        'accent-blue': '#0066cc',
        success: '#00ff41',
        'cyber-gray': '#64748b',
        'cyber-light': '#f1f5f9',
      },
      boxShadow: {
        'neon': '0 0 5px #00ffff, 0 0 10px rgba(0,255,255,0.3)',
        'neon-pink': '0 0 5px #ff0080, 0 0 10px rgba(255,0,128,0.3)',
        'neon-hover': '0 0 15px #00ffff, 0 0 30px rgba(0,255,255,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px rgba(0,255,255,0.2)' },
          '100%': { boxShadow: '0 0 10px #00ffff, 0 0 20px rgba(0,255,255,0.4)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
