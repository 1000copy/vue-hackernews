<template>
  <div class="news-view">
    <!-- item list -->
    <h1>foo+{{msg}}</h1>
  </div>
</template>

<script>

export default {

  name: 'FooView',
  data () {
    return {
      msg:1
    }
  },

  route: {
    data ({ to }) {
      return {msg:1}
    }
  }
}
</script>

<style lang="stylus">
.news-view
  padding-left 5px
  padding-right 15px
</style>
