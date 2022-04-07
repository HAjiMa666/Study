<!--
 * @Author: czx
 * @Date: 2022-04-03 10:48:10
 * @LastEditTime: 2022-04-03 11:03:59
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <div>
    <button @click="addNum">add</button>
    <button @click="subNum">sub</button>
  </div>
</template>

<script>
export default {
  emit: ["add", "sub"],
  methods: {
    addNum() {
      this.$emit("add", "我是额外信息");
    },
    subNum() {
      this.$emit("sub");
    },
  },
};
</script>

<style scoped></style>
