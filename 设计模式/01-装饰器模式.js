/*
 * @Author: czx
 * @Date: 2022-06-06 16:37:31
 * @LastEditTime: 2022-06-06 16:49:15
 * @LastEditors: czx
 * @Description:
 */

console.log("111");
function classDecorator(target) {
  target.hasDecorator = true;
  return target;
}

@classDecorator
class Button {}
console.log(Button.hasDecorator);
