<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ code }}</p>
    <p>{{ state }}</p>
  </div>
</template>

<script>
export default {
  created () {
    const request = require('axios')
    request.get('http://service.gamefy.cn/member/userinfo?key=23423fsdjewirwdsk3434eee989&wei=sitv&code=' + this.$route.query.code)
      .then(res => {
        this.code = res
      })
      .catch(res => {
        this.msg = res
      })
    // this.msg = this.$route.query.code
  },
  data () {
    // const request = require('axios')
    // request.get('https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx5aa86e7885f60a8a&secret=SECRET&code=' + this.$route.query.code + '&grant_type=authorization_code ')
    //   .then(res => {
    //     return {
    //       msg: this.$route.query.code,
    //       code: '1',
    //       state: '2'
    //     }
    //   })
    //   .catch(res => {
    //     return {
    //       msg: this.$route.query.code,
    //       code: '1',
    //       state: '2'
    //     }
    //   })
    return {
      msg: '1',
      code: '2',
      state: '3'
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
