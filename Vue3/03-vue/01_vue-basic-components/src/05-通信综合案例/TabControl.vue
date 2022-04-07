<!--
 * @Author: czx
 * @Date: 2022-04-03 11:15:02
 * @LastEditTime: 2022-04-03 11:45:29
 * @LastEditors: czx
 * @Description: 
-->

<template>
  <div class="tab-control">
    <template v-for="(title, index) in titles" :key="title">
      <div
        class="tab-control-item"
        :class="{ active: currentIndex === index }"
        @click="activeTab(index)"
      >
        <span>
          {{ title }}
        </span>
      </div>
    </template>
  </div>
  <div class="tab-content">
    <div>{{ contents[currentIndex] }}</div>
  </div>
</template>

<script>
export default {
  props: {
    titles: Array,
    contents: Array,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    activeTab(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  margin-bottom: 16px;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item.active {
  color: brown;
}

.tab-control-item.active span {
  padding: 3px 10px;
  border-bottom: solid 3px red;
}
</style>
