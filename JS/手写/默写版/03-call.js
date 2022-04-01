const Foo = function (name) {
  this.name = name;
};

const test = function () {
  console.log(this.name);
};
const foo1 = new Foo("czx");

test.call(foo1);

Function.prototype.ZXCall = function (thisArg, ...restArg) {
  var fn = this;
  thisArg = Object(thisArg) ?? window;
  thisArg.fn = fn;
  var result = thisArg.fn(...restArg);
  delete thisArg.fn;
  return result;
};

test.ZXCall(foo1);
