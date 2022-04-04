<!--
 * @Author: czx
 * @Date: 2022-04-04 14:51:57
 * @LastEditTime: 2022-04-04 14:57:10
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <div v-for="(name, index) in names" :key="name">
    <!-- 作用域插槽 将子组件的属性又给传递会使用该组件的地方,供他们使用 -->
    <slot :item="name" :index="index"></slot>
  </div>
</template>

<script>
export default {
  props: {
    names: Array,
    default: [],
  },
};
</script>

<style scoped></style>
