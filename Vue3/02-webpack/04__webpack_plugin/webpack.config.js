/*
 * @Author: czx
 * @Date: 2022-03-26 15:59:48
 * @LastEditors: czx
 * @LastEditTime: 2022-03-28 12:32:03
 * @description: 
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// console.log(path.resolve(__dirname));
module.exports = {
  mode: "development",
  devtool: "source-map",
  // 更改打包入口
  entry: "./src/main.js",
  //更改打包出口
  output: {
    //更改打包结束之后的路径
    path: path.resolve(__dirname, "./build"),
    //更改结束打包之后的名字
    filename: "js/bundle.js"
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
        type: "asset",
        generator: {
          filename: "static/img/[name]-[hash:6][ext][query]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024,
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/font/[name]-[hash:6][ext][query]"
        },
      }
    ]
  },
  plugins: [
    //一个个的插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
  ]
}