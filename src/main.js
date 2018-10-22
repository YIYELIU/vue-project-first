// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 导入时间插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 各种组件
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(MintUI)

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 设置请求的根路径
Vue.http.options.root = "http://027xin.com:8899"
//全局设置 post 时候表单数据格式的组织形式
Vue.http.options.emulateJSON = true

import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
