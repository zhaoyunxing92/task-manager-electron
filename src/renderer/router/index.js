//import Vue from "vue";
//import Router from "vue-router";
//import App from '../App'
export default [{
  path: '/',
  component: { template: '<router-view></router-view>' }, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    require('../apps/home/router').name,
    require('../apps/auth/router').name,
    {
      path: '/',
      redirect: '/welcome'
    }
  ]
}]
