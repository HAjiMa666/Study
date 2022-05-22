/*
 * @Author: czx
 * @Date: 2022-05-16 15:55:18
 * @LastEditTime: 2022-05-16 16:17:13
 * @LastEditors: czx
 * @Description: 
 */
class Person{
  private name:string
  protected age:number
  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }

  getName(){
    return this.name
  }
}

/**
 * 1.private和protected都可以在自己的当前类中被访问
 * 2.protected和private的区别在于,protected可以在继承自它的子类中进行访问,而带了private的属性则完全不行,只能在自己的类中被访问
 */
class Student extends Person{
  sno:number
  constructor(name:string,age:number,sno:number){
    super(name,age)
    this.sno=sno;
  }
  getInfo(){
    console.log(super.age,super.getName())
    console.log(this.sno)
  }
}

const p1=new Student("czx",18,180047101);

console.log(p1)

export {}