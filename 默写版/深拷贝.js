const obj = { name: "czx", age: 18, obj2: { address: "景德镇", shop: ["手柄", "零食"] } };
var arr = ["old", 1, true, ["old1", "old2"], { name: "czx", age: 18 }];

function deepClone(obj) {
    // 1. 判断obj是否是一个对象,如果是基本类型或者是null
    // 则直接返回obj
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    //设定存储值的对象
    let copy = {};

    // 如果对象是数组类型
    if (obj.constructor === Array) {
        copy = [];
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }
    return copy;
}


const result = deepClone(arr);
result[3].name = "codeSpirit";
console.log(arr);
console.log("深拷贝的结果", result);