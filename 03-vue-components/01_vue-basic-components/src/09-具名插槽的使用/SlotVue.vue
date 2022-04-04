<!--
 * @Author: czx
 * @Date: 2022-04-04 11:30:49
 * @LastEditTime: 2022-04-04 11:42:39
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <div class="container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot :name="name"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
.container {
  display: flex;
}
.left,
.right {
  width: 100px;
  background-color: aqua;
}
.center {
  flex: 1;
}
</style>
