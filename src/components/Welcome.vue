<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ code }}</p>
  </div>
</template>

<script>
export default {
  data () {
    const request = require('axios')
    request.get('https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx5aa86e7885f60a8a&secret=SECRET&code=' + this.$route.query.code + '&grant_type=authorization_code ')
      .then(res => {
        return {
          msg: 'Welcome-get',
          code: this.$route.query.code,
          state: this.$route.query.state
        }
      })
      .catch(res => {
        console.log(res)
        return {msg: 'Welcome-fail'}
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
