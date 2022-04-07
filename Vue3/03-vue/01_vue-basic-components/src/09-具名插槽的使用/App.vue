<!--
 * @Author: czx
 * @Date: 2022-04-04 11:30:29
 * @LastEditTime: 2022-04-04 11:52:18
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <slot-vue :name="rightName">
    <template v-slot:left>left</template>
    <!-- 缩写形式 -->
    <template #center>center</template>
    <!-- 动态绑定 -->
    <template v-slot:[rightName]>right</template>
  </slot-vue>
</template>

<script>
import SlotVue from "./SlotVue.vue";
export default {
  components: {
    SlotVue,
  },
  data() {
    return {
      rightName: "czx",
    };
  },
};
</script>

<style scoped></style>
