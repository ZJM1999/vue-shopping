<template>
  <div class="header">
    <mt-header fixed title="AppMAll"></mt-header>

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

<style lang="" scoped>
  .header{
    padding-top: 40px;
  }
</style>