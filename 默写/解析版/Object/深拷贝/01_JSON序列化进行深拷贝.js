/*
 * @Author: czx
 * @Date: 2022-03-29 21:10:17
 * @LastEditors: czx
 * @LastEditTime: 2022-03-29 21:51:35
 * @description: 深拷贝-JSON
 */

const obj1 = [
  { name: "czx" },
  { age: 18 },
  12,
  "Spirit",
  {
    province: {
      address: "江西省",
      city: {
        address: "景德镇"
      }
    }
  }
]
// const JSONObj = JSON.stringify(obj1);
// const newObj1 = JSON.parse(JSONObj);
// obj1[0].name = "李银河";
// console.log("before JSON", obj1);
// console.log("after JSON", newObj1);

/**
 * 可以看到JSON前和JSON后 修改其一的值,只会有一方发生改变
 * 说明其中的引用也是被完全复制的 而不是简单的复制他的内存地址
 * 接下来讲解弊端
 */

const obj2 = {
  regExp: new RegExp(/\^\d$/),
}

//1. 无法拷贝RegExp正则表达式
// const JSONObj2 = JSON.stringify(obj2);
// const ParseObj2 = JSON.parse(JSONObj2);
// console.log("JSONObj2", JSONObj2); // outPut: {regExp:{}}
// console.log("ParseObj2", ParseObj2);// outPut: {regExp:{}}

//2. 无法拷贝函数
const obj3 = {
  getName: () => { return "Spirit" }
}
const JSONObj3 = JSON.stringify(obj3);
console.log("JSONObj3", JSONObj3);// outPut: {}

//3.会抛弃原有对象的constructor,所有的构造函数会指向Object
const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const obj4 = {
  person1: new Person("czx", 18)
};

const JSONObj4 = JSON.stringify(obj4);
const ParseObj4 = JSON.parse(JSONObj4);
console.log("raw obj", obj4);//outPut:{ person1: Person { name: 'czx', age: 18 } }
console.log("JSON obj", JSONObj4);//{"person1":{"name":"czx","age":18}}
console.log(obj4.person1.__proto__ === Person.prototype);// true
console.log(ParseObj4.person1.__proto__ === Person.prototype);//false
console.log(ParseObj4.person1.__proto__ === Object.prototype);//true


