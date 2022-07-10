/*
 * @Author: czx
 * @Date: 2022-07-05 18:48:57
 * @LastEditTime: 2022-07-05 18:52:02
 * @LastEditors: czx
 * @Description: 
 */
function foo(a){
  console.log(arguments)
  console.log(Array.isArray(arguments))
  console.log(a)
}

foo(123)