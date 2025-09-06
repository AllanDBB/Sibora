import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Default cyan scale kept to avoid breaking existing classes
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // cyan-500 base
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        },
        // Siböra brand palette
        brandTeal: '#16a7a3',
        brandMint: '#65cdc1',
        brandBlue: '#127ead',
        ocean: '#127ead',
        accent: '#fe9e00', // secondary CTA
        accent2: '#ffb347', // light orange accent for gradients
        offwhite: '#f7f7f7',
        ink: '#0f172a'
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(1200px 600px at 10% 10%, rgba(22,167,163,0.15), transparent 60%), radial-gradient(800px 400px at 90% 20%, rgba(18,126,173,0.15), transparent 60%)',
        'brand-gradient': 'linear-gradient(135deg, #65cdc1 0%, #16a7a3 45%, #127ead 100%)',
        'cta-gradient': 'linear-gradient(135deg, #fe9e00 0%, #ffb347 100%)'
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(2,132,199,0.25)',
        glow: '0 0 0 6px rgba(34,211,238,0.15)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}

export default config
