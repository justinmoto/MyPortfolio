/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 'poppins': ['Poppins', 'sans-serif'] }
    },
    screens: {
      'xxs': {'max': '480px'}, // Extra extra small devices - ≤ 480px
      'xs': {'min': '481px', 'max': '640px'}, // Extra small devices - 481px to 640px
      'sm': {'min': '641px', 'max': '828px'}, // Small devices - 641px to 828px (iPhone 11)
      'md': {'min': '829px', 'max': '1024px'}, // Medium devices - 829px to 1024px
      'lg': {'min': '1025px', 'max': '1080px'}, // Large devices - 1025px to 1080px (Realme 6 Pro)
      'xl': {'min': '1081px', 'max': '1280px'}, // Extra large devices - 1081px to 1280px
      '2xl': {'min': '1281px', 'max': '1580px'}, // Extra extra large devices - 1281px to 1580px
      '3xl': {'min': '1581px'}, // Ultra large devices - 1581px and above
    },
  },
  plugins: [],
}
