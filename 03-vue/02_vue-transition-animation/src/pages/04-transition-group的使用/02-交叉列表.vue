<!--
 * @Author: czx
 * @Date: 2022-04-05 20:31:17
 * @LastEditTime: 2022-04-05 20:56:45
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <button @click="add">添加</button>
  <button @click="deleteNum">删除</button>
  <input type="text" v-model="message" />
  <transition-group
    tag="ul"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <ul v-for="name in filterName" :key="name" :data-index="index">
      <li>{{ name }}</li>
    </ul>
  </transition-group>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      names: ["yyy", "aaaa", "ccc", "ddd"],
      message: "",
    };
  },
  methods: {
    add() {
      this.names.splice(this.getRandomNum(), 0, this.names.length);
    },
    deleteNum() {
      this.names.splice(this.getRandomNum(), 1);
    },
    getRandomNum() {
      const index = Math.floor(Math.random() * this.names.length);
      return index;
    },
    onBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
  },
  computed: {
    filterName() {
      return this.names.filter((item) => item.includes(this.message));
    },
  },
};
</script>

<style scoped></style>
