const Foo = function (name) {
  this.name = name;
};

const test = function () {
  console.log(this.name);
};
const foo1 = new Foo("czx");

Function.prototype.ZXBind = function (thisArg, args = []) {
  const fn = this;
  thisArg = Object(thisArg) ?? window;
  const resultFn = function (...restArgs) {
    thisArg.fn = fn;
    const result = thisArg.fn(...[...args, ...restArgs]);
    delete thisArg.fn;
    return result;
  };
  return resultFn;
};

const fn = test.ZXBind(foo1);
fn();
