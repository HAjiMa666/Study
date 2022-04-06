/*
 * @Author: czx
 * @Date: 2022-03-26 15:59:48
 * @LastEditors: czx
 * @LastEditTime: 2022-03-26 16:38:13
 * @description: 
 */
const path = require("path");
module.exports = {
  // 更改打包入口
  entry: "./src/main.js",
  //更改打包出口
  output: {
    //更改打包结束之后的路径
    path: path.resolve(__dirname, "./build"),
    //更改结束打包之后的名字
    filename: "bundle.js"
  }
}