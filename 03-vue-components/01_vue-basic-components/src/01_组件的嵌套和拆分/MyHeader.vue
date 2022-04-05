<template>
  <div>
    <h2>Header</h2>
    <h2>banner</h2>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "I'm Header",
    };
  },
};
</script>

<style lang="scss" scoped></style>
