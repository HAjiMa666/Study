<!--
 * @Author: czx
 * @Date: 2022-04-05 09:56:43
 * @LastEditTime: 2022-04-05 10:07:52
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <button @click="getRef">点击</button>
  <content-vue ref="content"></content-vue>
</template>

<script>
import ContentVue from "./ContentVue";
export default {
  components: {
    ContentVue,
  },
  methods: {
    getRef() {
      // 通过this.$refs来拿到组件实例
      // 可以在子组件中 使用 this.$parent来拿取
      console.log(this.$refs.content.message);
    },
  },
};
</script>

<style scoped></style>
