import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//解决重复点击页面链接的导航时报错问题
const orignalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return orignalReplace.call(this, location).catch(err => err)
}


const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router