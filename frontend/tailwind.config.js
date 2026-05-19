import frappeUIPreset from 'frappe-ui/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [frappeUIPreset],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/frappe-ui/src/components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F8F4EC',
        ink: '#1F1F1D',
        muted: '#6F6A60',
        line: '#DDD2C0',
        card: '#FFFDF8',
        forest: '#2F5D50',
        ochre: '#8A5A2B',
        night: '#181816',
        nightMuted: '#A9A395',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Iowan Old Style', 'Georgia', 'serif'],
      },
      boxShadow: {
        paper: '0 18px 60px -42px rgba(31, 31, 29, 0.45)',
        lift: '0 18px 40px -32px rgba(31, 31, 29, 0.35)',
      },
    },
  },
  plugins: [],
}
