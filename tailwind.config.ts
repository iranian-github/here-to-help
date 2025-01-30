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
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-in-out forwards',
        'fade-out': 'fade-out 0.2s ease-in-out forwards',
      },
    },
    fontFamily: {
      vazirmatn: ['Vazirmatn', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config
