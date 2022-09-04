const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/variables.scss";
          @import "@/scss/custom.scss";
        `
      }
    }
  }
}
