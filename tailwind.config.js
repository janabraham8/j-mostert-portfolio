/** @type {import('tailwindcss').Config} */
export default {
  // Scans all HTML and React files to pull out the Tailwind classes you use
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom theme styles extending the default Tailwind configuration
    },
  },
  plugins: [],
}