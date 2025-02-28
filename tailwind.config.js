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
        primary: 'rgb(0, 102, 255)',
        secondary: 'rgb(77, 148, 255)',
        accent: 'rgb(255, 51, 102)',
        darkGray: 'rgb(30, 30, 30)',
        mediumGray: 'rgb(45, 45, 45)',
        lightGray: 'rgb(171, 171, 171)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'text-primary',
    'text-secondary',
    'text-accent',
    'text-lightGray',
    'bg-primary',
    'bg-secondary', 
    'bg-accent',
    'bg-darkGray',
    'bg-mediumGray',
    'bg-lightGray',
    'border-primary',
    'border-secondary',
    'border-accent'
  ]
}
