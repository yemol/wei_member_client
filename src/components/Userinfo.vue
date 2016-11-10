<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ code }}</h1>
  </div>
</template>

<script>
export default {
  created () {
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
