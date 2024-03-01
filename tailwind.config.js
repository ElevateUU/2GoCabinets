/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.8rem',
      lg: '1.125rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem',
      '5rem': '5rem',
      '8xl': '6rem',
      '400': '400px',
    },
    extend: {
      flexGrow: {
        2: '2'
      },
      colors: {
        'schedule': '#3b95e3',
        'light-black': '#2c2c2c',
        'our': '#2d6aa0',
        "whitik": '#FAFAFA',
        'sembro': '#61718F',
        'countertop': '#8C8B8B',
        'gray': '#626262',
        'lightgray': '#EEEBE9',
        'modalborder': '#d9cfc1',
        'how': '#F7F6F5',
        'color4darker': '#172C53',
        'choose': '#3C4453',
        'color4': '#20355D',
        'color5': '#97A8C7',
        'color5lighter': "#cfe0ff",
        'hover': 'E9EBEE',
        'modalimg1': "#E4E9EC",
        'modalimg2': "#E7ECE6",
        'modaltext': '#6b6b6b',
        'milkgray': '#E6E2D9',
        'lines': '#F0F0F0',
        'borderlight': '#CDC3B9',
        'graydot': '#E4E0DE',
        'footercolor': '#EFEBE9',
        'icons': '#CBC3BA',
        'grayborder': '#dcd5ce',
        'message': '#e7e7e7',
        'header_info': '#f0f2f5'
      },
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      animation: {
        blob: "blob 7s infinite",
        blob2: "blob2 10s infinite",
        slideDown: 'slideDown 3s forwards',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            filter: "blur(0px)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            filter: "blur(2px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "50%": {
            transform: "translate(20px, -20px) scale(1.1)",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-blend-mode')(),
  ],
}
