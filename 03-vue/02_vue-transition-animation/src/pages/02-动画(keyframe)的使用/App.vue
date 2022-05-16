<!--
 * @Author: czx
 * @Date: 2022-04-05 15:43:16
 * @LastEditTime: 2022-04-05 16:06:32
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <div>
    <button @click="toggle">切换</button>
  </div>
  <transition name="title">
    <div v-if="isShow" class="test">Hello World</div>
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
.test {
  display: inline-block;
}
.title-enter-active {
  animation: bounces 2s ease;
}
.title-leave-active {
  animation: bounces 2s ease reverse;
}

@keyframes bounces {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
