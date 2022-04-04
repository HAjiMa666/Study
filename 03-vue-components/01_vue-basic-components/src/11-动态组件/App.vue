<!--
 * @Author: czx
 * @Date: 2022-04-04 15:21:56
 * @LastEditTime: 2022-04-04 21:59:17
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <template v-for="tab in tabs" :key="tab">
    <button @click="switchTab(tab)">{{ tab }}</button>
  </template>
  <keep-alive>
    <component :is="currentTab"></component>
  </keep-alive>
  <component :is="currentTab"></component>
</template>

<script>
import AboutVue from "./pages/AboutVue.vue";
import HeadVue from "./pages/HeadVue.vue";
import MainVue from "./pages/MainVue.vue";
export default {
  components: {
    AboutVue,
    HeadVue,
    MainVue,
  },
  data() {
    return {
      tabs: ["AboutVue", "HeadVue", "MainVue"],
      currentTab: "AboutVue",
    };
  },
  methods: {
    switchTab(item) {
      this.currentTab = item;
    },
  },
};
</script>

<style scoped></style>
