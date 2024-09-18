/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {'poppins' : ['Poppins', 'sans-serif']}
    },
    screens: {
      'xs': {'max': '640px'}, // Extra small devices (older phones) - ≤ 640px
      'sm': {'min': '641px', 'max': '828px'}, // Small devices (e.g., iPhone 11) - 641px to 828px
      'md': {'min': '829px', 'max': '1024px'}, // Medium devices (larger phones and small tablets)
      'lg': {'min': '1025px', 'max': '1080px'}, // Large devices (e.g., Realme 6 Pro) - 1025px to 1080px
      'xl': {'min': '1081px', 'max': '1280px'}, // Extra large devices - 1081px to 1280px
      '2xl': {'min': '1281px', 'max': '1580px'}, // Extra extra large devices - 1281px to 1580px
      '3xl': {'min': '1581px'}, // Ultra large devices (wide screens) - 1581px and above
    },
  },
  plugins: [],
}

