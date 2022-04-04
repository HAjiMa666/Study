<!--
 * @Author: czx
 * @Date: 2022-04-04 14:51:39
 * @LastEditTime: 2022-04-04 15:04:34
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <show-message names="names">
    <template v-slot="slotProps">
      <button>{{ slotProps.item }}={{ slotProps.index }}</button>
    </template>
  </show-message>
  <!-- 独占默认插槽 只有当没有使用具名插槽的时候才能使用-->
  <show-message names="names" v-slot="slotProps">
    <button>{{ slotProps.item }}={{ slotProps.index }}</button>
  </show-message>
</template>

<script>
import ShowMessage from "./ShowMessage";
export default {
  components: {
    ShowMessage,
  },
  data() {
    return {
      names: ["app", "coderWhy", "coderSpirit"],
    };
  },
};
</script>

<style scoped></style>
