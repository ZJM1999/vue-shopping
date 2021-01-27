<template>
  <div class="header">
    <!-- 固定头部 -->
    <mt-header fixed title="MAll"></mt-header>
    <!-- 主体内容区域 -->
    <transition>
      <router-view/>
    </transition>
    <!-- 底部tab -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './views/tabbar.vue'
export default {
  components:{
    tabbar
  }
}
</script>

<style lang="less" scoped>
  .header{
    height: 100vh;
    padding-top: 40px;
    overflow-x: hidden;
    background-color: #ffff ;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all .5s ease;
  }
</style>