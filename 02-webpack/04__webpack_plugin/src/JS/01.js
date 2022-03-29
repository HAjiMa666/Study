/*
 * @Author: czx
 * @Date: 2022-03-26 16:40:36
 * @LastEditors: czx
 * @LastEditTime: 2022-03-28 10:19:22
 * @description: 
 */
import "../styles/01.css"
import "../styles/02.less"
import testimg from "../assets/帅哥.jpg"
import avatar from "../assets/70849018.jpg"
import "../assets/font/iconfont.css"
export const createElement = () => {
  const elemen = document.createElement("div");
  const elemen2 = document.createElement("img");
  const elemen3 = document.createElement("img");
  const elemen4 = document.createElement("i");
  elemen4.className = "iconfont icon-ashbin";
  elemen4.innerHTML = "Hello Spirit"
  elemen.innerHTML = "Hello Spirit";
  elemen2.src = testimg;
  elemen3.src = avatar;
  const body = document.querySelector("body");
  body.append(elemen);
  body.append(elemen2);
  body.append(elemen3);
  body.append(elemen4);
}
