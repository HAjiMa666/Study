/*
 * @Author: czx
 * @Date: 2022-03-26 16:40:36
 * @LastEditors: czx
 * @LastEditTime: 2022-03-28 08:33:12
 * @description: 
 */
import "../styles/01.css"
import "../styles/02.less"
import testimg from "../assets/帅哥.jpg"
export const createElement = () => {
  const elemen = document.createElement("div");
  const elemen2 = document.createElement("img");
  elemen.innerHTML = "Hello Spirit";
  elemen2.src = testimg;
  const body = document.querySelector("body");
  body.append(elemen);
  body.append(elemen2);
}
