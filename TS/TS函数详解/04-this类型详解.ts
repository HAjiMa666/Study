/*
 * @Author: czx
 * @Date: 2022-05-16 10:16:57
 * @LastEditTime: 2022-05-16 10:20:24
 * @LastEditors: czx
 * @Description: 
 */
const info={
  name:"czx",
  age:18,
  eating,
}

type thisType={
  name:string,
}

function eating(this:thisType){
  console.log(this.name)
}

//隐式绑定
info.eating();

//显示绑定
eating.call(info)