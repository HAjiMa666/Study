Function.prototype.ZXApply = function (thisArg, args) {
  const fn = this;
  thisArg = Object(thisArg) ?? window;
  thisArg.fn = fn;
  if (Object.prototype.toString.call(args) !== "[object Array]")
    throw new TypeError("args must be a array");
  const result = thisArg.fn(...args);
  delete thisArg.fn();
  return result;
};

const Foo = function (name) {
  this.name = name;
};

const test = function (age) {
  console.log(this.name);
  console.log(age);
};
const foo1 = new Foo("czx");

test.ZXApply(foo1, 18);
