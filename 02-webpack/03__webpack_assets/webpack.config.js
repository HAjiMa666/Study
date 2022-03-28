/*
 * @Author: czx
 * @Date: 2022-03-26 15:59:48
 * @LastEditors: czx
 * @LastEditTime: 2022-03-28 08:35:44
 * @description: 
 */
const path = require("path");
// console.log(path.resolve(__dirname));
module.exports = {
  // 更改打包入口
  entry: "./src/main.js",
  //更改打包出口
  output: {
    //更改打包结束之后的路径
    path: path.resolve(__dirname, "./build"),
    //更改结束打包之后的名字
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, //使用正则表达式去匹配文件
        // loader: "css-loader", //选择合适的loader去打包文件
        //options后面可以跟一些额外的配置 下面是完整写法
        //use的加载顺序是从下往上的
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-preset-env")
                ]
              }
            }
          },
          "less-loader",
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "static/[name]-[hash:6][ext][query]"
        }
      }
    ]
  }
}