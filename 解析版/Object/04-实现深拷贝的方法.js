

var arr = ["old", 1, true, ["old1", "old2"], { name: "czx", age: 18 }];

// 1. 通过JSON进行深拷贝
//    1. JSON的stringify 可以把一个js对象序列化为一个JSON字符串
//    2. parse可以把JSON字符串反序列化一个JS对象
//    3. 这种方法可以拷贝对象和数组 但是不能拷贝函数.RegExp特殊对象的克隆
//    4. 会抛弃对象的constructor,所有的构造函数会指向Object
//    5. 对象有循环引用,会报错 
var newArr = JSON.parse(JSON.stringify(arr));
newArr[3].name = "codeSpirit";
// console.log(arr);
// console.log(newArr);

// 2. 面试手写版
/**
 * 
 * @param {object} obj 
 * @returns 
 */
function deepclone(obj) {
    // 如果是值类型 或 null 则直接return
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    // 定义结果对象
    let copy = {};

    // 如果对象是数组 则定义结果数组
    if (obj.constructor === Array) {
        copy = [];
    }

    // 遍历对象的key
    for (let key in obj) {
        // 如果key是对象的自有属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用深拷贝方法
            copy[key] = deepclone(obj[key]);
        }
    }
    return copy;
}

const result = deepclone(arr);
console.log("深拷贝的结果", result);
