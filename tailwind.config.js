/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F0F',
        foreground: '#FCFCFC',
        primary: '#0066FF',
        secondary: '#4D94FF',
        accent: '#FF3366',
        darkGray: '#1E1E1E',
        mediumGray: '#2D2D2D',
        lightGray: '#ABABAB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
