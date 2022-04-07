/*
 * @Author: czx
 * @Date: 2022-04-01 16:22:21
 * @LastEditTime: 2022-04-01 16:29:29
 * @LastEditors: czx
 * @Description:
 */
/*
 * @Author: czx
 * @Date: 2022-03-06 21:29:30
 * @LastEditors: czx
 * @LastEditTime: 2022-03-07 15:30:47
 */
const pending = "pending";
const fulfilled = "fullfiled";
const reject = "reject";

// 1. 这里使用微任务是为了先让then方法中的函数先赋值到this.onfulfilled和this.onrejected
class ZXPromise {
  constructor(executor) {
    this.status = pending;
    this.value = null;
    this.reason = null;
    this.onfulfilled = [];
    this.onrejected = [];
    const resolve = (value) => {
      if (this.status === pending) {
        queueMicrotask(() => {
          //解决同时resolve和reject冲突问题
          if (this.status !== pending) return;
          this.status = fulfilled;
          this.value = value;
          this.onfulfilled.forEach((fn) => {
            fn(value);
          });
        });
      }
    };
    const rejected = (reason) => {
      if (this.status === pending) {
        queueMicrotask(() => {
          if (this.status !== pending) return;
          this.status = reject;
          this.reason = reason;
          this.onrejected.forEach((fn) => {
            fn(reason);
          });
        });
      }
    };
    executor(resolve, rejected);
  }

  then(onfulfilled, onrejected) {
    //下面这两个if是为了解决在定时器中调用的时候延时而没有被执行到的问题
    return new ZXPromise((resolve, rejected) => {
      if (this.status === fulfilled) {
        try {
          const value = onfulfilled(this.value);
          resolve(value);
        } catch (error) {
          rejected(error);
        }
      }
      if (this.status === reject) {
        try {
          const value = onrejected(this.reason);
          resolve(value);
        } catch (error) {
          rejected(error);
        }
      }
      if (this.status === pending) {
        try {
          this.onfulfilled.push(() => {
            const value = onfulfilled(this.value);
            resolve(value);
          });
        } catch (error) {
          rejected(error);
        }
        try {
          this.onrejected.push(() => {
            const value = onrejected(this.value);
            resolve(value);
          });
        } catch (err) {
          rejected(err);
        }
      }
    });
  }
}
// const p1 = new ZXPromise((resolve, reject) => {
//   resolve(123);
// });

// p1.then((res) => {
//   console.log("res1", res);
// });

// p1.then((res) => {
//   console.log("res2: ", res);
// });

// p1.then(
//   (res) => {
//     console.log("res3: ", res);
//     return res + 12;
//   },
//   (reason) => {
//     console.log("reason4", reason);
//   }
// ).then((res) => {
//   console.log(res);
// });

// setTimeout(() => {
//   p1.then((res) => {
//     console.log("res4", res);
//   });
// }, 1000);
