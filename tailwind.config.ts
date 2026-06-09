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
        // BenRaff Studio design tokens — palette architecturale
        brand: {
          dark:  '#1c1c1c',
          bg:    '#f7f5f1',
          cream: '#ede9e2',
          white: '#ffffff',
          text:  {
            primary:   '#1c1c1c',
            secondary: '#6b6b6b',
            muted:     '#9a9a9a',
            'on-dark': '#f7f5f1',
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
