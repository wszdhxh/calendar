import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Handle from '../views/Handle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/handle',
    name: 'Handle',
    component: Handle
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
