/*
 * @Author: czx
 * @Date: 2022-03-10 15:32:58
 * @LastEditors: czx
 * @LastEditTime: 2022-03-10 17:19:08
 */

// function myInstanceof(target, origin) {
//   //判断目标是否为复杂类型 null区别对待,因为打印出来是object
//   if (typeof target !== "object" || target === null) {
//     return false;
//   }
//   //判断源是不是构造函数
//   if (typeof origin !== "function")
//     throw new TypeError("origin must be function");
//   let proto = Object.getPrototypeOf(target);
//   while (proto) { //Object.prototype
//     console.log(proto)
//     if (proto === origin.prototype) return true;
//     proto = Object.getPrototypeOf(proto);
//     console.log("空值", proto);
//   }
//   return false;
// }
// myInstanceof({}, Array)
// console.log(myInstanceof({}, Array));

// console.log(Object.getPrototypeOf(function fn() { }));


function implementInstanceof(target, origin) {
  //判断是否为原始类型 去除null这个特殊的
  if (typeof target !== "object" || target === null) return false;
  //检查比对源是否为构造函数
  if (typeof origin !== "function")
    throw new TypeError("origin must be a function");
  //取到对应的原型
  let proto = Object.getPrototypeOf(target);
  while (proto) {
    if (proto === origin.prototype) return true;
    //判断条件 无效化 因为最顶层的原型是null
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

const result = implementInstanceof({}, Array);
console.log("实现的结果", result);