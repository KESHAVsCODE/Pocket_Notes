/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Times", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundColor: {
        darkBlue: "#16008B",
        lightBlue: "#001F8B",
        notesBackgroundColor: "#DAE5F5",
      },
    },
  },
  plugins: [],
};
