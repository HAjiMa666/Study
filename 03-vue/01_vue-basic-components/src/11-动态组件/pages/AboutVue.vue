<!--
 * @Author: czx
 * @Date: 2022-04-04 15:22:10
 * @LastEditTime: 2022-04-04 21:58:25
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <div>About组件</div>
  <button @click="addNum">{{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addNum() {
      this.count++;
    },
  },
};
</script>

<style scoped></style>
