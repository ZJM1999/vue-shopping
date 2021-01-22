
  import Vue from 'vue'
  import app from './App.vue'

  const vm = new Vue({
    el:'#vm',

    render:fun=>fun(app)
  })
