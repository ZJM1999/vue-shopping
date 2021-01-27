  import Vue from 'vue'
//导入路由模块
 import VueRouter from 'vue-router'
 Vue.use(VueRouter)

//导入组件
import homeComponent from './components/homeComponent.vue'
import memberComponent from './components/memberComponent.vue'
import cartComponent from './components/cartComponent.vue'
import searchComponent from './components/searchComponent.vue'
import newsComponent from './components/newsComponent.vue'

const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeComponent},
    {path:'/member',component:memberComponent},
    {path:'/cart',component:cartComponent},
    {path:'/search',component:searchComponent},
    {path:'/news',component:newsComponent},
  ],
  linkActiveClass:'mui-active'
})

export default router