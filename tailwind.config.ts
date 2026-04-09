import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent — polished copper/amber
        brand: {
          copper: '#c07a28',
          'copper-dark': '#9e6320',
          'copper-light': '#fdf2e3',
          'copper-warm': '#d4942e',

          // Dark backgrounds (warm charcoal, not cold black)
          deep: '#18160f',        // hero / header / footer
          charcoal: '#221f15',    // secondary dark sections
          ink: '#1c1a12',         // deepest dark

          // Light backgrounds
          cream: '#f5ede0',       // warm off-white text on dark
          'warm-white': '#faf8f4', // light section bg
          parchment: '#f0e8d8',   // slightly darker warm bg

          // Legacy purple — kept for backwards compat
          purple: '#673de6',
          'purple-dark': '#5025d1',
          'purple-light': '#ebe4ff',

          // Gold for stars/ratings
          gold: '#c4922a',
          'gold-light': '#fdf3e3',
        },
        surface: {
          dark: '#1d1c18',
          stone: '#8a8276',
          'stone-dark': '#5a5449',
          gray: '#6b6660',
          'gray-dark': '#36344d',
          'border-dark': '#2c2920',    // borders on dark bg
          'border-light': '#e2d8cc',   // borders on light bg
          'gray-border': '#e2d8cc',    // kept for compat
          'gray-light': '#f5f2ef',
          white: '#ffffff',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-figtree)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '0.95', fontWeight: '600' }],
        'hero-lg': ['clamp(2.25rem, 5vw, 4.25rem)', { lineHeight: '1.0', fontWeight: '600' }],
        'display': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.15' }],
        'display-sm': ['clamp(1.25rem, 2vw, 1.875rem)', { lineHeight: '1.25' }],
      },
      borderRadius: {
        card: '4px',
        btn: '3px',
        'btn-lg': '4px',
      },
      boxShadow: {
        card: '0 1px 8px rgba(24, 22, 15, 0.08)',
        'card-hover': '0 6px 24px rgba(24, 22, 15, 0.14)',
        elevated: '0 4px 24px rgba(0, 0, 0, 0.16)',
        'copper-glow': '0 0 0 3px rgba(192, 122, 40, 0.25)',
      },
      backgroundImage: {
        'gradient-copper': 'linear-gradient(135deg, #c07a28 0%, #9e6320 100%)',
        'gradient-hero-split': 'linear-gradient(to right, #18160f 0%, #18160f 55%, transparent 55%)',
        'gradient-hero-dark': 'linear-gradient(to bottom, rgba(24,22,15,0.3) 0%, rgba(24,22,15,0.85) 60%, #18160f 100%)',
        'gradient-warm': 'linear-gradient(135deg, #faf8f4 0%, #f0e8d8 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-up-slow': 'fadeUp 0.9s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'underline-grow': 'underlineGrow 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        },
        underlineGrow: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
