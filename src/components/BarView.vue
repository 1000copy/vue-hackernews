<template>
  <div class="news-view">
    <!-- item list -->
    <h1>foo+{{msg}}</h1>
  </div>
</template>

<script>

export default {

  name: 'BarView',
  data () {
    return {
      msg:2
    }
  },

  route: {
    data ({ to }) {
      return {msg:2}
    }
  },

  created () {

    // console.log("tee")
  },

  destroyed () {

    // console.log("tar")
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

html, body
  font-family Verdana
  font-size 13px
  height 100%
a
  color #000
  cursor pointer
  text-decoration none
#wrapper
  background-color $bg
  position relative
  width 85%
  min-height 80px
  margin 0 auto
</style>
