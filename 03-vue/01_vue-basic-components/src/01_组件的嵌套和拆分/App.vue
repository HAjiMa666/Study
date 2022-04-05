<template>
  <my-header></my-header>
  <my-main></my-main>
  <my-footer></my-footer>
</template>

<script>
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import MyMain from "./MyMain";
export default {
  components: {
    MyHeader,
    MyMain,
    MyFooter,
  },
};
</script>
<style scoped></style>
