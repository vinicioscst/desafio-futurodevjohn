/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebasNeue': ['Bebas Neue, sans-serif'],
        'bungee': ['Bungee Outline, cursive'],
        'montserrat': ['Montserrat, sans-serif'],
      },
      backgroundImage: {
        "header-bg": "url('/src/assets/header-bg.svg')",
        "gym-bg": "url('/src/assets/bg-gym.svg')"
      },
      colors: {
        'eerie-gray': '#222222',
        'dark-gray': '#787878',
        'strong-red': '#FF0202',
      },
      clipPath: {
        mypolygon: 'polygon(84% 0, 100% 50%, 100% 100%, 0 100%, 0 0)',
        polygoninput: 'polygon(84% 0, 100% 53%, 100% 100%, 0 100%, 0 0)',
        polygonbutton: 'polygon(87% 0, 100% 53%, 100% 100%, 0 100%, 0 0)',
      },
      animation: {
        'textslider': 'infinitescroll 25s linear infinite',
      },
      keyframes: {
        infinitescroll: {
          '0%': { left: '0', opacity: '0' },
          '5%, 95%': { opacity: '1' },
          '100%': { left: '-100%', opacity: '0' },
        }
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
