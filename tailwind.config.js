/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: '#1d1d1d',
          muted: '#56585e',
          accent: '#359aba',
          'accent-muted': '#205c70',
        },
        bg: {
          DEFAULT: '#ffffff',
        },
        surface: {
          DEFAULT: '#f6f6f6',
          accent: '#e6f3f7',
          elevated: '#e5e5e5',
          'elevated-accent': '#cae5ed'
        },
        border: {
          DEFAULT: '#e5e7eb',
          accent: '#359aba'
        },
        icon: {
          DEFAULT: '#a5a5a5',
          accent: '#359aba',
        }
      }
    }
  }
};
