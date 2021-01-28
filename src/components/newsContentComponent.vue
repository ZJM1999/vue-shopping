<template>
  <div class="news-box">
    <div class="mui-media-body">
      <h4>{{contnet.title}}</h4>
      <div class="content-bottom">
        <span>发表时间:{{contnet.time | format}}</span>
        <span>点击:{{contnet.clickNum}}次</span>
      </div>
    </div>
    <hr>
    <p v-html="contnet.content"></p>
    <h4>发表评论</h4>
    <hr>
    <!-- 评论部分 -->
    <textarea id="textarea" cols="5" rows="5"></textarea>
    <mt-button size='large' type="primary">发表评论</mt-button>
    <ul>
      <li v-for="(item,i) in comments" :key="i">
        <div class="info">
          <span>第{{i}}楼</span> <span>用户:{{item.user}}</span> <span>发表时间:{{item.time | format}}</span>
        </div>
        <p>{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      contnet:{},
      comments:[]
    }
  },
  created(){
    this.getNewsContnet();
    this.getComments();
  },
  methods:{
    getNewsContnet(){
      this.$http.get('http://192.168.1.101:3000/newsContent?id='+this.$route.params.id).then((result)=>{
        console.log(result);
        if(result.status === 200){
          this.contnet = result.body.data
        }else{
          Toast('新闻内容获取失败')
        }
      })
    },
    getComments(){
      this.$http.get('http://192.168.1.101:3000/newsComment').then((result)=>{
        this.comments = result.body.data
      })
    }
      
  }
}
</script>

<style lang="less" scoped>
  .news-box{
    padding: 0 8px;
    ul{
      list-style: none;
      padding: 0;
      .info{
        background-color: #999;
        padding: 5px;
        font-size: 12px;
      }
      p{
        padding: 5px;
      }
    }
  }
  .mui-media-body{
    h4{
      text-align: center;
      color:red;
    }
    .content-bottom{
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      color: rgb(38, 38, 241);
    }
    
  }
  #textarea{
      margin-bottom: 0px;
    }
</style>