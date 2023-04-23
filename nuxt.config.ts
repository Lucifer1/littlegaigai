export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '@/assets/css/main.css',
  ],
  typescript: {
    shim: false,
  },
  build: {
    transpile: [/^element-ui/],
  },
  postcss: {
    // 添加插件名称作为键，参数作为值
    plugins: {
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: 750,
        unitPrecision: 5,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [],
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 1136,
      },
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
