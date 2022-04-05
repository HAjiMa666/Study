/*
 * @Author: czx
 * @Date: 2022-04-04 10:40:22
 * @LastEditTime: 2022-04-04 10:41:30
 * @LastEditors: czx
 * @Description:
 */

import mitt from "mitt";

//创建一个事件总线实例
const emitter = mitt();

export default emitter;
