module.exports = {
  devServer: {
    overlay: false,
  },
  css: {
    loaderOptions: {
      scss: { prependData: ` @import "@/assets/scss/variables.scss"; ` },
    },
  },
  transpileDependencies: ['vuetify'],
};
