/*
 * @Author: czx
 * @Date: 2022-05-16 21:19:32
 * @LastEditTime: 2022-05-16 21:23:48
 * @LastEditors: czx
 * @Description: 
 */
interface IInterface1{
  swimming:()=>void
}

interface IInterface2{
  running:()=>void
}

//:接口实现继承
//:同时他也是可以进行多继承的
interface Person extends IInterface1,IInterface2{
  yyy:()=>void
}

//:这样看，是需要以上三个接口的所有属性的
const Person222:Person={
  yyy:()=>{},
} 

export {}