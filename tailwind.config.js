const animationDelayPlugin = require('./animation-delay-plugin');
console.log('>>>', 'animationDelayPlugin', animationDelayPlugin)

const designWidth = 750;
const scaleFactor = 100 / designWidth; // 缩放因子

function generateVwValues(start, end, step) {
  const vwValues = {};
  for (let i = start; i <= end; i += step) {
    vwValues[`${i}`] = `${i * scaleFactor}vw`;
  }
  return vwValues;
}

function generateAnimateDelayValues(start, end, step) {
  const vwValues = {};
  for (let i = start; i <= end; i += step) {
    vwValues[`${i}`] = `${i}ms`;
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
      backgroundSize: generateVwValues(0, 1000, 1),
      letterSpacing: generateVwValues(0, 1000, 1),
      animationDelay: generateAnimateDelayValues(0, 10000, 100),
      keyframes: {
        flicker: {
          '0%': { 'color': '#333' },
          '2%, 7%, 12%, 15%, 50%': {
            'color': '#fff',
            'text-shadow':
              `0px 0px 5px #42fff6,
              0px 0px 10px #42fff6,
              0px 0px 20px #42fff6,
              0px 0px 50px #42fff6;`
          },
          '5%, 10%': {
            'color': '#333',
            'text-shadow': 'none',
          }
        }
      },
      fontFamily: {
        'dancing': "'Dancing Script', 'Warnes', cursive"
      }
    },
  },
  variants: {},
  plugins: [animationDelayPlugin],
}