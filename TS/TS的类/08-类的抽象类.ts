/*
 * @Author: czx
 * @Date: 2022-05-16 17:40:03
 * @LastEditTime: 2022-05-16 17:51:27
 * @LastEditors: czx
 * @Description: 
 */
abstract class Shape{
  abstract getArea():unknown;
}

class Rectangle extends Shape{
  width:number;
  height: number;
  constructor(width:number,height:number){
    super();
    this.width=width;
    this.height=height
  }
  getArea() {
    return this.width* this.height;
  }
}

class Circle extends Shape{
  radius:number
  constructor(radius:number){
    super();
    this.radius=radius;
  }
  getArea() {
    return this.radius*this.radius*3.14;
  }
}

const r1=new Rectangle(100,200);
const c1=new Circle(7);

function getArea(shape:Shape){
  return shape.getArea();
}

console.log(getArea(r1))
console.log(getArea(c1))

export {}