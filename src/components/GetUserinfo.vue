<template>
  <div class="hello">
    正在登陆中...
  </div>
</template>
<script>
export default {
  created () {
  },
  data () {
    const NEXT_STEP = 'http://service.gamefy.cn/member/user_service?wei='

    if (window.localStorage.hasOwnProperty('userinfo')) {
      // We have found saved user info in localStorage.
      window.location.href = NEXT_STEP + this.$route.query.state
    } else {
      // We need to check if current weixin supports localStorage.
      window.localStorage.setItem('userinfo', 'test')
      if (window.localStorage.getItem('userinfo') === 'test') {
        const request = require('axios')
        // Getting userinfo
        request.get('http://service.gamefy.cn/member/userinfo?key=23423fsdjewirwdsk3434eee989&wei=' + this.$route.query.state + '&code=' + this.$route.query.code)
          .then(res => {
            window.localStorage.setItem('userinfo', res.request.response)
            window.location.href = NEXT_STEP + this.$route.query.state
          })
          .catch(res => {
            window.localStorage.setItem('userinfo', '{"openid": "","nickname": "","sex": 1,"language": "zh_CN","city": "","province": "","country": "","headimgurl": "","remark": ""}')
            window.location.href = NEXT_STEP + this.$route.query.state
          })
      } else {
        // We cannot use localStorage here.
        window.location.href = NEXT_STEP + this.$route.query.state
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
