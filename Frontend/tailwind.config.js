/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensures Tailwind is applied to all JSX files
  ],
  theme: {
    extend: {
      colors: {
        everglade: '#517d73',
      },
    },
  },
  plugins: [],
};

