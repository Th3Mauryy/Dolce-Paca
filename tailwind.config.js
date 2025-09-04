/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-violet': '#a855f7',
        'navy-blue': '#1e293b',
        'light-violet': '#c084fc',
        'dark-navy': '#0f172a',
      },
    },
  },
  plugins: [],
}
