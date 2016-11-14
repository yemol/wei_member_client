<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ code }}</h1>
  </div>
</template>

<script>
export default {
  created () {
    const request = require('axios')
    request.get('http://service.gamefy.cn/member/userinfo?key=23423fsdjewirwdsk3434eee989&wei=' + this.$route.query.wei + '&code=' + this.$route.query.code)
      .then(res => {
        this.code = res.request.response
      })
      .catch(res => {
        this.msg = res.request.response
      })
    // this.msg = this.$route.query.code
  },
  data () {
    return {
      msg: this.$route.query.wei,
      code: this.$route.query.code,
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
