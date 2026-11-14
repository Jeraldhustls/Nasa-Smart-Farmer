/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nasa: {
          blue: '#0b3d91',
          red: '#fc3d21',
          cyan: '#00d2ff',
          deep: '#030b0e',
        },
        farm: {
          dark: '#071711',
          card: '#0c241b',
          border: '#1b4332',
          accent: '#2d6a4f',
          light: '#52b788',
          mint: '#74c69d',
          lime: '#95d5b2',
          pale: '#d8f3dc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 20px -3px rgba(82, 183, 136, 0.35)',
        'glow-cyan': '0 0 20px -3px rgba(0, 210, 255, 0.35)',
        'glow-amber': '0 0 20px -3px rgba(245, 158, 11, 0.35)',
      }
    },
  },
  plugins: [],
}
