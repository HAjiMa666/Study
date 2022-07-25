/*
 * @Author: czx
 * @Date: 2022-07-25 20:25:18
 * @LastEditTime: 2022-07-25 20:30:35
 * @LastEditors: czx
 * @Description:
 */
const obj1 = {
  name: 'obj1',
}

const obj2 = {
  name: 'obj2',
  foo: function () {
    console.log(this)
  },
}

//: 间接函数引用 如果是像下面这种方式调用 则是默认调用 直接绑定window
;(obj1.foo = obj2.foo)()

//:正常来讲 这种应该是属于隐式绑定 this应该指向obj1
obj1.foo = obj2.foo
obj1.foo()
