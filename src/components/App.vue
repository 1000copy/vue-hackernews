<template>
  <div id="wrapper">
    <h1>demo of router-view</h1>
    <p>
    <!-- 使用指令 v-link 进行导航。 -->
      <a v-link="{ path: '/foo' }">Go to Foo</a>
      <a v-link="{ path: '/bar' }">Go to Bar</a>
    </p>
    
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style lang="stylus">
@import "../variables.styl"

.v-link-active 
  color red

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
  width 99%
  min-height 80px
  margin 0 auto
</style>
