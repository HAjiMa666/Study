<!--
 * @Author: czx
 * @Date: 2022-04-05 10:37:00
 * @LastEditTime: 2022-04-05 10:39:59
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <div>Hello World</div>
</template>

<script>
export default {
  beforeUnmount() {
    console.log("Test卸载前");
  },
  unmounted() {
    console.log("Test已卸载");
  },
};
</script>

<style lang="scss" scoped></style>
