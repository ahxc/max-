import Vue from 'vue'
import VueRouter from 'vue-router'
import { getCategoryList } from '../network/community'

Vue.use(VueRouter)

const User = () => import("../views/user/User")
const Community = () => import("../views/community/Community")
const Find = () => import("../views/find/Find")
const Contest = () => import("../views/contest/Contest")
const Detail = () => import("../components/content/detail/Detail")
const Post = () => import("../components/content/post/Post")
const Category = () => import("../components/content/categorylist/CategorySubp")
const Login = () => import("../components/common/loginregister/Login")
const Register = () => import("../components/common/loginregister/Register")

const routes = [
  {
    path: '/',
    redirect: '/user',
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/contest',
    name: 'Contest',
    component: Contest,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      keepAlive: false
    }
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router