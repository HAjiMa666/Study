<!--
 * @Author: czx
 * @Date: 2022-04-05 16:19:19
 * @LastEditTime: 2022-04-05 16:27:43
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <div>
    <button @click="toggle">切换</button>
  </div>
  <transition name="title">
    <template v-if="isShow">
      <h1 style="display: inline-block">Hello World</h1>
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
.title-enter-active {
  animation: flipInY 1s ease;
}
.title-leave-active {
  animation: rotateOut 1s ease;
}
</style>
