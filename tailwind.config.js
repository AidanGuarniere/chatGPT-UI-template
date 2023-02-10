/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        test: "#CCE3DE",
      },
      maxHeight: {
        120: "60vh",
        "14vw":"14vw",
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
