<template>
  <div class="loggin" v-bind:class="{ show: isEnd }">
    <div><img src="static/logo.png" style="padding-bottom:30px;"/></div>
    <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
            <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd">
            <input v-model="mobile" class="weui-input" type="tel" placeholder="请输入手机号">
        </div>
        <div class="weui-cell__ft">
            <a href="javascript:;" v-on:click="getVerifyCode()" class="weui-vcode-btn">获取验证码</a>
        </div>
    </div>
    <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" v-model="verifyCodeInput" placeholder="请输入验证码">
        </div>
    </div>
    <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="password" v-model="password" placeholder="请输入密码">
        </div>
    </div>
    <input type="hidden" v-model="openid" name="openidTXT" id="openidTXT" />
    <input type="hidden" v-model="userinfo" name="userinfoTXT" id="userinfoTXT" />
    <a href="javascript:;" v-on:click="registerUser()" class="weui-btn weui-btn_primary">注册</a>
    <div class="js_dialog" id="warningDialog">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__bd">{{ warningMsg }}</div>
        <div class="weui-dialog__ft">
          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-on:click="hideDialog()">知道了</a>
        </div>
      </div>
    </div>
</template>
<script>
const $ = require('webpack-zepto')

export default {
  created () {
    const request = require('axios')
    // Get open id for member
    request.get('http://service.gamefy.cn/member/userinfo?wei=sitv&code=' + this.$route.query.code, {
      headers: {'Authentication': this.$root.$data.auth}
    })
      .then(res => {
        const user = JSON.parse(res.request.response)
        if (user.registered) {
          // save open id for current session
          this.$root.$data.openid = user.openid
          // For our members, we will redirect them into welcome page.
          this.$root.$data.userinfo = user
          this.$root.$router.push('/Welcome')
        } else {
          // We need to show login page if we did not find saved member info
          this.isEnd = true
          this.openid = user.openid
        }
      })
      .catch(res => {
        this.$root.$router.push('/Error')
      })

    document.title = '新用户注册'
  },
  data () {
    // save current weixin name into session store
    this.$root.$data.weixin = this.$route.query.state
    var data = window.localStorage.hasOwnProperty('userinfo') ? window.localStorage.getItem('userinfo') : '{"openid": "","nickname": "","sex": 1,"language": "zh_CN","city": "","province": "","country": "","headimgurl": "","remark": ""}'
    data = JSON.parse(data)
    window.localStorage.removeItem('userinfo')
    return {
      openid: '',
      userinfo: data,
      isEnd: false,
      verifyCode: '',
      verifyCodeInput: '',
      mobile: '',
      password: '',
      warningMsg: ''
    }
  },
  methods: {
    hideDialog: function () {
      console.log($('#warningDialog'))
      $('#warningDialog').hide(200)
    },
    registerUser: function () {
      // we need to check all input fields first.
      if (this.mobile.length !== 11) {
        this.warningMsg = '电话号码填写不正确，请重新填写！'
        $('#warningDialog').show(200)
        return
      }
      if (this.verifyCodeInput.length === 0) {
        this.warningMsg = '请输入验证码！'
        $('#warningDialog').show(200)
        return
      }
      if (this.verifyCodeInput !== this.verifyCode) {
        this.warningMsg = '验证码填写不正确，请重新填写！'
        $('#warningDialog').show(200)
        return
      }
      if (this.password.length < 6) {
        this.warningMsg = '请至少输入6位密码！'
        $('#warningDialog').show(200)
        return
      }

      const request = require('axios')
      // send out verify code
      request.get('http://service.gamefy.cn/member/register_user?mobile=' + this.mobile + '&wei=' + this.$root.$data.weixin + '&password=' + this.password + '&openid=' + this.openid + '&userinfo=' + encodeURIComponent(JSON.stringify(this.userinfo)), {
        headers: {'Authentication': this.$root.$data.auth}
      })
        .then(res => {
          this.$root.$data.openid = res.data.openid
          this.$root.$data.userinfo = res.data
          this.$root.$router.push('/Welcome')
        })
        .catch(error => {
          // Todo: add pop up event for verify error.
          console.log(error)
          window.alert('注册失败，请稍后再试！')
        })
      return
    },
    getVerifyCode: function () {
      const request = require('axios')
      // 开始取得当前用户的openid
      request.get('http://service.gamefy.cn/member/verify_user?mobile=' + this.mobile, {
        headers: {'Authentication': this.$root.$data.auth}
      })
        .then(res => {
          const data = JSON.parse(res.request.response)
          this.verifyCode = data.code
        })
        .catch(error => {
          // Todo: add pop up event for verify error.
          console.log(error)
          window.alert('无法发送验证码！')
        })
      return
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.loggin {
  display: none
}
.show {
  display: block;
}
</style>
