/** @type {import('tailwindcss').Config} */
import { themes } from "./src/themes.config";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: themes,
  plugins: [],
};
