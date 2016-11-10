<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <router-view class="view one"></router-view>
    <router-view class="view one" name="a"></router-view>
    
    <router-link to="/login">login</router-link>
    <router-link to="/">home</router-link>
    <router-link to="/userinfo">userinfo</router-link>
  </div>
</template>

<script>
export default {
  data () {
    console.log(this.$route)
    return {}
  }
  // components: {
  //   Hello
  // }
}

</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
