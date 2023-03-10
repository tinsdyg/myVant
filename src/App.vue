<template>
  <transition name="van-slide-up">
    <router-view />
  </transition>


  <div class="van-safe-area-bottom">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="to_view">主页</van-tabbar-item>
      <van-tabbar-item icon="search" @click="to_view">联系人</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="to_view">其他</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="to_view">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  name: 'app',
  created() {
    // alert("app start")
  }, data() {
    return {
      active: 0,
      show: true
    }
  }, methods: {
    to_view() {
      this.show = true
      switch (this.active) {
        case 0: {
          console.log('Page A')
          this.$router.push('/')
          break
        }
        case 1: {
          console.log('Page B')
          this.$router.push('/about')
          break
        }
        case 2: {
          console.log('Page C')
          break
        }
        case 3: {
          console.log('Page D')
        }
      }
    }
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
