<!--
 * @Author: czx
 * @Date: 2022-04-05 14:30:07
 * @LastEditTime: 2022-04-05 15:08:43
 * @LastEditors: czx
 * @Description: 
-->
<template>
  <!-- 自定义的组件 使用v-model相当于下面的完整形式-->
  <input-vue v-model="message"></input-vue>
  //如果需要多个model 需要像下面这样 :起名字
  <input-vue v-model:message="message"></input-vue>
  <input-vue v-model:title="message"></input-vue>
  <!-- 完整形式 -->
  <!-- <input-vue
    :model-value="message"
    @update:model-value="message = $event"
  ></input-vue> -->
  <button @click="updateMessage">App按钮修改</button>
</template>

<script>
import InputVue from "./InputVue.vue";
export default {
  components: {
    InputVue,
  },
  data() {
    return {
      message: "Hello World",
    };
  },
  methods: {
    updateMessage() {
      this.message = "我是App修改的";
    },
  },
};
</script>

<style scoped></style>
