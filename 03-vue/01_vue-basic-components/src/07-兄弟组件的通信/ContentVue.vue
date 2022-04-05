<!--
 * @Author: czx
 * @Date: 2022-04-04 10:39:51
 * @LastEditTime: 2022-04-04 10:48:27
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <div>
    <h1>Hello</h1>
    <button @click="emitThing"></button>
  </div>
</template>

<script>
import emitter from "./utils/eventBus.js";
export default {
  methods: {
    emitThing() {
      emitter.emit("yyy", { name: "czx" });
    },
  },
};
</script>

<style scoped></style>
