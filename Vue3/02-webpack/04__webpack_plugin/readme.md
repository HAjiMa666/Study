# 解决打包之后没有index.html文件
## loader和plugin的区别
1. loader是用于特定的模块类型进行转换
2. plugin可以用于执行更加广泛的任务,比如打包优化,资源管理,环境变量注入等

## 插件
1. clean-webpack-plugin
   - 帮助我们清除上一个打包后的build文件夹

2. html-webpack-plugin
   - 帮助我们在打包文件中加入入口文件
   - 可以自己定义模板 使用EJS

3. copy-webpack-plugin
   -帮助我们复制public文件夹下的东西(客制化)

## 配置
- mode:可以选择模式,帮助我们配置了很多东西,告知webpack使用相应模式的内置优化
- devtool:可以选择工具,开启source-map