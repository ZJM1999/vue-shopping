
  import Vue from 'vue'
  
  import {Button,Header} from 'mint-ui'
  import 'mint-ui/lib/style.css'
  import './static/mui/css/mui.css'
  Vue.component(Button.name, Button)
  Vue.component(Header.name, Header)


 

  import app from './App.vue'
  const vm = new Vue({
    el:'#vm',

    render:fun=>fun(app)
  })
