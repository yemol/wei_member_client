<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ openid }}</p>
  </div>
</template>

<script>
export default {
  created () {
  },
  data () {
    console.log(this.$root.$data)
    return {
      msg: this.$root.$data.weixin,
      openid: this.$root.$data.openid
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
