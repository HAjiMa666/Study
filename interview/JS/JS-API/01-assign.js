const obj1 = { name: "czx", age: 18 };
const obj2 = { userName: "czx666", score: 99, address: { province: "江西省", town: "景德镇" } };
const obj3 = {};
Object.assign(obj3, obj1, obj2);

obj3.name = "codeSpirit";

console.log(obj1);
console.log(obj2);
obj3.address.province = "看看省份变了没有";
console.log(obj2);


// assign 可以将多个对象合并到一起去 但他是浅拷贝 只能拷贝一层 第二层对象就无法拷贝了
Object.defineProperty();
Object.defineProperties()