import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import HomeContainer from '@/components/HomeContainer'
import MemberContainer from '@/components/MemberContainer'
import ShopContainer from '@/components/ShopContainer'
import SearchContainer from '@/components/SearchContainer'

export default new Router({
  routes: [
    { path: '/Home', component: HomeContainer },
    { path: '/Member', component: MemberContainer },
    { path: '/Shopcart', component: ShopContainer },
    { path: '/Search', component: SearchContainer },
    { path: '*', redirect: '/home'}
  ],
  linkActiveClass: 'mui-active'
})
