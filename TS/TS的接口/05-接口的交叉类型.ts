/*
 * @Author: czx
 * @Date: 2022-05-16 21:24:08
 * @LastEditTime: 2022-05-16 21:26:46
 * @LastEditors: czx
 * @Description: 
 */
interface IInterface1{
  swimming:()=>void
}

interface IInterface2{
  running:()=>void
}

type Test=IInterface1 | IInterface2
type Test2=IInterface1 & IInterface2

//:使用Type可以对接口进行一个合并，这种就是交叉类型

const P1:Test={
  swimming:()=>{}
}

const p:Test2={
  swimming:()=>{},
  running:()=>{}
}

export {}