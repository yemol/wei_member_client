import VueRouter from 'vue-router'

import Login from './components/Login'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

const routes = [
  {
    path: '/Login',
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
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

module.exports = router
