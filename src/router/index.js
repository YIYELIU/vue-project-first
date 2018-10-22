import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import HomeContainer from '@/components/HomeContainer'
import MemberContainer from '@/components/MemberContainer'
import ShopContainer from '@/components/ShopContainer'
import SearchContainer from '@/components/SearchContainer'
import newList from '@/components/news/newList.vue'
import newsInfo from '@/components/news/newsInfo.vue'
import photoList from '@/components/photos/photoList.vue'

export default new Router({
  routes: [
    { path: '*', redirect: '/home'},
    { path: '/Home', component: HomeContainer },
    { path: '/Member', component: MemberContainer },
    { path: '/Shopcart', component: ShopContainer },
    { path: '/Search', component: SearchContainer },
    { path: '/home/newList', component: newList},
    { path: '/home/newsInfo/:id', component: newsInfo},
    { path: '/home/photoList', component: photoList}
  ],
  linkActiveClass: 'mui-active'
})
