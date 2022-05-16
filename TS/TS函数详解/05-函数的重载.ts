/*
 * @Author: czx
 * @Date: 2022-05-16 14:41:58
 * @LastEditTime: 2022-05-16 14:49:55
 * @LastEditors: czx
 * @Description: 函数的重载
 */
/**
 * ts的重载
 * : 先写需要重载的类型
 * : 然后在最后一个地方写上重载的函数实现体.
 */
function add (n1:number,n2:number):number;
function add (n1:string,n2:string):string;

function add(n1:any,n2:any):any{
  return n1+n2;
}

const result= add(1,2);
const result2=add("123","ccz")

console.log(result,result2)

export {}