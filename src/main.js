import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store' 

Vue.use(ElementUI)

Vue.config.productionTip = false
import router from '@/router/router';
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
