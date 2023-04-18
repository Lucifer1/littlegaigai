export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  build: {
    transpile: [/^element-ui/],
    // extend (config) {
    //   const lessRule = {
    //     test: /\.less$/,
    //     use: [
    //       'vue-style-loader',
    //       'css-loader',
    //       'less-loader'
    //     ]
    //   }

    //   // 查找CSS规则并修改为同时适用于CSS和Less
    //   const cssRule = config.module.rules.find(
    //     rule => rule.test.toString() === '/\\.css$/'
    //   )
    //   if (cssRule) {
    //     cssRule.test = /\.(css|less)$/
    //   } else {
    //     // 如果找不到CSS规则，添加新的CSS和Less规则
    //     config.module.rules.push(
    //       Object.assign({}, lessRule, {
    //         test: /\.(css|less)$/
    //       })
    //     )
    //   }
    // },
    // postcss: {
    //   // 添加插件名称作为键，参数作为值
    //   plugins: {
    //     "postcss-px-to-viewport": {
    //       unitToConvert: "px",
    //       viewportWidth: 750,
    //       unitPrecision: 5,
    //       propList: ["*"],
    //       viewportUnit: "vw",
    //       fontViewportUnit: "vw",
    //       selectorBlackList: [],
    //       minPixelValue: 1,
    //       mediaQuery: false,
    //       replace: true,
    //       exclude: [],
    //       landscape: false,
    //       landscapeUnit: "vw",
    //       landscapeWidth: 1136,
    //     },
    //   },
    //   preset: {
    //     // 更改postcss-preset-env 设置
    //     autoprefixer: {},
    //   },
    // },
  },
});
