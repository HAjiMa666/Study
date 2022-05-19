/*
 * @Author: czx
 * @Date: 2022-05-16 15:13:55
 * @LastEditTime: 2022-05-16 15:15:43
 * @LastEditors: czx
 * @Description: 
 */
class Person{
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name=name;
    this.age=age
  }

  eating(){
    console.log(this.name+"正在吃饭")
  }
}

const p1=new Person("czx",18);
p1.eating();