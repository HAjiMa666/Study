<!--
 * @Author: czx
 * @Date: 2022-04-03 11:14:53
 * @LastEditTime: 2022-04-03 11:31:31
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <tab-control :titles="titles" :contents="contents"> </tab-control>
</template>

<script>
import TabControl from "./TabControl.vue";
export default {
  components: {
    TabControl,
  },
  data() {
    return {
      titles: ["游戏", "小吃", "电视"],
      contents: ["游戏页面", "小吃页面", "电视页面"],
    };
  },
};
</script>

<style scoped></style>
