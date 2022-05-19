/*
 * @Author: czx
 * @Date: 2022-05-16 20:53:07
 * @LastEditTime: 2022-05-16 20:57:51
 * @LastEditors: czx
 * @Description: 
 */
interface IFronted{
  [index:number]:string
}
//接口可以用于定义索引类型来进行约束
const frontedTechnique:IFronted={
  0:"JavaScript",
  1:"Vue",
  2:"HTML",
  3:"CSS",
  "czx":"czxzxc",
}

