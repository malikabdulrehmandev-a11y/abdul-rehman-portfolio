import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 30px 80px rgba(15, 23, 42, 0.08)',
        glow: '0 0 0 1px rgba(148,163,184,0.12), 0 30px 80px rgba(59,130,246,0.12)',
      },
      colors: {
        primary: '#4f46e5',
        accent: '#7c3aed',
        surface: '#f8fafc',
      },
      backgroundImage: {
        'hero-soft': 'radial-gradient(circle at top left, rgba(99,102,241,0.14), transparent 40%), radial-gradient(circle at bottom right, rgba(79,70,229,0.1), transparent 30%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
