<!--
 * @Author: czx
 * @Date: 2022-04-04 10:40:09
 * @LastEditTime: 2022-04-04 10:52:38
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <div>
    <h2>head</h2>
    <h2>count:{{ count }}</h2>
    <h3>name:{{ name }}</h3>
  </div>
</template>

<script>
import emitter from "./utils/eventBus";
export default {
  data() {
    return {
      count: 0,
      name: "",
    };
  },
  created() {
    emitter.on("yyy", (info) => {
      this.name = info.name;
      this.count++;
    });
  },
};
</script>

<style scoped></style>
