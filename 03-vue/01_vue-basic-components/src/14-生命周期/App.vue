<!--
 * @Author: czx
 * @Date: 2022-04-05 10:23:00
 * @LastEditTime: 2022-04-05 10:39:07
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <button @click="update">更新</button>
  <!-- <div>{{ message }}</div> -->
  <div v-if="isShow">
    <test-vue></test-vue>
  </div>
</template>

<script>
import TestVue from "./TestVue";
export default {
  components: {
    TestVue,
  },
  data() {
    return {
      message: "HelloWorld",
      isShow: true,
    };
  },
  methods: {
    update() {
      this.message = "Hello Spirit";
      this.isShow = !this.isShow;
    },
  },
  beforeCreate() {
    console.log("创建前");
  },
  created() {
    console.log("已创建");
  },
  beforeMount() {
    console.log("挂载前");
  },
  mounted() {
    console.log("已挂载");
  },
  beforeUnmount() {
    console.log("卸载前");
  },
  unmounted() {
    console.log("已卸载");
  },
  beforeUpdate() {
    console.log("更新前");
  },
  updated() {
    console.log("更新后");
  },
};
</script>

<style lang="scss" scoped></style>
