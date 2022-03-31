<template>
  <div>
    <h1 :class="$attrs.class">{{ title }}</h1>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  //字符串数组用法
  // props: ["title", "message"],
  //对象类型
  inheritAttrs: false,
  props: {
    //指定类型
    title: String,
    //可以限制是否是必传还是给他设一个默认值
    message: {
      type: String,
      require: true,
      default: "123",
    },
  },
};
</script>

<style scoped></style>
