<!--
 * @Author: czx
 * @Date: 2022-04-06 07:07:35
 * @LastEditTime: 2022-04-06 07:21:54
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  setup() {
    //props:代表data属性
    //context中包含attrs,slots,emit
    //返回值就是对应的data对象
    return {
      message: "Hello World",
    };
  },
};
</script>

<style scoped></style>
