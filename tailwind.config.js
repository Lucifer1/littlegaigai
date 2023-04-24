/** @type {import('tailwindcss').Config} */
const designWidth = 750;
const scaleFactor = 100 / designWidth; // 缩放因子

function generateVwValues(start, end, step) {
  const vwValues = {};
  for (let i = start; i <= end; i += step) {
    vwValues[`${i}`] = `${i * scaleFactor}vw`;
  }
  return vwValues;
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      width: generateVwValues(0, 1000, 1),
      height: generateVwValues(0, 1000, 1),
      padding: generateVwValues(0, 1000, 1),
      margin: generateVwValues(0, 1000, 1),
      fontSize: generateVwValues(1, 1000, 1),
      lineHeight: generateVwValues(1, 1000, 1),
      borderRadius: generateVwValues(0, 1000, 1),
      backgroundSize: generateVwValues(0, 1000, 1)
    },
  },
  variants: {},
  plugins: [],
}