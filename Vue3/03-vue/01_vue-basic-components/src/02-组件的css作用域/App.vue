<template>
  <div>
    <h1>Hello World</h1>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
