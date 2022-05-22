/*
 * @Author: czx
 * @Date: 2021-11-11 14:37:41
 * @LastEditors: czx
 * @LastEditTime: 2022-03-30 20:06:15
 * @description: entries
 */
// entries返回一个数组 数组元素以 [key,value]组成
// 如果要想判断 一个对象是否为空
// 可以使用 Object.entries()返回的数组进行判断 如果返回的数组为空 则说明 此对象为空


const obj = {
  name: "czx",
  age: 18,
  height: 1.84,
  job: "webEngineer",
}

const newObjArray = Object.entries(obj);
console.log(newObjArray); //[[key,value]]
