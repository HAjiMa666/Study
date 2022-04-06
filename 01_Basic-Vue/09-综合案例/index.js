/*
 * @Author: czx
 * @Date: 2022-03-26 06:52:22
 * @LastEditors: czx
 * @LastEditTime: 2022-03-26 07:52:25
 * @description: 
 */
Vue.createApp({
  template: "#myapp",
  data: function () {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ],
    }
  },
  methods: {
    increment(id) {
      this.books[id - 1].count++;
    },
    decrement(id) {
      this.books[id - 1].count--;
    },
    remove(id) {
      this.books.splice(id - 1, 1);
    }
  },
  // watch: {
  //   books: {
  //     handler(newValue) {
  //       let data = 0;
  //       newValue.forEach((item) => {
  //         data = data + item.price * item.count;
  //       }),
  //         this.totalCount = data
  //     },
  //     deep: true,
  //     immediate: true,
  //   }
  // }
  computed: {
    // 使用计算属性,不需要在data中再进行定义了,要不然会无效
    totalCount() {
      let data = 0;
      this.books.forEach((item) => {
        data = data + item.price * item.count;
      });
      return data;
    }
  }
}).mount("#app");