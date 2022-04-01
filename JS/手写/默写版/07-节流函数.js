/*
 * @Author: czx
 * @Date: 2022-04-01 11:36:23
 * @LastEditTime: 2022-04-01 11:40:04
 * @LastEditors: czx
 * @Description:节流函数-放大招
 */

const throttle = (fn, duration) => {
  let lastTime = 0;
  const _throttle = function () {
    let nowTime = new Date().getTime();
    let remainTime = duration - (nowTime - lastTime);
    if (remainTime < 0) {
      fn();
      lastTime = nowTime;
    }
  };
};
