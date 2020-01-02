import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store/store'
import print from './store/print'
import axios from 'axios'
import 'amfe-flexible'
import setaxios from './setaxios'
import './assets/icon/iconfont.css'
const android = window.android
export { android }
setaxios()
Vue.config.productionTip = false
Vue.prototype.$http=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
