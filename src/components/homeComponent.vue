<template>
  <div class="home-contnet">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item"><img class="img-item" :src="item" alt=""></mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/news">
          <img src="/images/menu1.png" alt="">
          <div class="mui-media-body">新闻列表</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <img src="/images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
         </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <img src="/images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <img src="/images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <img src="/images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
         </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="#">
          <img src="/images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
		        </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return{
      list:[],
    }
  },
  created(){
    this.getList()
  },
  methods:{
    //轮播图数据请求
    getList(){
      this.$http.get('http://192.168.1.101:3000/swipe')
      .then((result)=>{
        if(result.status === 200){
          this.list = result.body.data
        }else{
          Toast('查询不到轮播图数据')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .mint-swipe{
    height: 200px;
    .img-item{
      width: 100%;
      height: 200px;
    }
  }
  .mui-table-view {
    background-color: white;
    li{
      border: 0 !important;
    }
    img{
      width: 100%;
    }
    .mui-media-body{
      font-size: 12px !important;
    }
  }
</style>