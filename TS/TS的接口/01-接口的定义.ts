/*
 * @Author: czx
 * @Date: 2022-05-16 20:44:47
 * @LastEditTime: 2022-05-16 20:47:43
 * @LastEditors: czx
 * @Description: 
 */
//1.可以使用type来对对象进行定义
type interface={
  name:string,
  age:number,
}

//2.也可以使用interface来对对象进行定义
//有的公司可能会习惯的给接口前面加上 I，来说明这是一个接口
interface IInterface{
  name:string,
  age:number,
}