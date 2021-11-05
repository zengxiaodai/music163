import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/layout/home',
    },
    {
      path: '/layout',
      component: Layout,
      children: [
        {
          path: 'home',
          component: Home,
          // meta: 路由元信息  可以给路由配置额外的信息
          meta: {
            title: '首页',
          },
        },
        {
          path: 'search',
          component: Search,
          meta: {
            title: '搜索',
          },
        },
      ],
    },
    {
      path: '/play/:id',
      component: Play,
    },
  ],
})

export default router
