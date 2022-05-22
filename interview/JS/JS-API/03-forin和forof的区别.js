const obj = { 1: "1", 2: "2", 3: "3", 4: "4" };
const num = [1, 2, 3, 4, 5];
for (key in obj) {
    console.log(key);
}

// 对象不可遍历 面试这道题说错了
for (value of num) {
    console.log(value);
}

// for in 是用来遍历对象属性的
// for of 是用来遍历拥有迭代器的对象的
// 原生对象因为没有提供 iterator接口 所以 无法使用for of进行遍历 会报错

// for in 只会遍历键名 而for of会遍历键值
for (key in num) {
    console.log(key);
}

