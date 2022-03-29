/*
 * @Author: czx
 * @Date: 2022-03-08 11:49:25
 * @LastEditors: czx
 * @LastEditTime: 2022-03-08 14:02:27
 */


const names = [1, 2, 3, 4];

let index = 0;
const iterator = {
    next: function () {
        if (index < names.length)
            return { done: false, value: names[index++] }
        else {
            return { done: true, value: undefined };
        }
    }
}



