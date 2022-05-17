/*
 * @Author: czx
 * @Date: 2022-05-13 10:50:55
 * @LastEditTime: 2022-05-13 11:05:12
 * @LastEditors: czx
 * @Description:
 */
/**
 * :never 可以帮助使用者针对方法中没有使用过的场景进行一个更加完善的提示
 */

function foo(n1: number | string|boolean) {
  switch (typeof n1) {
    case 'number':
      console.log('这是数字');
      break;
    case 'string':
      console.log('这是字符串');
      break;
    case "boolean":
      console.log("这是布尔类型");
      break;
    default:
    const m1:never=n1;
  }
}

foo(true)
