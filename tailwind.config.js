/** @type {import('tailwindcss').Config} */
// tailwind.config.js

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f0f0f0', // or any color you want
        foreground: '#1f2937',   // <- add this line (dark gray text)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'gradient-reverse': 'gradient-reverse 3s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-reverse': {
          '0%, 100%': { 'background-position': '100% 50%' },
          '50%': { 'background-position': '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-30px) rotate(3deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundSize: {
        '200%': '200% 200%',
      }
    },
  },
  plugins: [],
};
