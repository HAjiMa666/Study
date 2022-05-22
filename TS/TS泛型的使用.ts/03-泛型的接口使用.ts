/*
 * @Author: czx
 * @Date: 2022-05-17 16:16:41
 * @LastEditTime: 2022-05-17 16:20:41
 * @LastEditors: czx
 * @Description: 
 */

//:要想要解决这个问题,你可以给这个泛型设置一个默认值
interface IPerson<T1=string,T2=number>{
  name:T1,
  age:T2,
}

//:如果是当作接口使用的话,那么需要写明类型,这个不能默认推导出来
const P1:IPerson={
  name:"czx",
  age:18,
}