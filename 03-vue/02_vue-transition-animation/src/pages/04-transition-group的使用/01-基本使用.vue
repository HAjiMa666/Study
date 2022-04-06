<!--
 * @Author: czx
 * @Date: 2022-04-05 19:02:44
 * @LastEditTime: 2022-04-05 19:15:19
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <button @click="add">添加</button>
  <button @click="deleteNum">删除</button>
  <transition-group name="list" tag="ul">
    <ul v-for="name in names" :key="name">
      <li>{{ name }}</li>
    </ul>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      names: ["yyy", "aaaa", "ccc", "ddd"],
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
  },
};
</script>

<style scoped>
.list-enter-active,
.list-move,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-leave-active {
  position: absolute;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
