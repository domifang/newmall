import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ 'views/home/Home.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('views/cart/Cart.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('views/profile/Profile.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
