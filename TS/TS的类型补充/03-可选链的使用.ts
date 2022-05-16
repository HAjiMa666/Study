/*
 * @Author: czx
 * @Date: 2022-05-13 14:36:56
 * @LastEditTime: 2022-05-13 14:53:32
 * @LastEditors: czx
 * @Description: 
 */

type Person={
  name:string,
  friend ?:{
    name:string,
    age:number,
  }
}

const p1:Person={
  name:"czx",
  friend:{
    name:"czx",
    age:18,
  }
};

//因为Person上的friend是不确定的 所以需要在取friend的值的时候需要加上可选链
console.log(p1.friend?.name)