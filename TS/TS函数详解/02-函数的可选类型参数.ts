/*
 * @Author: czx
 * @Date: 2022-05-16 09:42:36
 * @LastEditTime: 2022-05-16 09:49:13
 * @LastEditors: czx
 * @Description: 
 */

//! n2?:number 实际上等价与 n2:number|undefined
//! 但是如果是使用联合类型的话,那么需要显示的将undefined写出来.
//: 可选类型要放在必选类型的后面
const fn=(n1:number,n2?:number)=>{
  return n1;
}

fn(2)
fn(2,3)