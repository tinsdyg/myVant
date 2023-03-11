<template>
  <router-view />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="to_view">消息</van-tabbar-item>
    <van-tabbar-item icon="search" @click="to_view">联系人</van-tabbar-item>
    <van-tabbar-item icon="setting-o" @click="to_view">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "app",
  created() {
    // alert("app start")
  },
  data() {
    return {
      active: 0,
      show: true,
    };
  },
  methods: {
    to_view() {
      this.show = true;
      switch (this.active) {
        case 0: {
          console.log("Page A");
          this.$router.push("/");
          break;
        }
        case 1: {
          console.log("Page B");
          this.$router.push("/contacts");
          break;
        }
        case 2: {
          console.log("Page C");
          this.$router.push("/mine");
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #ebebeb;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

</style>
