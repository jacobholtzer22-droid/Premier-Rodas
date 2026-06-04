import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand teal/cyan — pulled from the crowned-eagle logo
        brand: {
          50: '#ecfdff',
          100: '#cff7fe',
          200: '#a5eefc',
          300: '#67e0f9',
          400: '#27c7ec',
          500: '#0aa7d0',
          600: '#0c84af',
          700: '#126a8e',
          800: '#185674',
          900: '#194862',
          950: '#0a2e42',
        },
        // Gold accent — the crown + mane highlights
        gold: {
          50: '#fefaec',
          100: '#fbf0c8',
          200: '#f7df8d',
          300: '#f3c84a',
          400: '#f0b524',
          500: '#e09712',
          600: '#c2720d',
          700: '#a1500f',
          800: '#833f14',
          900: '#6e3413',
        },
        ink: '#0c1a22',
        cream: '#f7fbfc',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(12, 46, 66, 0.25)',
        lift: '0 20px 50px -20px rgba(12, 46, 66, 0.35)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #126a8e 0%, #0aa7d0 50%, #27c7ec 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f0b524 0%, #f3c84a 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
