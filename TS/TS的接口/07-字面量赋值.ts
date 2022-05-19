/*
 * @Author: czx
 * @Date: 2022-05-17 09:18:00
 * @LastEditTime: 2022-05-17 09:25:34
 * @LastEditors: czx
 * @Description: 
 */
type Info={
  name:string,
  age:number,
  address:string,
}

//:如果是这样直接在字面量上加属性的话,那么TS检测是会出错的
const p1:Info={
  name:"czx",
  age:18,
  address:"CCC",
  sex:"男",
}

//:但是先对对象赋值,在将这个对象赋值到p2上去,这样子是不会报错的
//:TS会经过一个freshness的擦除操作,将多余的属性擦除
const t1={
  name:"czx",
  age:18,
  address:"CCC",
  sex:"男",
}
const p2:Info=t1