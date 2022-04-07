<!--
 * @Author: czx
 * @Date: 2022-04-05 14:30:17
 * @LastEditTime: 2022-04-05 15:03:55
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <div>
    <h1>modelValue:{{ modelValue }}</h1>
    <!-- 当组件自己使用v-model的时候,然后自己组件内部也有v-model的情况下 -->
    <!-- 需要使用计算属性来给v-model绑定值 -->
    <input type="text" v-model="value" />
    <button @click="updateMessage">Input按钮修改</button>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  // emits: ["update:modelValue"],
  methods: {
    updateMessage() {
      this.$emit("update:modelValue", "这是Input按钮修改的");
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style scoped></style>
