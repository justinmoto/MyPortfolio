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
      'sm': {'max': '640px'}, // Applies to screens ≤ 640px
      'md': {'min': '641px', 'max': '768px'}, // Applies to screens between 641px and 768px
      'lg': {'min': '769px', 'max': '1024px'}, // Applies to screens between 769px and 1024px
      'xl': {'min': '1025px', 'max': '1280px'}, // Applies to screens between 1025px and 1280px
      '2xl': {'min': '1281px', 'max': '1580px'}, // Applies to screens between 1281px and 1580px
      '3xl': {'min': '1581px'}, // Custom: Applies to screens > 1580px
    },
  },
  plugins: [],
}

