/*
 * @Author: czx
 * @Date: 2022-07-25 21:21:15
 * @LastEditTime: 2022-07-25 21:27:17
 * @LastEditors: czx
 * @Description:
 */

//: 模拟请求 将结果传入回调
const request = (res, callBackFn) => {
  callBackFn(res)
}

const obj = {
  name: [],
  foo: function () {
    request([1, 2, 4], (res) => {
      //更方便拿到对应的对象
      console.log(res, this.name)
    })

    request([1, 2, 4], function (res) {
      //: 因为这个函数是独立调用callBackFn 所以指向的是window
      //: 当我们想要找这个对象的this，就不是很方便了
      console.log(res, this)
    })
  },
}

obj.foo()
