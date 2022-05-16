/*
 * @Author: czx
 * @Date: 2022-03-30 08:31:15
 * @LastEditors: czx
 * @LastEditTime: 2022-03-30 08:38:15
 * @description: 
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common.config");
const path = require("path");
const { merge } = require("webpack-merge");


module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "./public"),
    hot: true,
    proxy: {
      //配置代理路径 我们使用/api作为请求前缀
      //为了避免访问时带上/api这个前缀 所以我们在写的时候 可以对这个请求的路径进行重写
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        //secure 当请求为https时需要携带证书 开启此选项,可以成功规避这个问题
        secure: false,
        //changeOrigin 更改我们的请求头,使其成为我们请求的服务器地址,避免有些服务器会对请求做请求头验证而代理失败
        changeOrigin: true,
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
})