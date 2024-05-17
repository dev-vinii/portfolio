/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#242424',
        sidebarColor: '#434343',
      }
    },
  },
  plugins: [],
}

