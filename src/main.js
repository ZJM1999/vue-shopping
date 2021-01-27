
  import Vue from 'vue'
  
  //按需导入mint-ui组件
  import {Button,Header,Swipe, SwipeItem} from 'mint-ui'
  import 'mint-ui/lib/style.css'
  import './static/mui/css/mui.css'
  import './static/mui/css/icons-extra.css'
  Vue.component(Button.name, Button)
  Vue.component(Header.name, Header)
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
 
  //导入路由文件
  import router from './router.js'

  //导入vue-resource包
  import vueResource from 'vue-resource'
  Vue.use(vueResource)

  //时间格式化包
  import moment from 'moment'
  Vue.filter('format',(data,pattern='YYYY-MM-DD HH:mm:ss')=>{
    return moment(data).format('YYYY-MM-DD HH:mm:ss')
  })
 

  import app from './App.vue'
  const vm = new Vue({
    el:'#vm',
    render:fun=>fun(app),
    //挂载路由
    router
    
  })
