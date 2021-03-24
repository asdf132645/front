module.exports = {
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      scss: {
        sourceMap: true,
        additionalData: ` @import "@/assets/scss/variables.scss"; `,
      },
    },
  },
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
  },
};
