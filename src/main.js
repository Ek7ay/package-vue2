import Vue from 'vue'
import App from './App.vue'
import loadingDirective from './directives/loading/loading'

Vue.config.productionTip = false
Vue.directive('loading', loadingDirective)

new Vue({
  render: h => h(App),
}).$mount('#app')
