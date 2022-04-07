<!--
 * @Author: czx
 * @Date: 2022-04-05 16:46:45
 * @LastEditTime: 2022-04-05 17:11:40
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <div>
    <button @click="addNums">添加</button>
    <!-- <h1>{{ nums }}</h1> -->
    <h3>{{ showCounter }}</h3>
  </div>
</template>

<script>
//todo 1.监听nums的变化
//todo 2.用nums的变化去 给watchNums进行赋值
//todo 3.值变化的过程用gsap进行一个动画的过渡
import gasp from "gsap";
export default {
  data() {
    return {
      nums: 0,
      // watchNums: 0,
    };
  },
  methods: {
    addNums() {
      // this.nums = this.nums + 100;
      gasp.to(this, { duration: 1, nums: this.nums + 100 });
    },
  },
  computed: {
    showCounter() {
      return this.nums.toFixed(0);
    },
  },
  // watch: {
  //   nums(newValue) {
  //     gasp.to(this, { duration: 1, watchNums: newValue });
  //   },
  // },
};
</script>

<style scoped></style>
