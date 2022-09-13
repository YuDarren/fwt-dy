const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  /*測試用 */
  publicPath: process.env.NODE_ENV === "production" ? "/firstproject/" : "/",
  transpileDependencies: true,
});
