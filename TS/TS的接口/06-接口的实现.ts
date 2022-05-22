/*
 * @Author: czx
 * @Date: 2022-05-17 08:50:48
 * @LastEditTime: 2022-05-17 08:55:06
 * @LastEditors: czx
 * @Description: 接口的实现
 */
interface ISwim{
  swimming:()=>void
}

interface IRunning{
  running:()=>void
}

//:接口可以被多个实现
class Person implements ISwim,IRunning{
  swimming: ()=>{}
  running: ()=>{}
}

//:编写公共API的时候,使用接口实现会更加好,使用接口实现更具通用性
function API(action:ISwim){
  action.swimming();
}

//:只要实现了swimming这个方法,那么就可以对这个API进行一个调用,不局限于具体的类型
const a1=new API(new Person())

export {}