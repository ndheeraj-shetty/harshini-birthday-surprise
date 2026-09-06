/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#06070a',
          900: '#0b0d13',
          800: '#121520',
          700: '#1b2030',
        },
        ivory: {
          50: '#fefdfb',
          100: '#faf7f2',
          200: '#f3ece1',
          300: '#e5d9c6',
          400: '#cca882',
        },
        wine: {
          900: '#2b0d18',
          800: '#451425',
          700: '#641b34',
          600: '#892345',
          500: '#b12e58',
        },
        rose: {
          900: '#38131d',
          800: '#521d2b',
          400: '#c57d8f',
          300: '#dda2b0',
        },
        gold: {
          400: '#dfb76c',
          500: '#cfa24b',
          600: '#ab8235',
        },
        violet: {
          950: '#0e0b17',
          900: '#1c1530',
          800: '#2d224e',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', '"Dancing Script"', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(223, 183, 108, 0.3))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 20px rgba(223, 183, 108, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
