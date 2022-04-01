/*
 * @Author: czx
 * @Date: 2022-04-01 10:49:09
 * @LastEditTime: 2022-04-01 11:36:11
 * @LastEditors: czx
 * @Description:防抖函数:延迟触发
 */

const debounce = (fn, delay) => {
  let timer;
  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
  return _debounce;
};

const inputTest = document.querySelector("#textInput");
const fn = debounce(() => {
  console.log("我执行了输出");
}, 1000);
inputTest.addEventListener("input", fn);
