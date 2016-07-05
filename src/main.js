import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import FooView from './components/FooView.vue'
import BarView from './components/BarView.vue'
// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/foo': {
    component: FooView
  },
  '/bar': {
    component: BarView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/foo'
})

router.start(App, '#app')
