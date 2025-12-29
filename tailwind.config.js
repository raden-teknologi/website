export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-deep': '#231043',
        'violet-bright': '#6D28D9',
        'violet-light': '#A78BFA',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #231043 0%, #6D28D9 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)',
        'dark-gradient': 'linear-gradient(to bottom right, #0f172a 0%, #231043 50%, #1e1b4b 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
