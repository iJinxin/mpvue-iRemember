import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/font/iconfont.css'
import App from './App'

// import store from './store/index'
// import router from './router'

// import './assets/css/index.scss' // global scss

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')