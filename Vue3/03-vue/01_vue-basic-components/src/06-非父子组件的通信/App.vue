<!--
 * @Author: czx
 * @Date: 2022-04-04 09:55:36
 * @LastEditTime: 2022-04-04 10:25:42
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <main-cpn></main-cpn>
  <button @click="addNums">新增</button>
</template>

<script>
import MainCpn from "./MainCpn";
import { computed } from "vue";
export default {
  components: {
    MainCpn: MainCpn,
  },
  // provide: {
  //   name: "CodeSpirit",
  // },
  //todo 为了能够动态的接收data中的数据,可以使用函数,因为这样可以动态绑定这个实例的this
  //todo 同时为了能够动态变化数据,需要使用computed,使得数据变成响应式
  provide() {
    return {
      name: "Spirit",
      length: computed(() => this.names.length),
    };
  },
  data() {
    return {
      names: ["why", "czx", "spirit"],
    };
  },
  methods: {
    addNums() {
      this.names.push("yyy");
    },
  },
};
</script>

<style scoped></style>
