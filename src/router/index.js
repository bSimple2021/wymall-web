import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

/*入驻商户商品管理*/
import GoodsManage from '../views/shop/goods/index'
import shopManage from '../views/shop/index'
import shopManageHome from '../views/shop/homepage'



/*商店页面*/
import MallMain from '../views/mall/main/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/mall',
    component: Home,
    children: [
      {path: 'mall', name: "Mall", component: MallMain}
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop-manage',
    name: 'shopManage',
    redirect: '/shop-manage/homepage',
    component: shopManage,
    children:[
      { path: 'homepage', name: 'homepage', component: shopManageHome},
      { path: 'goods', name: 'goodsManage', component: GoodsManage}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
