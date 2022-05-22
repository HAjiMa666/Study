/*
 * @Author: czx
 * @Date: 2022-05-17 15:49:58
 * @LastEditTime: 2022-05-17 16:04:55
 * @LastEditors: czx
 * @Description: 
 */
//: 泛型的目的---类型的参数化
//: 不是在定义函数的时候去确定函数的类型,而是在调用函数的时候去告知函数该是什么类型

function returnNum<Type>(number:Type):Type{
  return number
}

//: 这样子就简单定义了一个泛型,由我们在调用函数的时候来确定该函数是一个什么类型

//1.明确的定义参数类型
returnNum<number>(10)
returnNum<any[]>([])
returnNum<string>("")

//2.也可以让TS进行推导得出
returnNum(10)
returnNum(20)

export {}