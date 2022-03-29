# devServer
开启实时更新的方式
1. 在webpack的配置中 加上 `watch:true` 这个属性
2. 在启动打包命令的时候 后面跟上一个  `--watch`
3. 使用devServer

## devServer
1. 不会输出build文件 会直接将文件输入到内存中 使用express框架解析后返回静态资源给浏览器进行解析
2. 它使用的是memfs这个库,之前使用的是他们自己开发的 memory-fs

### 配置信息

