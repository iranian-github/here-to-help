import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'card-hover': '#F5F9F9FF',
      },
    },
    fontFamily: {
      vazirmatn: ['Vazirmatn', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config
