<template>
  <div style="display:block;width:100%;height:100%">
    <div class="weui-loadmore">
      <i class="weui-loading"></i>
      <span class="weui-loadmore__tips">正在加载</span>
    </div>
  </div>
</template>
<script>
export default {
  created () {
  },
  data () {
    const NEXT_STEP = 'http://service.gamefy.cn/member/user_service?wei='
    // We need to check if current weixin supports localStorage.
    window.localStorage.setItem('userinfo', 'test')
    if (window.localStorage.getItem('userinfo') === 'test') {
      const request = require('axios')
      // Getting userinfo
      request.get('http://service.gamefy.cn/member/userinfo?wei=' + this.$route.query.state + '&code=' + this.$route.query.code, {
        headers: {'Authentication': this.$root.$data.auth}
      })
        .then(res => {
          window.localStorage.setItem('userinfo', res.request.response)
          window.location.href = NEXT_STEP + this.$route.query.state
        })
        .catch(res => {
          // Even we did not get userinfo, we still have to let member in.
          window.localStorage.setItem('userinfo', '{"openid": "","nickname": "","sex": 1,"language": "zh_CN","city": "","province": "","country": "","headimgurl": "","remark": ""}')
          window.location.href = NEXT_STEP + this.$route.query.state
        })
    } else {
      // We cannot use localStorage here.
      window.location.href = NEXT_STEP + this.$route.query.state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
