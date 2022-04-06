<!--
 * @Author: czx
 * @Date: 2022-04-03 10:38:02
 * @LastEditTime: 2022-04-03 11:04:23
 * @LastEditors: czx
 * @Description: 子传父
-->

<template>
  <h1>当前计数:{{ count }}</h1>
  <count-button @add="addNum" @sub="subNum"></count-button>
</template>

<script>
import CountButton from "./CountButton.vue";
export default {
  components: {
    CountButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addNum(message) {
      console.log(message);
      this.count++;
    },
    subNum() {
      this.count--;
    },
  },
};
</script>

<style scoped></style>
