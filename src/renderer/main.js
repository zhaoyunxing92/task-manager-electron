import Vue from 'vue'
//import axios from 'axios'
import App from './App'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(VueRouter)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
//Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
//
// window.onresize = function () {
//   console.log(5555)
//   document.getElementById('app').style.height = document.documentElement.clientHeight - 72 * 3
// }

const router = new VueRouter({
  routes,
  // mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     if (from.meta.keepAlive) {
  //       from.meta.savedPosition = document.body.scrollTop;
  //     }
  //     return {x: 0, y: to.meta.savedPosition ||0}
  //   }
  // }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
new Vue({
  components: {App},
  template: '<App/>',
  router,
  store,
}).$mount('#app')
