/*
 * @Author: czx
 * @Date: 2022-05-16 10:03:21
 * @LastEditTime: 2022-05-16 10:06:15
 * @LastEditors: czx
 * @Description: 剩余参数
 */
const fn=(...nums:number[])=>{
  let total=0;
  for (const num of nums){
    total+=num;
  }
  console.log(total)
}

fn(123,33)

export {}