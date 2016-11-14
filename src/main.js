// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  router,
  computed: {
    ViewComponent () {
      console.log(this.currentRoute)
      return App
    }
  },
  render (h) { return h(this.ViewComponent) }
  // render: (h) => {
  //   console.log(this)
  //   return h(App)
  // }
})
