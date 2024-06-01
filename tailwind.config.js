/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#121435',
        sidebarColor: '#16194A',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        oleo: ['Oleo Script', 'sans-serif']
      },
    },
  },
  plugins: [],
}

