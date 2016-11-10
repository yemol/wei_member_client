import VueRouter from 'vue-router'

import Login from './components/Login'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Userinfo from './components/Userinfo'

const routes = [
  {
    path: '/login',
    components: {
      default: Login,
      a: Hello
    }
  },
  {
    path: '/',
    components: {
      default: Login,
      a: Hello
    }
  },
  {
    path: '/Welcome',
    components: {
      default: Welcome,
      a: Hello
    }
  },
  {
    path: '/userinfo',
    components: {
      default: Userinfo
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

module.exports = router
