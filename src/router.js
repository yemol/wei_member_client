import VueRouter from 'vue-router'

import Login from './components/Login'
import Welcome from './components/Welcome'
import GetUserinfo from './components/GetUserinfo'

const routes = [
  {
    path: '/Login',
    components: {
      default: Login
    }
  },
  {
    path: '/',
    components: {
      default: Welcome
    }
  },
  {
    path: '/Welcome',
    components: {
      default: Welcome
    }
  },
  {
    path: '/GetUserinfo',
    components: {
      default: GetUserinfo
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

module.exports = router
