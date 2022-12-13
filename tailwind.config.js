/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        skin:{
          bgColor:"var(--background-color)",
          hoverColor:"var(--hover-color)"
        }
      },
      textColor:{
        skin:{
          textColor:"var(--text-color)"
        }
      },
    },
  },
  plugins: [],
};
