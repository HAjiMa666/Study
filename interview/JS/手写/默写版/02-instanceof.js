/*
 * @Author: czx
 * @Date: 2022-03-30 20:08:48
 * @LastEditors: czx
 * @LastEditTime: 2022-03-30 20:22:50
 * @description: instanceof 手写
 */

function implementInstanceof(target, origin) {
  if (typeof target !== "object" || target === null) return false;
  if (typeof origin !== "function")
    throw new TypeError("origin must be a function");
  let proto = Object.getPrototypeOf(target);
  while (proto) {
    if (proto === origin.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

console.log(implementInstanceof([], Array));