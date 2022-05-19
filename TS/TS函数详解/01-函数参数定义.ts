/*
 * @Author: czx
 * @Date: 2022-05-16 09:30:19
 * @LastEditTime: 2022-05-16 09:41:25
 * @LastEditors: czx
 * @Description: 
 */
function foo(n1:number,n2:number,fn:(m1:number,m2:number)=>void){
  return fn(n1,n2);
}


const calc=foo(1,2,(n1,n2)=>{return n1*n2});
const add=foo(2,3,(n1,n2)=>{return n1+n2});

console.log(calc)
console.log(add)