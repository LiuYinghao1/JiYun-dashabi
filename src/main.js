import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/reset.css'
import '@/assets/iconfont/iconfont.css'
// 全局注册组件（也可以使用局部注册）
Vue.component('ECharts', ECharts)
import ECharts from 'vue-echarts'
import 'echarts'
// 全屏显示
import fullscreen from 'vue-fullscreen'
Vue.use(fullscreen)
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
