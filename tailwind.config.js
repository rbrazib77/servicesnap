/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubikRegular: ["rubik-regular"],
        rubikLight: ["rubik-light"],
        rubikBold: ["rubik-bold"],
        rubikMedium: ["rubik-medium"],
        rubikSemibold: ["rubik-semibold"],
        poppinsRegular: ["poppins-regular"],
        poppinsBold: ["poppins-bold"],
        poppinsLight: ["poppins-light"],
      },
      colors: {
        primary: "#ff3951",
        secondary: "#100f12",
      },
      maxWidth: {
        'container': "1300px",
      },
    },
  },
  plugins: [],
};
