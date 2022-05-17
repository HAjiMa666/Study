/*
 * @Author: czx
 * @Date: 2022-05-13 16:26:04
 * @LastEditTime: 2022-05-13 16:38:24
 * @LastEditors: czx
 * @Description: 
 */
type fish={
  swimming:()=>void
}

type dog={
  running:()=>void
}

//: in方法缩小 是判断该类型中有没有对应的方法
function test(animal:fish|dog){
  if("swimming" in animal){
    console.log(animal.swimming())
  }
  if("running" in animal){
    console.log(animal.running())
  }
}

const fish1:fish={
  swimming:()=>{
    console.log("我是鱼")
  }
}

test(fish1)