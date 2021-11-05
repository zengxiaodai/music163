import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './styles/base.css'
import router from '@/router'
import '@/utils/vant'

// 全局注册组件
import SongItem from '@/components/SongItem'
Vue.component('SongItem', SongItem)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
