/*
 * @Author: czx
 * @Date: 2022-03-26 15:59:48
 * @LastEditors: czx
 * @LastEditTime: 2022-03-30 08:17:05
 * @description: 
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index")
const { DefinePlugin } = require("webpack")
module.exports = {
  //指定在哪个环境下运行
  target: "web",
  mode: "development",
  devtool: "source-map",
  // 更改打包入口
  entry: "./src/index.js",
  //更改打包出口
  output: {
    //更改打包结束之后的路径
    path: path.resolve(__dirname, "./build"),
    //更改结束打包之后的名字
    filename: "js/bundle.js"
  },
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
  resolve: {
    extensions: [".js", ".json", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
      ,
      {
        test: /\.js/,
        loader: "babel-loader"
      },
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
      },

    ]
  },
  plugins: [
    //一个个的插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      //   //是否还适配vue2代码,false的话 那么会将适配代码删除掉 有一定的优化
      __VUE_OPTIONS_API__: true,
      //   //是否在生产环境下使用开发工具
      __VUE_PROD_DEVTOOLS__: true,
    })
  ]
}