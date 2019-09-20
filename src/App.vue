<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件 -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
    <!-- 这里是不被缓存的视图组件-->
    </router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
    created(){
      let _this = this
      window.addEventListener('load', function () {
        if(_this.$initLogin()){
          if (_this.$route.path !== '/' && _this.$route.path !== '/print') {
            // console.log('页面刷新')
            _this.$router.push('/')
          }
        } else {
          _this.$router.push('/login')
        }
      })
  },
}
</script>

<style scoped>
  @import "../public/static/css/font-awesome/css/font-awesome.min.css";
  @import "../public/static/css/reset.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
</style>
