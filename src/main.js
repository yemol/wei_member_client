// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'

Vue.use(VueRouter)

const openidBox = {}
const userinfoBox = {}
const weixinBox = {}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    openid: openidBox,
    userinfo: userinfoBox,
    weixin: weixinBox,
    currentRoute: window.location.pathname,
    auth: '23423fsdjewirwdsk3434eee989'
  },
  router,
  computed: {
    ViewComponent () {
      return App
      // if (this.currentRoute === '/userinfo') {
      //   return Script
      // } else {
      //   return App
      // }
    }
  },
  render (h) { return h(this.ViewComponent) }
  // render: (h) => {
  //   console.log(this)
  //   return h(App)
  // }
})
