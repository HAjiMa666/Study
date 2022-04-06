<!--
 * @Author: czx
 * @Date: 2022-04-06 07:39:50
 * @LastEditTime: 2022-04-06 08:15:01
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <button @click="increment">点击</button>
  <div>{{ counter }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let counter = ref(100);
    const increment = () => {
      counter.value++;
    };
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
