/*
 * @Author: czx
 * @Date: 2022-05-16 18:12:39
 * @LastEditTime: 2022-05-16 18:14:34
 * @LastEditors: czx
 * @Description: 
 */
class Person{
  name:string
  constructor(name:string){
    this.name=name
  }
  eating(){
    console.log("我在吃饭")
  }
}

//:如果以类的类型为主的话 那么格式需要保持和类的对象保持一致
const p1:Person={
  name:"czx",
  eating(){
    console.log("")
  }
}

console.log(p1)
export {}