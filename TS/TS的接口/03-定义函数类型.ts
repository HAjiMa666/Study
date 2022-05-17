/*
 * @Author: czx
 * @Date: 2022-05-16 21:04:02
 * @LastEditTime: 2022-05-16 21:14:25
 * @LastEditors: czx
 * @Description: 
 */

//:固定的格式，如果接口要写成函数类型的话，得按照下面这种方式来写
//:但是在实际开发中，还是推荐使用type来定义函数类型
interface IFn{
  (n1:number,n2:number):number
}

const fn=(n1:number,n2:number, calc:IFn)=>{
  return calc(n1,n2);
}

const result=fn(1,2,(n1,n2)=>{return n1+n2})
console.log(result)
