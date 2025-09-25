/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        },
        colors: {
          primary: {
            50: '#f5f7fa',
            500: '#4a69bd',
            600: '#3c5aa8',
            700: '#2c3e50',
          },
          success: '#27ae60',
          danger: '#e74c3c',
          info: '#0366d6',
        },
        boxShadow: {
          card: '0 4px 15px rgba(0, 0, 0, 0.1)',
          button: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: [],
  };