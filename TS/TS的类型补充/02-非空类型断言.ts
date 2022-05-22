/*
 * @Author: czx
 * @Date: 2022-05-13 14:30:25
 * @LastEditTime: 2022-05-13 14:32:44
 * @LastEditors: czx
 * @Description: 非空类型断言
 */


const fn=(message?:string)=>{
  //: 加上感叹号 说明这个message是一定有值的
  console.log(message!.length)
}

