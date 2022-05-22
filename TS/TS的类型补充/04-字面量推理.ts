/*
 * @Author: czx
 * @Date: 2022-05-13 15:38:26
 * @LastEditTime: 2022-05-13 15:46:28
 * @LastEditors: czx
 * @Description: 
 */

type Method= "GET" | "POST"
function request(url:string,method:Method){}


// 1.字面量推理
const options={
  url:"http://www.baidu.com",
  method:"POST",
} as const

// 2.定义一个type 确定死这个类型
type Request={
  url:string,
  method:Method,
}
const options2 : Request={
  url:"http://www.baidu.com",
  method:"POST",
}
request(options.url,options.method)
request(options2.url,options2.method)

export {}