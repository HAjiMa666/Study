<!--
 * @Author: czx
 * @Date: 2022-04-04 09:55:48
 * @LastEditTime: 2022-04-04 10:24:02
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ name }}</h2>
    <h3>length:{{ length }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
    };
  },
  inject: ["name", "length"],
};
</script>

<style scoped></style>
