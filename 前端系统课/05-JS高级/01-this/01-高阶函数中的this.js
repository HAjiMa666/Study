/*
 * @Author: czx
 * @Date: 2022-07-25 20:03:50
 * @LastEditTime: 2022-07-25 20:08:18
 * @LastEditors: czx
 * @Description:
 */
const a = [1, 2, 3]

const testObj = {
  name: 'czx',
}

a.forEach(() => {
  console.log('箭头函数的this', this)
}, testObj)

a.forEach(function () {
  console.log('普通函数的this', this)
}, testObj)
