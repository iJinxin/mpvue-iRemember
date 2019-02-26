import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routeMap = [
  { path: '', redirect: '/dashboard'},
  { path: '/dashboard', name: 'Dashboard', component: () => import('@/views/dashboard.vue')}
]

export default new Router({
  routes: routeMap
})