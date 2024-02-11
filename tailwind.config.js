/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      'purple': "#9c88ff",
      'blue': "#0097e6",
      'yellow': "#fbc531",
      'green': "#4cd137",
      'red': "#e84118",
    }
  },
  plugins: [],
};
