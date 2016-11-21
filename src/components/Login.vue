<template>
  <div class="hello">
    <h4>{{ userinfo }}</h4>
    <h3>{{ openid }}</h3>
    <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
            <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="tel" placeholder="请输入手机号">
        </div>
        <div class="weui-cell__ft">
            <a href="javascript:;" class="weui-vcode-btn">获取验证码</a>
        </div>
    </div>
    <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" placeholder="请输入验证码">
        </div>
    </div>
    <a href="javascript:void(0)" v-on:click="getName" class="weui-btn weui-btn_primary">注册</a>
</template>
<script>
export default {
  created () {
    const request = require('axios')
    // 开始取得当前用户的openid
    request.get('http://service.gamefy.cn/member/userinfo?key=23423fsdjewirwdsk3434eee989&wei=sitv&code=' + this.$route.query.code)
      .then(res => {
        this.openid = JSON.parse(res.request.response).openid
      })
      .catch(res => {
        this.openid = 'error'
      })
  },
  data () {
    var data = window.localStorage.hasOwnProperty('userinfo') ? window.localStorage.getItem('userinfo') : '{"openid": "","nickname": "","sex": 1,"language": "zh_CN","city": "","province": "","country": "","headimgurl": "","remark": ""}'
    data = JSON.parse(data)
    return {
      openid: null,
      userinfo: data
    }
  },
  methods: {
    getName: function () {
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
