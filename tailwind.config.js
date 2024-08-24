/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        mainColor: "#48AE9E",
        secondColor: "#DDDDDD",
        primary: "#F3F5FA",
        secondary: "#5BB4A6"
      }
    },
  },
  plugins: [],
}
