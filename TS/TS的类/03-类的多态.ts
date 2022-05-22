/*
 * @Author: czx
 * @Date: 2022-05-16 15:40:25
 * @LastEditTime: 2022-05-16 15:45:01
 * @LastEditors: czx
 * @Description: 类的多态
 */
class Animal{
  action(){
    console.log("action")
  }
}

class Fish extends Animal{
  action(){
    console.log("鱼儿游")
  }
}

class Dog extends Animal{
  action(): void {
    console.log("狗儿跑")
  }
}

function DoAction(animals:Animal[]){
  for(const animal of animals){
    animal.action();
  }
}
//:多态实现的前提是继承
//:多态的本质上就是 父类的引用指向子类对象
//:虽然是父类的对象类型,但实际上是指向子类的对象的.
DoAction([new Fish(),new Dog()])