const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {
      colors: {
        "primary" : "#0694a2"
      }
    },
  },
  plugins: [require("daisyui"), flowbite.plugin(),],
};
