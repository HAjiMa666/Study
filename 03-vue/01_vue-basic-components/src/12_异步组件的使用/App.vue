<!--
 * @Author: czx
 * @Date: 2022-04-04 22:15:40
 * @LastEditTime: 2022-04-04 22:42:44
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <async-content></async-content>
  <suspense>
    <template #default>
      <async-content2></async-content2>
    </template>
    <template #fallback>
      <h1>加载中</h1>
    </template>
  </suspense>
</template>

<script>
import { defineAsyncComponent } from "vue";
// 第一种写法
const AsyncContent = defineAsyncComponent(() => import("./AsyncContent.vue"));
// 第二种写法
const AsyncContent2 = defineAsyncComponent({
  loader: () => import("./AsyncContent.vue"),
  loadingComponent: <h1>加载中</h1>,
  //在显示loading组件之前,等待多久
  delay: 1000,
});
export default {
  components: {
    AsyncContent,
    AsyncContent2,
  },
};
</script>

<style scoped></style>
