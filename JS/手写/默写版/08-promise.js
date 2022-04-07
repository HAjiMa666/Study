/*
 * @Author: czx
 * @Date: 2022-04-01 14:13:34
 * @LastEditTime: 2022-04-01 16:34:18
 * @LastEditors: czx
 * @Description: Promise手写
 */

const rejected = "rejected";
const fulfilled = "fulfilled";
const pending = "pending";

const execFnWithCatchError = (execFn, value, resolve, reject) => {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (err) {
    reject(err);
  }
};

class ZXPromise {
  constructor(executor) {
    this.value = undefined;
    this.reason = undefined;
    this.state = pending;
    this.fulfilled = [];
    this.reject = [];
    const resolve = (value) => {
      if (this.state === pending) {
        queueMicrotask(() => {
          if (this.state !== pending) return;
          this.value = value;
          this.state = fulfilled;
          if (this.fulfilled) {
            this.fulfilled.forEach((fn) => {
              fn(this.value);
            });
            return this.value;
          }
        });
      }
    };
    const reject = (reason) => {
      if (this.state === pending) {
        queueMicrotask(() => {
          if (this.state !== pending) return;
          this.reason = reason;
          this.state = rejected;
          if (this.reject) {
            this.reject.forEach((fn) => {
              fn(this.reason);
            });
            return this.reason;
          }
        });
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(fulfilled, reject) {
    const defaultReject = (err) => {
      throw err;
    };
    reject = reject || defaultReject;
    return new ZXPromise((resolve, reject) => {
      //!解决在定时器内发生的状态改变
      if (this.state === fulfilled && fulfilled)
        execFnWithCatchError(fulfilled, this.value, resolve, reject);
      if (this.state === rejected && reject)
        execFnWithCatchError(reject, this.reason, resolve, reject);
      if (this.state === pending) {
        if (fulfilled)
          this.fulfilled.push(() => {
            execFnWithCatchError(fulfilled, this.value, resolve, reject);
          });
        if (reject) {
          this.reject.push(() => {
            execFnWithCatchError(reject, this.reason, resolve, reject);
          });
        }
      }
    });
  }

  catch(reject) {
    return this.then(undefined, reject);
  }
}

const promise = new ZXPromise((resolve, reject) => {
  // resolve("123");
  debugger;
  reject("456");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("错误", err);
  });
// const p1 = new Promise((resolve, rejected) => {
//   resolve(12223);
// });

// p1.then((res) => {
//   console.log("yyy", res);
//   return res;
// })
//   .then((res) => {
//     console.log("vvv", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
