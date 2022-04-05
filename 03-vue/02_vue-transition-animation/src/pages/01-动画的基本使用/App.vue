<!--
 * @Author: czx
 * @Date: 2022-04-05 15:25:14
 * @LastEditTime: 2022-04-05 15:33:13
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <button @click="toggle">切换</button>
  <transition name="title">
    <template v-if="isShow">
      <h1>Hello World</h1>
    </template>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.title-enter-active,
.title-leave-active {
  transition: opacity 1s ease;
}
.title-enter-from,
.title-leave-to {
  opacity: 0;
}
</style>
