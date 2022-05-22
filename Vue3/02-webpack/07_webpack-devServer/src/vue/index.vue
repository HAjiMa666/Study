<!--
 * @Author: czx
 * @Date: 2022-03-29 07:08:01
 * @LastEditors: czx
 * @LastEditTime: 2022-03-30 08:17:26
 * @description: 
-->
<template>
  <h1>{{ message }}</h1>
  <hello-world />
</template>

<script>
import HelloWorld from "./HelloWorld"
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "HelloWorld 你好啊test"
    }
  }
}
</script>

<style>
h1 {
  color: blueviolet;
}
</style>