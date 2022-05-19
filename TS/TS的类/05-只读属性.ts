/*
 * @Author: czx
 * @Date: 2022-05-16 16:17:37
 * @LastEditTime: 2022-05-16 16:22:18
 * @LastEditors: czx
 * @Description:  
 */
class Person{
  //:只读属性是可以在构造器中进行修改的
  //:只读属性如果是对象的话,对象中的值是可以修改的
  readonly name:string
  constructor(name:string){
    this.name=name
  }
}

const p1=new Person("czx");
p1.name="21"
export {}