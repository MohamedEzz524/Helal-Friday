/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            orange: 'hsl(var(--color-primary-orange))',
          },
          dark: {
            bg: 'hsl(var(--color-dark-bg))',
          },
        },
        animation: {
          'twinkle': 'twinkle 3s ease-in-out infinite',
          'float': 'float 20s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
  