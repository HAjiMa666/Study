/*
 * @Author: czx
 * @Date: 2022-03-10 15:32:58
 * @LastEditors: czx
 * @LastEditTime: 2022-03-30 20:15:21
 */

function implementInstanceof(target, origin) {
  //判断是否为原始类型 去除null这个特殊的
  if (typeof target !== "object" || target === null) return false;
  //检查比对源是否为构造函数
  if (typeof origin !== "function")
    throw new TypeError("origin must be a function");
  //取到对应的原型
  let proto = Object.getPrototypeOf(target);
  while (proto) {
    //找到了的话 那么就会return 不执行了
    if (proto === origin.prototype) return true;
    //判断条件 无效化 因为最顶层的原型是null
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

const result = implementInstanceof({}, Array);
console.log("实现的结果", result);