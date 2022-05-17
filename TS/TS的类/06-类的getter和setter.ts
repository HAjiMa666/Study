/*
 * @Author: czx
 * @Date: 2022-05-16 17:22:34
 * @LastEditTime: 2022-05-16 17:26:49
 * @LastEditors: czx
 * @Description: 
 */
class Person{
  private _name:string
  constructor(name:string){
    this._name=name;
  }
  //:通过下面这种方式进行一个get和set
  get name(){
    return this._name
  }
  set name(name){
    this._name=name
  }
}

const p2=new Person("zcx");
p2.name="cxz"
console.log(p2.name)

export {}