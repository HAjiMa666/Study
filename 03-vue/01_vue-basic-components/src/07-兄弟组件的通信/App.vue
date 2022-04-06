<!--
 * @Author: czx
 * @Date: 2022-04-04 10:39:09
 * @LastEditTime: 2022-04-04 10:44:36
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <content-vue />
  <head-vue />
</template>

<script>
import ContentVue from "./ContentVue.vue";
import HeadVue from "./HeadVue.vue";
export default {
  components: {
    ContentVue,
    HeadVue,
  },
};
</script>

<style lang="scss" scoped></style>
