/*
 * @Author: czx
 * @Date: 2022-05-13 10:38:52
 * @LastEditTime: 2022-05-13 10:43:08
 * @LastEditors: czx
 * @Description: 
 */

//: unknown类型可以赋值给any类型和unknown类型
//: any类型可以赋值给任意类型
let result:unknown;
let r1:any;
let tttt:string=result;
let r2:string=r1;
let flag=true;

function foo(){
  return "123"
}

function bar(){
  return 123;
}

if(flag){
  result=foo();
}else{
  result=bar();
}

