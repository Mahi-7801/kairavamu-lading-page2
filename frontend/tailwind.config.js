/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#fdf8f0',
          100: '#f9f1e7',
          200: '#f2e5cc',
          300: '#ead8b0',
        },
        gold: {
          50:  '#fbf5e0',
          100: '#f7ecc2',
          200: '#f2e3a3',
          300: '#edd984',
          400: '#e4cc8e',
          500: '#e1cf7c',
          600: '#c8b55a',
          700: '#a8962d',
          800: '#887820',
          900: '#615614',
        },
        forest: {
          50:  '#e8ede9',
          100: '#d0dcd2',
          200: '#a1b9a5',
          300: '#729678',
          400: '#43724b',
          500: '#2a5938',
          600: '#1d4631',
          700: '#163826',
          800: '#0f2a1b',
          900: '#071c10',
        },
        ink: {
          50:  '#f4f5f3',
          100: '#e4e8e4',
          200: '#c3ccc4',
          300: '#9caa9e',
          400: '#738678',
          500: '#566659',
          600: '#425249',
          700: '#2f3d34',
          800: '#1d2921',
          900: '#0e1610',
        },
      },
      fontFamily: {
        display: ['"Google Sans"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Google Sans"', '"Poppins"', 'system-ui', 'sans-serif'],
        script: ['"Italianno"', 'cursive'],
      },
      boxShadow: {
        luxury: '0 10px 40px -12px rgba(29, 70, 49, 0.10), 0 1px 3px rgba(0,0,0,0.02)',
        'luxury-lg': '0 24px 48px -16px rgba(29, 70, 49, 0.22), 0 2px 8px rgba(29, 70, 49, 0.05)',
        gold: '0 8px 20px -4px rgba(225, 207, 124, 0.45)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f2e3a3 0%, #e1cf7c 50%, #c8b55a 100%)',
        'forest-gradient': 'linear-gradient(135deg, #2a5938 0%, #1d4631 50%, #0f2a1b 100%)',
        'cream-radial': 'radial-gradient(circle at top, #fdf8f0 0%, #f9f1e7 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        wave: 'wave 1.2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(225, 207, 124, 0.5)' },
          '50%': { boxShadow: '0 0 0 18px rgba(225, 207, 124, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-15deg)' },
          '40%': { transform: 'rotate(15deg)' },
          '60%': { transform: 'rotate(-10deg)' },
          '80%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
};
