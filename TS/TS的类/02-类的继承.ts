/*
 * @Author: czx
 * @Date: 2022-05-16 15:24:54
 * @LastEditTime: 2022-05-16 15:29:27
 * @LastEditors: czx
 * @Description: 
 */
class Person{
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }

  eating(){
    console.log("eating")
  }
}

class Student extends Person{
  sno:number;
  constructor(name:string,age:number,sno:number){
    //:继承 实现父类的构造方法
    super(name,age);
    this.sno=sno;
  }
  //: 重写
  eating(): void {
      //:可以先将父类的方法先执行一遍
      super.eating();
      console.log("在执行新的方法")
  }
}

const s1=new Student("czx",18,180047101);
s1.eating()
export{}