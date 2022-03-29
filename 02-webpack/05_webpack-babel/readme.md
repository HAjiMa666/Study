# babel
> 主要是为了兼容以前的版本,将较新的语法转换为老版本的浏览器可以识别的代码

## 使用原生的babel
1. 需要安装`@babel/core @babel/cli`两个内容
2. 如果需要转换箭头函数的话,那么需要安装`@babel/plugin-transform-arrow-functions`这个插件去做特别的转换
3. 因为安装时语法转换插件很多,为了方便,babel提供了常用的预设插件集合
4. 需要安装 `@babel/preset-env -D`
5. 使用以下指令
`npx babel src/JS/02.js --out-file test.js --presets=@babel/preset-env`
## babel-loader
- 使用方法和原生babel是差不多的
- 需要在`webpack.config.js`中进行配置
```js
     {
        test: /\.js/,
        use: {
          loader: "babel-loader",
          options: {
            // plugins: [
            //   "@babel/plugin-transform-arrow-functions"
            // ]
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      },
```
- babel的配置文件也是可以像postcss那样将配置文件给抽离出来的
- babel.config.json
- .babelrc.json
