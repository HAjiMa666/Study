<!--
 * @Author: czx
 * @Date: 2022-04-04 11:11:13
 * @LastEditTime: 2022-04-04 11:15:40
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <my-slot-cpn>
    <h1>Hello World</h1>
    我是普通内容
  </my-slot-cpn>
</template>

<script>
import MySlotCpn from "./MySlotCpn";
export default {
  components: {
    MySlotCpn,
  },
};
</script>

<style scoped></style>
