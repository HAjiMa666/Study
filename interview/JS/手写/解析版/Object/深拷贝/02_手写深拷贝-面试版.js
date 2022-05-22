/*
 * @Author: czx
 * @Date: 2022-03-29 21:52:17
 * @LastEditors: czx
 * @LastEditTime: 2022-03-29 21:58:17
 * @description: 深拷贝-面试版
 */
var arr = ["old", 1, true, ["old1", "old2"], { name: "czx", age: 18 }];

function deepclone(obj) {
  // 如果是值类型 或 null 则直接return 这一段是判断JS的基础数据类型
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  // 定义结果对象
  let copy = {};

  // 如果对象是数组 则定义结果数组
  if (obj.constructor === Array) {
    copy = [];
  }

  // 遍历对象的key
  for (let key in obj) {
    // 如果key是对象的自有属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用深拷贝方法
      copy[key] = deepclone(obj[key]);
    }
  }
  return copy;
}
const newObj = deepclone(arr);
newObj[3][0] = "test";
console.log("new", newObj);
console.log("old", arr);