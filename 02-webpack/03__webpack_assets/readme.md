- 因为webpack5之前都是使用 `raw-loader url-loader file-loader`来对资源进行处理的
- 现在webpack5自动会对资源文件进行处理,无需配置额外loader 
- 但是还是需要一点配置的,在`webpack.config.js`中
  - 需要配置一个规则,我写在下面,写上对应的资源类型.
  - 这样在js中引入图片时,才会生效,注意是以`import`方式去引入,因为这样子才是一个模块,css中就不需要了
  ```js
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "asset/resource",
      }
   ```
- 改变静态资源的文件名字

```js
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "asset/resource",
        generator:{
          filename:"static/[name][hash][ext][query]"
        }
      }
```
