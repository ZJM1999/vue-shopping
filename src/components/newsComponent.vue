<template>
  <div class="news-view">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell" v-for="item in news" :key="item.title">
        <router-link to="/newsContent/3">
          <img :src="item.portrait" alt="" class="mui-media-object mui-pull-left">
            <div class="mui-media-body">
              <h4>{{item.title}}</h4>
                <div class="content-bottom">
                  <span>发表时间:{{item.time | format}}</span>
                  <span>点击:{{item.clickNum}}次</span>
                </div>
            </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  data(){
    return {
      news:[]
    }
  },
  created(){
    this.getNews()
  },
  methods:{
    getNews(){
      this.$http.get('http://192.168.1.101:3000/newsList').then((result)=>{
        if(result.status === 200){
          this.news = result.body.data
        }else{
          Toast('新闻列表获取失败')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .news-view{
    ul{
      list-style: none;
      padding: 5px;
      margin: 5px;
      .mui-table-view-cell{
        
        padding: 5px 15px;
        img{
          width: 30px;
          height: 30px;
        }
        .mui-media-body{
          .content-bottom{
            display: flex;
            justify-content: space-between;
          }
        }
        
      }
    }
    
  }
  .mui-table-view:before{
    height: 0;
  }
</style>