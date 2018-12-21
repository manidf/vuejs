import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import { currency } from '@/currency'

Vue.config.productionTip = false
Vue.filter('currency', currency)

// root instance
new Vue({
  store, // pass in the store in root instance so we do not have to import in other components.
  render: h => h(App),
}).$mount('#app')
