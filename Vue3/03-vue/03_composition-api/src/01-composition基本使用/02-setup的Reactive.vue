<!--
 * @Author: czx
 * @Date: 2022-04-06 07:22:46
 * @LastEditTime: 2022-04-08 08:38:20
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <div>
    <button @click="increment">添加</button>
    <h1>当前计数:{{ state.counter }}</h1>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      counter: 0,
    });
    const increment = () => {
      state.counter++;
    };
    return {
      state,
      increment,
    };
  },
};
</script>

<style scoped></style>
