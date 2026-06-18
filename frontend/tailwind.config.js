/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        champagne: {
          50: '#FCFAF7',
          100: '#FAF6F2',
          200: '#F4EDE6',
          300: '#EDE1D6',
          400: '#DBC1AC',
          500: '#C9A68A',
          600: '#A68263',
          700: '#8A6B50',
          800: '#6E5440',
          900: '#4D3D2F',
        },
        rosegold: {
          50: '#F0F3F0',
          100: '#DCE4DD',
          200: '#B9C9BB',
          300: '#8DA891',
          400: '#62876A',
          500: '#4B6B53',
          600: '#3D5A44',
          700: '#344F39',
          800: '#2A3F2E',
          900: '#1E2E22',
        },
        ink: {
          50: '#F4F5F4',
          100: '#E4E8E5',
          200: '#C5CCC7',
          300: '#A0AAA3',
          400: '#7A8880',
          500: '#5D6B62',
          600: '#4D5750',
          700: '#3A423C',
          800: '#242E28',
          900: '#161A17',
        },
      },
      fontFamily: {
        display: ['"Google Sans"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Google Sans"', '"Poppins"', 'system-ui', 'sans-serif'],
        script: ['"Italianno"', 'cursive'],
      },
      boxShadow: {
        luxury: '0 10px 40px -12px rgba(52, 79, 57, 0.08), 0 1px 3px rgba(0, 0, 0, 0.01)',
        'luxury-lg': '0 24px 48px -16px rgba(52, 79, 57, 0.18), 0 2px 8px rgba(52, 79, 57, 0.03)',
        gold: '0 8px 20px -4px rgba(52, 79, 57, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DBC1AC 0%, #A68263 50%, #8A6B50 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #8DA891 0%, #344F39 50%, #1E2E22 100%)',
        'champagne-radial': 'radial-gradient(circle at top, #FAF6F2 0%, #FCFAF7 100%)',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(166, 130, 99, 0.5)' },
          '50%': { boxShadow: '0 0 0 18px rgba(166, 130, 99, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
