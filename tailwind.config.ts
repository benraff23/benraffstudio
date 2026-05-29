import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // BenRaff Studio design tokens
        brand: {
          black:   '#080808',
          white:   '#f5f5f0',
          lime:    '#c8e84e',
          'lime-dim': 'rgba(200,232,78,0.12)',
          'lime-subtle': 'rgba(200,232,78,0.06)',
          grey: {
            100: '#1a1a1a',
            200: '#242424',
            300: '#3a3a3a',
            400: '#5a5a5a',
            500: '#7a7a7a',
            600: '#9a9a9a',
            700: '#b8b8b8',
            800: '#d4d4d0',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wider: '0.08em',
        widest: '0.15em',
      },
      lineHeight: {
        tightest: '1.05',
        snug: '1.2',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px #c8e84e' },
          '50%': { boxShadow: '0 0 20px #c8e84e, 0 0 40px rgba(200,232,78,0.2)' },
        },
      },
      // Safelist needed for dynamic bento span classes
    },
  },
  safelist: [
    // Bento grid dynamic span classes
    { pattern: /^(md|sm|col|row)-(col|row|span)-\d+$/ },
    { pattern: /^(md|sm):col-span-\d+$/ },
    { pattern: /^(md|sm):row-span-\d+$/ },
    'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-4',
    'md:row-span-1', 'md:row-span-2', 'md:row-span-3', 'md:row-span-4',
    'sm:col-span-1', 'sm:col-span-2', 'sm:col-span-3',
    'sm:row-span-1', 'sm:row-span-2', 'sm:row-span-3',
    'col-span-1', 'col-span-2',
  ],
  plugins: [],
}

export default config
