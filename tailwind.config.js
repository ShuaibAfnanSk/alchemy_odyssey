/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      firstLetter: ['first'],
      height: {
        "100h" : "100vh" 
      },
      boxShadow: {
        "custom" : "rgba(17, 17, 26, 0.1) 0px 1px 0px;"
      },
      fontFamily: {
        os : ["anton"],
        zig: ["Parisienne"],
      },
      backgroundColor: {
        "mintish" : "#97c1a9"
      }
    },
  },
  plugins: [],
}