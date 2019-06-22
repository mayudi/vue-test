import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const routes = [
  {
    path: '/manage',
    component: manage,
    name: '',
    children: [{
      path: '',
      component: home,
      meta: ['zhuye']
    }]
  }
]

export default new Router({
  routes
})
