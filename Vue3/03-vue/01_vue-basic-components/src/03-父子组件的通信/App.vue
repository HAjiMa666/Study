<template>
  <div>
    <show-message-vue title="你好啊" message="Hello"></show-message-vue>
    <show-message-vue :title="message" :message="title"></show-message-vue>
    <show-message-vue v-bind="info"></show-message-vue>
  </div>
</template>

<script>
import showMessageVue from "./showMessage.vue";
export default {
  components: {
    showMessageVue,
  },
  data() {
    return {
      message: "我是数据拿到的信息",
      title: "我是数据拿到的标题",
      info: {
        message: "我是对象拿到的数据",
        title: "我是对象拿到的标题",
        class: "spirit",
      },
    };
  },
};
</script>

<style scoped></style>
