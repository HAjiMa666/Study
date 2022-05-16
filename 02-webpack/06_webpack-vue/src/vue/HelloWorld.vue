<!--
 * @Author: czx
 * @Date: 2022-03-29 07:17:45
 * @LastEditors: czx
 * @LastEditTime: 2022-03-31 19:20:45
 * @description: 
-->
<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World组件"
    }
  },
}
</script>

<style scoped>
h1 {
  color: aquamarine;
}
</style>