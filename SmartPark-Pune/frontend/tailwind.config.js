/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: "#EA580C",
        secondary: "#1E293B",
        glass: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
}
