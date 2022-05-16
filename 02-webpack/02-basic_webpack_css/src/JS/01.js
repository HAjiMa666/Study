/*
 * @Author: czx
 * @Date: 2022-03-26 16:40:36
 * @LastEditors: czx
 * @LastEditTime: 2022-03-26 18:26:02
 * @description: 
 */
import "../styles/01.css"
import "../styles/02.less"
export const createElement = () => {
  const elemen = document.createElement("div");
  elemen.innerHTML = "Hello Spirit";
  const body = document.querySelector("body");
  body.append(elemen);
}
